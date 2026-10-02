import fs from 'node:fs/promises';

import redirects from '../src/config/redirects.json' with { type: 'json' };

const baseUrl = process.env.SEO_AUDIT_BASE_URL || process.env.BASE_URL || 'http://localhost:3000';
const oldSitemapUrl = process.env.OLD_SITEMAP_URL;
const fixturePath = new URL('../config/old-sitemap-urls.json', import.meta.url);

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => match[1]);
}

function normalizePath(url) {
  const parsed = new URL(url, 'https://linwoodforest.com');
  return parsed.pathname.endsWith('/') ? parsed.pathname : `${parsed.pathname}/`;
}

async function getOldUrls() {
  if (oldSitemapUrl) {
    const response = await fetch(oldSitemapUrl);
    if (!response.ok) {
      throw new Error(`Could not fetch old sitemap: ${response.status}`);
    }

    return extractLocs(await response.text());
  }

  return JSON.parse(await fs.readFile(fixturePath, 'utf8'));
}

async function getNewSitemapUrls() {
  const response = await fetch(new URL('/sitemap.xml', baseUrl));
  if (!response.ok) {
    throw new Error(`Could not fetch new sitemap: ${response.status}`);
  }

  return extractLocs(await response.text());
}

const oldUrls = await getOldUrls();
const newUrls = await getNewSitemapUrls();
const newPaths = new Set(newUrls.map(normalizePath));
const redirectSources = new Set(
  redirects
    .filter((redirect) => !redirect.source.includes(':path*'))
    .map((redirect) => redirect.source),
);
const wildcardRedirects = redirects.filter((redirect) => redirect.source.includes(':path*'));

const unmapped = oldUrls.filter((oldUrl) => {
  const oldPath = normalizePath(oldUrl);

  if (oldPath === '/' && newPaths.has('/en/')) {
    return false;
  }

  if (newPaths.has(oldPath)) {
    return false;
  }

  if (redirectSources.has(oldPath)) {
    return false;
  }

  return !wildcardRedirects.some((redirect) =>
    oldPath.startsWith(redirect.source.split('/:path*')[0]),
  );
});

if (unmapped.length > 0) {
  console.error('Old URLs missing from the new sitemap and redirect inventory:');
  console.error(unmapped.join('\n'));
  process.exit(1);
}

console.log(
  `SEO coverage audit passed: ${oldUrls.length} old URL(s), ${newUrls.length} new sitemap URL(s), ${redirects.length} redirect(s).`,
);
