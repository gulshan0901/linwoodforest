import { enStaticPages } from '@/content/en/static-pages';
import { zhStaticPages } from '@/content/zh/static-pages';
import type { Locale } from '@/i18n/routing';
import type { StaticPageWithLocale } from '@/types/static-pages';

const pagesByLocale = {
  en: enStaticPages,
  zh: zhStaticPages,
} as const;

const aliases = new Map<string, string>([
  ['business-insurance/commercial-auto', 'business-insurance/business-auto-insurance'],
  ['business-insurance/commercial-auto-insurance', 'business-insurance/business-auto-insurance'],
  ['business-insurance/business-owners', 'business-insurance/business-owners-insurance'],
  ['business-insurance/general-liability', 'business-insurance/general-liability-insurance'],
  ['business-insurance/workers-compensation', 'business-insurance/workers-compensation-insurance'],
  ['personal-insurance/home', 'personal-insurance/home-insurance'],
  ['personal-insurance/auto', 'personal-insurance/auto-insurance'],
  ['personal-insurance/condo', 'personal-insurance/condo-insurance'],
  ['personal-insurance/motorcycle', 'personal-insurance/motorcycle-insurance'],
  ['personal-insurance/flood', 'personal-insurance/flood-insurance'],
  ['personal-insurance/umbrella', 'personal-insurance/umbrella-insurance'],
  ['personal-insurance/pet', 'personal-insurance/pet-insurance'],
  ['terms-and-conditions-sms', 'privacy-policy-for-sms-communications'],
]);

function pagePath(slug: string[]) {
  return `/${slug.join('/')}`;
}

function normalizeSlug(slug: string[]) {
  const joined = slug.join('/');
  return aliases.get(joined)?.split('/') ?? slug;
}

export function getAllStaticPages(locale: Locale): StaticPageWithLocale[] {
  return pagesByLocale[locale].map((page) => ({
    ...page,
    locale,
    path: pagePath(page.slug),
  }));
}

export function getStaticPage(locale: Locale, slug: string[]): StaticPageWithLocale | undefined {
  const normalized = normalizeSlug(slug);
  const page = pagesByLocale[locale].find(
    (candidate) => candidate.slug.join('/') === normalized.join('/'),
  );

  if (!page) {
    return undefined;
  }

  return {
    ...page,
    locale,
    path: pagePath(page.slug),
  };
}

export function getAllStaticPageParams() {
  return (Object.keys(pagesByLocale) as Locale[]).flatMap((locale) =>
    pagesByLocale[locale].map((page) => ({
      locale,
      slug: page.slug,
    })),
  );
}
