import type { Metadata } from 'next';

import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/config/site';

type MetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
};

export function generateSeoMetadata({
  locale,
  title,
  description,
  path = '',
}: MetadataInput): Metadata {
  const pathname = `/${locale}${path}`;
  const canonical = new URL(pathname, siteConfig.siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: new URL(`/en${path}`, siteConfig.siteUrl).toString(),
        'zh-Hans': new URL(`/zh${path}`, siteConfig.siteUrl).toString(),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function insuranceAgencyJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.licensedStates,
    priceRange: '$$',
  };
}
