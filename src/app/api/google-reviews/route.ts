import { NextResponse } from 'next/server';
import { z } from 'zod';
import { siteConfig } from '@/lib/config/site';

const GOOGLE_PLACES_API = 'https://places.googleapis.com/v1/places/';
const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, private',
};
const GOOGLE_FIELD_MASK = 'rating,userRatingCount,reviews,googleMapsUri';

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

export async function GET(request: Request) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = siteConfig.googlePlaceId;

  if (!apiKey) {
    console.error('Google reviews are not configured. Missing GOOGLE_MAPS_API_KEY.');
    return unavailableReviewsResponse();
  }

  const languageCode = new URL(request.url).searchParams.get('languageCode');
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
    return unavailableReviewsResponse();
  }

  if (!response.ok) {
    const errorBody = await readGoogleError(response);
    console.error(
      `Google Places rejected a review request with HTTP ${response.status}: ${errorBody}`,
    );
    return unavailableReviewsResponse();
  }

  let responseBody: unknown;
  try {
    responseBody = await response.json();
  } catch (error) {
    console.error('Google Places returned an unreadable review response.', error);
    return unavailableReviewsResponse();
  }

  const parsedPlace = googlePlaceDetailsSchema.safeParse(responseBody);
  if (!parsedPlace.success) {
    console.error(
      'Google Places returned review data in an unexpected format.',
      parsedPlace.error.flatten(),
    );
    return unavailableReviewsResponse();
  }
  const place = parsedPlace.data;

  const reviews = (place.reviews ?? [])
    .filter(
      (review) =>
        typeof review.rating === 'number' &&
        typeof review.authorAttribution?.displayName === 'string' &&
        (review.text?.text || review.originalText?.text),
    )
    .map((review) => ({
      rating: review.rating,
      text: review.text?.text || review.originalText?.text || '',
      author: review.authorAttribution?.displayName || '',
      authorUrl: safeHttpsUrl(review.authorAttribution?.uri),
      relativeDate: review.relativePublishTimeDescription || '',
    }));

  return NextResponse.json(
    {
      rating: place.rating,
      reviewCount: place.userRatingCount,
      googleMapsUri: safeHttpsUrl(place.googleMapsUri),
      reviews,
    },
    { headers: NO_STORE_HEADERS },
  );
}
