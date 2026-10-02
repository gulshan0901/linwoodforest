import type { ProductPageContent } from '@/types/site';

export const insuranceProducts: ProductPageContent[] = [
  {
    slug: 'home',
    hero: {
      title: 'Home Insurance',
      body: 'Placeholder product copy for phase 2 CMS migration.',
    },
    coverageList: ['Dwelling', 'Personal property', 'Liability'],
    faqs: [
      {
        question: 'What should I review?',
        answer: 'Placeholder answer for a reusable product page template.',
      },
    ],
    cta: {
      label: 'Get a Home Quote',
      href: '/get-quote',
    },
  },
];
