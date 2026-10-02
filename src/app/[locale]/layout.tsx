import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import { AnalyticsConsent } from '@/components/analytics/AnalyticsConsent';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { routing, type Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/config/site';
import { ThemeRegistry } from '@/theme/ThemeRegistry';

import '@/styles/tokens.css';
import '@/styles/base.css';
import '@/styles/utilities.css';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const htmlLang = locale === 'zh' ? 'zh-Hans' : (locale as Locale);

  return (
    <html lang={htmlLang}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            <Header />
            {children}
            <Footer />
            <AnalyticsConsent />
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
