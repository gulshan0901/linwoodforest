import { NextResponse } from 'next/server';
import { z } from 'zod';
import { siteConfig } from '@/lib/config/site';

const GOOGLE_PLACES_API = 'https://places.googleapis.com/v1/places/';
const GOOGLE_LEGACY_PLACE_DETAILS_API = 'https://maps.googleapis.com/maps/api/place/details/json';
const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, private',
};
const GOOGLE_FIELD_MASK = 'rating,userRatingCount,reviews,googleMapsUri';

type Review = {
  rating: number;
  text: string;
  author: string;
  authorUrl?: string;
  relativeDate: string;
};

type GoogleReviewsResponse = {
  rating?: number;
  reviewCount?: number;
  googleMapsUri?: string;
  reviews: Review[];
};

const googlePlaceDetailsSchema = z.object({
  rating: z.number().min(0).max(5).optional(),
  userRatingCount: z.number().int().nonnegative().optional(),
  googleMapsUri: z.string().optional(),
  reviews: z
    .array(
      z.object({
        rating: z.number().min(0).max(5).optional(),
        text: z.object({ text: z.string().optional() }).optional(),
        originalText: z.object({ text: z.string().optional() }).optional(),
        relativePublishTimeDescription: z.string().optional(),
        authorAttribution: z
          .object({
            displayName: z.string().optional(),
            uri: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
});

const legacyPlaceDetailsSchema = z.object({
  status: z.string(),
  error_message: z.string().optional(),
  result: z
    .object({
      rating: z.number().min(0).max(5).optional(),
      user_ratings_total: z.number().int().nonnegative().optional(),
      url: z.string().optional(),
      reviews: z
        .array(
          z.object({
            rating: z.number().min(0).max(5).optional(),
            text: z.string().optional(),
            author_name: z.string().optional(),
            author_url: z.string().optional(),
            relative_time_description: z.string().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
});

function safeHttpsUrl(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

async function readGoogleError(response: Response) {
  const contentType = response.headers.get('content-type') ?? '';

  try {
    if (contentType.includes('application/json')) {
      return JSON.stringify(await response.json());
    }

    return await response.text();
  } catch {
    return 'Unable to read Google Places error body.';
  }
}

function unavailableReviewsResponse() {
  return NextResponse.json(
    {
      googleMapsUri: siteConfig.googleReviewsHref,
      reviews: [],
      unavailable: true,
    },
    { headers: NO_STORE_HEADERS },
  );
}

async function fetchPlacesNewReviews(apiKey: string, placeId: string, languageCode: string | null) {
  const placeUrl = new URL(encodeURIComponent(placeId), GOOGLE_PLACES_API);
  if (languageCode === 'en' || languageCode === 'zh') {
    placeUrl.searchParams.set('languageCode', languageCode);
  }

  let response: Response;
  try {
    response = await fetch(placeUrl, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': GOOGLE_FIELD_MASK,
      },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
  } catch (error) {
    console.error('Google Places review request failed.', error);
    return null;
  }

  if (!response.ok) {
    const errorBody = await readGoogleError(response);
    console.error(
      `Google Places rejected a review request with HTTP ${response.status}: ${errorBody}`,
    );
    return null;
  }

  let responseBody: unknown;
  try {
    responseBody = await response.json();
  } catch (error) {
    console.error('Google Places returned an unreadable review response.', error);
    return null;
  }

  const parsedPlace = googlePlaceDetailsSchema.safeParse(responseBody);
  if (!parsedPlace.success) {
    console.error(
      'Google Places returned review data in an unexpected format.',
      parsedPlace.error.flatten(),
    );
    return null;
  }
  const place = parsedPlace.data;

  const reviews = (place.reviews ?? []).flatMap((review) => {
    const text = review.text?.text || review.originalText?.text;
    const author = review.authorAttribution?.displayName;

    if (typeof review.rating !== 'number' || !author || !text) {
      return [];
    }

    return [
      {
        rating: review.rating,
        text,
        author,
        authorUrl: safeHttpsUrl(review.authorAttribution?.uri),
        relativeDate: review.relativePublishTimeDescription || '',
      },
    ];
  });

  return {
    rating: place.rating,
    reviewCount: place.userRatingCount,
    googleMapsUri: safeHttpsUrl(place.googleMapsUri),
    reviews,
  } satisfies GoogleReviewsResponse;
}

async function fetchLegacyPlacesReviews(
  apiKey: string,
  placeId: string,
  languageCode: string | null,
) {
  const placeUrl = new URL(GOOGLE_LEGACY_PLACE_DETAILS_API);
  placeUrl.searchParams.set('place_id', placeId);
  placeUrl.searchParams.set('fields', 'rating,user_ratings_total,reviews,url');
  placeUrl.searchParams.set('key', apiKey);
  if (languageCode === 'en' || languageCode === 'zh') {
    placeUrl.searchParams.set('language', languageCode);
  }

  let response: Response;
  try {
    response = await fetch(placeUrl, {
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
  } catch (error) {
    console.error('Google legacy Places review request failed.', error);
    return null;
  }

  let responseBody: unknown;
  try {
    responseBody = await response.json();
  } catch (error) {
    console.error('Google legacy Places returned an unreadable review response.', error);
    return null;
  }

  const parsedPlace = legacyPlaceDetailsSchema.safeParse(responseBody);
  if (!parsedPlace.success) {
    console.error(
      'Google legacy Places returned review data in an unexpected format.',
      parsedPlace.error.flatten(),
    );
    return null;
  }

  if (!response.ok || parsedPlace.data.status !== 'OK' || !parsedPlace.data.result) {
    console.error(
      `Google legacy Places rejected a review request with status ${parsedPlace.data.status}: ${
        parsedPlace.data.error_message ?? 'No error message returned.'
      }`,
    );
    return null;
  }

  const place = parsedPlace.data.result;
  const reviews = (place.reviews ?? []).flatMap((review) => {
    if (
      typeof review.rating !== 'number' ||
      !review.author_name ||
      !review.text ||
      review.text.length === 0
    ) {
      return [];
    }

    return [
      {
        rating: review.rating,
        text: review.text,
        author: review.author_name,
        authorUrl: safeHttpsUrl(review.author_url),
        relativeDate: review.relative_time_description || '',
      },
    ];
  });

  return {
    rating: place.rating,
    reviewCount: place.user_ratings_total,
    googleMapsUri: safeHttpsUrl(place.url),
    reviews,
  } satisfies GoogleReviewsResponse;
}

export async function GET(request: Request) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = siteConfig.googlePlaceId;

  if (!apiKey) {
    console.error('Google reviews are not configured. Missing GOOGLE_MAPS_API_KEY.');
    return unavailableReviewsResponse();
  }

  const languageCode = new URL(request.url).searchParams.get('languageCode');
  const newPlacesReviews = await fetchPlacesNewReviews(apiKey, placeId, languageCode);
  const reviewData =
    newPlacesReviews ?? (await fetchLegacyPlacesReviews(apiKey, placeId, languageCode));

  if (!reviewData) {
    return unavailableReviewsResponse();
  }

  return NextResponse.json(reviewData, { headers: NO_STORE_HEADERS });
}
