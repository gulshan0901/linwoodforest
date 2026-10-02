import type { Locale } from '@/i18n/routing';
import { homeContent as enHomeContent } from '@/content/en/home';
import { homeContent as zhHomeContent } from '@/content/zh/home';

const homeContentByLocale = {
  en: enHomeContent,
  zh: zhHomeContent,
} as const;

export function getHomeContent(locale: Locale) {
  return homeContentByLocale[locale];
}
