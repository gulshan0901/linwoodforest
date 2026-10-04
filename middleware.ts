import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

import { routing } from '@/i18n/routing';
import { launchRedirects } from '@/config/redirects';

const handleI18nRouting = createMiddleware(routing);

function buildCsp(nonce: string) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isVercelDeployment = process.env.VERCEL === '1' || Boolean(process.env.VERCEL_ENV);
  const scriptSources = [
    "'self'",
    `'nonce-${nonce}'`,
    isDevelopment ? "'unsafe-eval'" : undefined,
    isVercelDeployment ? 'https://vercel.live' : undefined,
    'https://www.googletagmanager.com',
    'https://www.google.com/recaptcha/',
    'https://www.gstatic.com/recaptcha/',
  ]
    .filter(Boolean)
    .join(' ');
  const connectSources = [
    "'self'",
    'https://www.google-analytics.com',
    'https://analytics.google.com',
    'https://stats.g.doubleclick.net',
    isVercelDeployment ? 'https://vercel.live' : undefined,
    'https://www.google.com/recaptcha/',
    'https://www.gstatic.com/recaptcha/',
    isDevelopment ? 'ws://localhost:*' : undefined,
    isDevelopment ? 'ws://127.0.0.1:*' : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  return [
    "default-src 'self'",
    `script-src ${scriptSources}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://images.unsplash.com https://placehold.co https://www.google-analytics.com https://www.googletagmanager.com https://www.gstatic.com/recaptcha/",
    "font-src 'self'",
    `connect-src ${connectSources}`,
    "frame-src 'self' https://*.ezlynx.com https://*.term4sale.com https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/",
    "form-action 'self'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
}

export default function middleware(request: NextRequest) {
  const legacyRedirect = getLegacyRedirect(request);

  if (legacyRedirect) {
    return legacyRedirect;
  }

  const nonce = btoa(crypto.randomUUID());
  const requestHeaders = new Headers(request.headers);
  const csp = buildCsp(nonce);

  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', csp);

  const response = handleI18nRouting(new NextRequest(request, { headers: requestHeaders }));

  response.headers.set('Content-Security-Policy', csp);
  return response;
}

function normalizeRedirectPath(pathname: string) {
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function getLegacyRedirect(request: NextRequest) {
  const pathname = normalizeRedirectPath(request.nextUrl.pathname);

  for (const redirect of launchRedirects) {
    if (redirect.source.includes(':path*')) {
      const [prefix] = redirect.source.split('/:path*');
      const normalizedPrefix = normalizeRedirectPath(prefix);

      if (pathname === normalizedPrefix || pathname.startsWith(`${normalizedPrefix}/`)) {
        const suffix = pathname.slice(normalizedPrefix.length);
        const destinationPrefix = redirect.destination.split('/:path*')[0];
        const url = request.nextUrl.clone();
        url.pathname = `${destinationPrefix}${suffix}`;
        return Response.redirect(url, redirect.permanent ? 308 : 307);
      }
    }

    if (normalizeRedirectPath(redirect.source) === pathname) {
      const url = request.nextUrl.clone();
      url.pathname = redirect.destination;
      return Response.redirect(url, redirect.permanent ? 308 : 307);
    }
  }

  return null;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
