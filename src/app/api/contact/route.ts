import { NextResponse } from 'next/server';

import { siteConfig } from '@/lib/config/site';
import { contactRequestSchema } from '@/lib/validation/contact';

const gravityForms = {
  contact: {
    formId: 2,
    consentField: 13,
    consentRevision: 5,
    honeypotField: 14,
  },
  quote: {
    formId: 13,
    consentField: 16,
    consentRevision: 7,
    honeypotField: 17,
  },
} as const;

const smsConsentHtml =
  'By checking this box, you agree to receive text messages from Linwood Forest Insurance Group LLC related to conversational purposes. You may reply STOP to opt out at any time. Reply HELP to (610) 572-7322 for assistance. Messages and data rates may apply. Message frequency may vary.<p>Learn more on our <a href="https://linwoodforest.com/privacy-policy/">Privacy Policy</a> and <a href="https://linwoodforest.com/privacy-policy-for-sms-communications/">Terms and conditions</a> page.</p>';

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin) {
    try {
      const originUrl = new URL(origin);
      const requestHost =
        request.headers.get('x-forwarded-host')?.split(',')[0].trim() ??
        request.headers.get('host');
      const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0].trim();
      const requestProtocol = forwardedProtocol ?? new URL(request.url).protocol.slice(0, -1);
      if (
        !requestHost ||
        originUrl.host !== requestHost ||
        originUrl.protocol !== `${requestProtocol}:`
      ) {
        return NextResponse.json({ message: 'Invalid request origin.' }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ message: 'Invalid request origin.' }, { status: 403 });
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid form submission.' }, { status: 400 });
  }

  const parsed = contactRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please check the required fields and CAPTCHA, then try again.' },
      { status: 400 },
    );
  }

  const submission = parsed.data;
  if (submission.website) {
    return NextResponse.json({ message: 'Invalid form submission.' }, { status: 400 });
  }

  const apiKey = process.env.GRAVITY_FORMS_API_KEY;
  const apiSecret = process.env.GRAVITY_FORMS_API_SECRET;
  if (!apiKey || !apiSecret) {
    console.error('Gravity Forms submission is unavailable: API credentials are not configured.');
    return NextResponse.json(
      { message: 'Form submission is temporarily unavailable. Please call (610) 572-7322.' },
      { status: 503 },
    );
  }

  const form = gravityForms[submission.formType];
  const apiBaseUrl = process.env.GRAVITY_FORMS_API_URL ?? `${siteConfig.siteUrl}/wp-json/gf/v2`;
  let apiBase: URL;
  let submissionUrl: URL;
  try {
    apiBase = new URL(apiBaseUrl);
    if (apiBase.protocol !== 'https:' || apiBase.origin !== siteConfig.siteUrl) {
      return NextResponse.json(
        { message: 'Form submission is temporarily unavailable. Please call (610) 572-7322.' },
        { status: 503 },
      );
    }
    submissionUrl = new URL(
      `forms/${form.formId}/submissions`,
      `${apiBase.href.replace(/\/+$/, '')}/`,
    );
  } catch {
    console.error('Gravity Forms submission is unavailable: the API URL is invalid.');
    return NextResponse.json(
      { message: 'Form submission is temporarily unavailable. Please call (610) 572-7322.' },
      { status: 503 },
    );
  }

  const formValues: Record<string, string | number> = {
    'input_1.3': submission.firstName,
    'input_1.6': submission.lastName,
    input_2: submission.email,
    input_3: submission.phone,
    input_4: submission.message,
    [`input_${form.consentField}.2`]: smsConsentHtml,
    [`input_${form.consentField}.3`]: String(form.consentRevision),
    [`input_${form.honeypotField}`]: '',
    source_page: 1,
    target_page: 0,
  };

  if (submission.smsConsent) {
    formValues[`input_${form.consentField}.1`] = '1';
  }

  if (submission.formType === 'contact' && submission.recaptchaToken) {
    formValues['g-recaptcha-response'] = submission.recaptchaToken;
  }

  let upstreamResponse: Response;
  try {
    upstreamResponse = await fetch(submissionUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formValues),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error('Gravity Forms submission request failed.', error);
    return NextResponse.json(
      { message: 'Form submission is temporarily unavailable. Please call (610) 572-7322.' },
      { status: 502 },
    );
  }

  let upstreamBody: unknown;
  try {
    upstreamBody = await upstreamResponse.json();
  } catch (error) {
    console.error(
      `Gravity Forms returned an unreadable response (${upstreamResponse.status}).`,
      error,
    );
    return NextResponse.json(
      { message: 'Form submission is temporarily unavailable. Please call (610) 572-7322.' },
      { status: 502 },
    );
  }

  if (!upstreamResponse.ok) {
    console.error(`Gravity Forms rejected a submission with HTTP ${upstreamResponse.status}.`);
    return NextResponse.json(
      { message: 'Form submission is temporarily unavailable. Please call (610) 572-7322.' },
      { status: 502 },
    );
  }

  if (typeof upstreamBody !== 'object' || upstreamBody === null || !('is_valid' in upstreamBody)) {
    console.error('Gravity Forms returned an unexpected submission response.');
    return NextResponse.json(
      { message: 'Form submission is temporarily unavailable. Please call (610) 572-7322.' },
      { status: 502 },
    );
  }

  if (upstreamBody.is_valid !== true) {
    return NextResponse.json(
      { message: 'Please check the required fields and CAPTCHA, then try again.' },
      { status: 422 },
    );
  }

  return NextResponse.json({ message: 'Your request has been submitted.' });
}

export function GET() {
  return NextResponse.json(
    {
      message: 'Use POST to submit a contact or quote request.',
    },
    {
      status: 405,
    },
  );
}
