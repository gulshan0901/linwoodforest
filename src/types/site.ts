import type { Locale } from '@/i18n/routing';

export type LocaleParams = {
  locale: Locale;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ServiceCard = {
  title: string;
  description: string;
  href: string;
  items: string[];
};

export type TeamMemberPreview = {
  name: string;
  role: string;
  summary: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  avatar?: string;
  date?: string;
};

export type BlogPreview = {
  title: string;
  excerpt: string;
  href: string;
};

export type HomeContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    image: {
      src: string;
      alt: string;
    };
  };
  whoWeAre: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    cards: ServiceCard[];
  };
  team: {
    eyebrow: string;
    title: string;
    body: string;
    members: TeamMemberPreview[];
  };
  stats: Array<{
    value: string;
    label: string;
    description?: string;
    icon?:
      'location' | 'building' | 'clients' | 'claims' | 'star' | 'growth' | 'shield' | 'support';
    tone?: 'blue' | 'green' | 'orange' | 'red';
  }>;
  testimonials: {
    eyebrow: string;
    title: string;
    items: Testimonial[];
  };
  blog: {
    eyebrow: string;
    title: string;
    featuredLabel: string;
    guideLabel: string;
    readLabel: string;
    allArticlesLabel: string;
    posts: BlogPreview[];
  };
  partners: {
    eyebrow: string;
    title: string;
    logos: Array<{
      name: string;
      src: string;
    }>;
  };
  contactCta: {
    title: string;
    body: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
};

export type ProductPageContent = {
  slug: string;
  hero: {
    title: string;
    body: string;
  };
  coverageList: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  cta: CtaLink;
};
