import { NextResponse } from 'next/server';
import { z } from 'zod';
import { siteConfig } from '@/lib/config/site';

const GOOGLE_PLACES_API = 'https://places.googleapis.com/v1/places/';
const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, private',
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

export async function GET(request: Request) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = siteConfig.googlePlaceId;

  if (!apiKey) {
    return NextResponse.json(
      { message: 'Google reviews are not configured.' },
      { status: 503, headers: NO_STORE_HEADERS },
    );
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
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri',
      },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
  } catch (error) {
    console.error('Google Places review request failed.', error);
    return NextResponse.json(
      { message: 'Google reviews are temporarily unavailable.' },
      { status: 502, headers: NO_STORE_HEADERS },
    );
  }

  if (!response.ok) {
    console.error(`Google Places rejected a review request with HTTP ${response.status}.`);
    return NextResponse.json(
      { message: 'Google reviews are temporarily unavailable.' },
      { status: 502, headers: NO_STORE_HEADERS },
    );
  }

  let responseBody: unknown;
  try {
    responseBody = await response.json();
  } catch (error) {
    console.error('Google Places returned an unreadable review response.', error);
    return NextResponse.json(
      { message: 'Google reviews are temporarily unavailable.' },
      { status: 502, headers: NO_STORE_HEADERS },
    );
  }

  const parsedPlace = googlePlaceDetailsSchema.safeParse(responseBody);
  if (!parsedPlace.success) {
    console.error('Google Places returned review data in an unexpected format.');
    return NextResponse.json(
      { message: 'Google reviews are temporarily unavailable.' },
      { status: 502, headers: NO_STORE_HEADERS },
    );
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
