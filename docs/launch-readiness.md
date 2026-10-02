# Launch Readiness

This document tracks the Step 4 release checks for the Linwood Forest Insurance Group redesign.

## Pipeline Checks

Run these locally before every launch candidate:

```bash
npm run format:check
npm run lint
npm run type-check
npm run build
```

For a full launch smoke pass, start the production server and run:

```bash
npm run start
npm run audit:redirects
npm run audit:seo
npm run audit:a11y
npm run audit:lighthouse
```

The GitHub Actions workflow in `.github/workflows/launch-readiness.yml` runs the same checks on pull requests and manual dispatch. Lighthouse CI currently audits `/en` and `/zh`. After Step 2 pages are present, set `LHCI_URLS` to include Home, one product page, one blog page, and Contact.

## Lighthouse Gates

The Lighthouse CI config requires:

- Performance: 95+
- Accessibility: 95+
- Best practices: 95+
- SEO: 95+
- LCP: less than 2.0s
- CLS: less than 0.05
- Total blocking time: less than 150ms

If a run fails, inspect the temporary Lighthouse report URL emitted by `lhci autorun`.

## axe Accessibility Scan

`npm run audit:a11y` runs axe through Playwright against the URLs in `A11Y_PATHS`.

Default:

```text
/en,/zh
```

Launch candidate:

```bash
A11Y_PATHS="/en,/en/contact,/en/personal-insurance/home-insurance,/en/blog/5-security-tips-for-your-new-home,/zh" npm run audit:a11y
```

## SEO and Redirect Audit

Redirects live in `src/config/redirects.json` and are exposed to Next through `src/config/redirects.ts`.

Run:

```bash
npm run audit:redirects
npm run audit:seo
```

The SEO audit compares old sitemap URLs with:

- URLs in the new sitemap.
- Explicit 301 redirects in `src/config/redirects.json`.
- Wildcard redirects such as `/chn/:path*`.

By default, the audit uses `config/old-sitemap-urls.json` as the old sitemap fixture. For final launch, run it against the live old sitemap:

```bash
OLD_SITEMAP_URL="https://linwoodforest.com/sitemap.xml" npm run audit:seo
```

Once every Step 2 route exists, also verify redirect destinations:

```bash
VERIFY_REDIRECT_DESTINATIONS=true npm run audit:redirects
```

## Analytics and Consent

Analytics is consent-gated through `src/components/analytics/AnalyticsConsent.tsx`.

Configuration:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Behavior:

- No Google Analytics script loads until the visitor accepts.
- A decline stores the local preference and keeps analytics unloaded.
- IP anonymization is enabled when GA initializes.
- The CSP allows only the Google Analytics and Google Tag Manager domains required by this setup.

Pre-launch checks:

- Confirm the banner appears when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
- Confirm no GA network requests occur before acceptance.
- Confirm GA requests occur after acceptance.
- Confirm decline persists across reloads.

## Deployment and DNS Cutover Plan

### One Week Before Launch

- Confirm the final old sitemap export and update `config/old-sitemap-urls.json`.
- Verify every old URL has either a new sitemap URL or a 301 redirect.
- Confirm Google Business Profile, NAP data, JSON-LD, and footer contact details match.
- Confirm approved legal copy for privacy and SMS terms.
- Confirm analytics property, conversion events, and internal traffic filters.
- Lower DNS TTL for `linwoodforest.com` and `www.linwoodforest.com` to 300 seconds.

### Launch Day

- Freeze WordPress content edits.
- Run `npm run launch:check`.
- Start production preview and run redirect, SEO, axe, and Lighthouse audits.
- Deploy the production build.
- Update DNS records to the new host.
- Confirm both apex and `www` resolve to the new deployment.
- Confirm HTTPS certificate issuance and HSTS behavior.
- Submit the new sitemap in Google Search Console.
- Keep the WordPress site accessible on a private fallback URL for rollback.

### First 48 Hours

- Monitor 404 logs, redirect logs, Core Web Vitals, and form submissions.
- Check Search Console coverage and indexing status.
- Verify analytics traffic and consent behavior.
- Patch missing redirects immediately.

### Rollback

- Restore DNS records to the previous host if the launch has a critical issue.
- Keep the lowered TTL until traffic and Search Console look stable.
- Preserve the redirect inventory; do not remove 301 mappings during rollback.

## Phase 2 Handoff

The Step 4 tooling assumes static content for now. During headless WordPress migration, keep public routes stable and replace only the `lib/content` or `lib/cms` data-access layer. Re-run redirect and SEO audits before replacing static content with CMS-driven content.
