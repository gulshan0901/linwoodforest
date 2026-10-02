import type { Locale } from '@/i18n/routing';

export type StaticCard = {
  title: string;
  body: string;
  href?: string;
};

export type StaticSection = {
  heading: string;
  body?: string;
  bullets?: string[];
  cards?: StaticCard[];
};

export type StaticPage = {
  slug: string[];
  title: string;
  description: string;
  eyebrow?: string;
  intro: string;
  sections: StaticSection[];
  cta?: {
    title: string;
    body: string;
    label: string;
    href: string;
    external?: boolean;
  };
};

export type StaticPageWithLocale = StaticPage & {
  locale: Locale;
  path: string;
};
