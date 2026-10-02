import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { GetInTouchSection } from '@/components/sections/GetInTouchSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TeamPreviewSection } from '@/components/sections/TeamPreviewSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhoWeAreSection } from '@/components/sections/WhoWeAreSection';
import type { Locale } from '@/i18n/routing';
import { getHomeContent } from '@/lib/cms/home';
import { generateSeoMetadata, insuranceAgencyJsonLd } from '@/lib/seo/metadata';

type HomePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getHomeContent(locale);

  return generateSeoMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const content = getHomeContent(locale);
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <main id="main-content">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceAgencyJsonLd()) }}
        nonce={nonce}
        type="application/ld+json"
      />
      <HeroSection content={content.hero} />
      <WhoWeAreSection content={content.whoWeAre} />
      <ServicesSection content={content.services} />
      <TeamPreviewSection content={content.team} />
      <StatsSection stats={content.stats} />
      <GetInTouchSection />
      <TestimonialsSection content={content.testimonials} />
      <BlogPreviewSection content={content.blog} />
      <PartnersSection content={content.partners} />
      <ContactCtaSection content={content.contactCta} />
    </main>
  );
}
