import redirects from './redirects.json';

export type LaunchRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

export const launchRedirects = redirects satisfies LaunchRedirect[];

/*
 * Old sitemap URLs still needing manual confirmation once the full Step 2 route set is present:
 * - Carrier/service-center outbound carrier links that should stay as external links, not redirects.
 * - Any WordPress media attachment URLs, category archives, tag archives, and paginated archives.
 * - Old Chinese nested URLs under /chn/ should be sampled because the wildcard preserves the old path.
 */
