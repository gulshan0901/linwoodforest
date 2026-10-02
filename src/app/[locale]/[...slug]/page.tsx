import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

import { StaticPageTemplate } from '@/components/templates/StaticPageTemplate';
import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/config/site';
import { getAllStaticPageParams, getStaticPage } from '@/lib/content/static-pages';
import { generateSeoMetadata } from '@/lib/seo/metadata';

type StaticRouteProps = {
  params: Promise<{
    locale: Locale;
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return getAllStaticPageParams();
}

function breadcrumbJsonLd(locale: Locale, slug: string[], title: string) {
  const segments = slug.map((segment, index) => ({
    '@type': 'ListItem',
    position: index + 2,
    name: index === slug.length - 1 ? title : segment.replaceAll('-', ' '),
    item: new URL(
      `/${locale}/${slug.slice(0, index + 1).join('/')}`,
      siteConfig.siteUrl,
    ).toString(),
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: new URL(`/${locale}`, siteConfig.siteUrl).toString(),
      },
      ...segments,
    ],
  };
}

export async function generateMetadata({ params }: StaticRouteProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getStaticPage(locale, slug);

  if (!page) {
    return {};
  }

  return generateSeoMetadata({
    locale,
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function StaticRoutePage({ params }: StaticRouteProps) {
  const { locale, slug } = await params;
  const page = getStaticPage(locale, slug);

  if (!page) {
    notFound();
  }

  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(locale, page.slug, page.title)),
        }}
        nonce={nonce}
        type="application/ld+json"
      />
      <StaticPageTemplate page={page} />
    </>
  );
}
