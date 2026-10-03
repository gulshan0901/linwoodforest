import type { MetadataRoute } from 'next';

import { routing } from '@/i18n/routing';
import { siteConfig } from '@/lib/config/site';
import { getAllStaticPages } from '@/lib/content/static-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) => {
    const home = {
      url: `${siteConfig.siteUrl}/${locale}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: locale === routing.defaultLocale ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${siteConfig.siteUrl}/en`,
          'zh-Hans': `${siteConfig.siteUrl}/zh`,
        },
      },
    };

    const pages = getAllStaticPages(locale).map((page) => ({
      url: `${siteConfig.siteUrl}/${locale}${page.path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.siteUrl}/en${page.path}`,
          'zh-Hans': `${siteConfig.siteUrl}/zh${page.path}`,
        },
      },
    }));

    const contactPages = ['/contact', '/get-quote'].map((path) => ({
      url: `${siteConfig.siteUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.siteUrl}/en${path}`,
          'zh-Hans': `${siteConfig.siteUrl}/zh${path}`,
        },
      },
    }));

    return [home, ...pages, ...contactPages];
  });
}
