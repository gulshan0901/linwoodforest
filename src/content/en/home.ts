import type { HomeContent } from '@/types/site';

export const homeContent: HomeContent = {
  seo: {
    title: 'Linwood Forest Insurance Group | Independent Insurance Agency in Whitehall, PA',
    description:
      'Veteran-owned independent insurance agency serving Whitehall, the Lehigh Valley, and licensed clients across PA, NJ, DE, MD, VA, and DC.',
  },
  hero: {
    eyebrow: 'Veteran-owned independent agency',
    title: 'Insurance guidance for home, business, and life in the Lehigh Valley.',
    body: 'Linwood Forest Insurance Group helps families, business owners, realtors, and lenders compare coverage from trusted carriers with clear advice and responsive local service.',
    primaryCta: {
      label: 'Get a Quote',
      href: '/get-quote',
    },
    secondaryCta: {
      label: 'Call (610) 572-7322',
      href: 'tel:+16105727322',
      external: true,
    },
    image: {
      src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
      alt: 'Placeholder image of a welcoming suburban home exterior.',
    },
  },
  whoWeAre: {
    eyebrow: 'Who we are',
    title: 'Independent insurance advocates rooted in the Lehigh Valley.',
    body: 'Linwood Forest Insurance Group helps individuals, families, and business owners make confident coverage decisions. We compare options from multiple carriers, explain the details clearly, and stay available when policy questions, changes, or claims come up.',
    points: [
      'Independent guidance across personal, business, and life insurance.',
      'Coverage reviews built around your home, work, family, and budget.',
      'Responsive local support from quote request through renewal.',
    ],
  },
  services: {
    eyebrow: 'Our services',
    title: 'Our Insurance Services',
    cards: [
      {
        title: 'Personal Insurance',
        description:
          'Protect yourself, your family, and your assets with comprehensive personal insurance coverage.',
        href: '/personal-insurance',
        items: ['Home Insurance', 'Auto Insurance', 'Condo Insurance', 'Motorcycle Insurance'],
      },
      {
        title: 'Business Insurance',
        description:
          'Comprehensive protection for your business ventures with competitive coverage options.',
        href: '/business-insurance',
        items: [
          'Business Owners Insurance',
          'Commercial Auto Insurance',
          'General Liability Insurance',
          "Worker's Compensation",
        ],
      },
      {
        title: 'Life Insurance',
        description:
          "Secure your loved ones' future and leave a lasting legacy with our life insurance policies.",
        href: '/life-insurance',
        items: [
          'Term Life Insurance',
          'Whole Life Insurance',
          'Universal Life Insurance',
          'Final Expense Insurance',
        ],
      },
    ],
  },
  team: {
    eyebrow: 'Our team',
    title: 'Meet Our Expert Team',
    body: "Our experienced insurance professionals are here to guide you every step of the way. With decades of combined experience, we're your trusted advocates.",
    members: [
      {
        name: 'Dave Lin',
        role: 'Principal Agent',
        summary: 'Focused on clear advice, carrier access, and long-term client relationships.',
        image: '/our-team/dave-lin',
      },
      {
        name: 'Monique Merino',
        role: 'Associate Agent',
        summary:
          'Supporting personal insurance clients with responsive policy service and practical guidance.',
        image: '/our-team/monique-merino',
      },
      {
        name: 'Ryan',
        role: 'Account Executive',
        summary:
          'Helping clients and referral partners coordinate quotes, timelines, and coverage questions.',
        image: '/our-team/ryan',
      },
      {
        name: 'Madeline Pizarro',
        role: 'Insurance Agent',
        summary:
          'Helping clients review policies, compare options, and keep coverage aligned with their needs.',
        image: '/our-team/madeline-pizarro',
      },
    ],
  },
  stats: [
    {
      value: '6',
      label: 'Licensed States',
      description:
        'We serve clients across Pennsylvania, New Jersey, Delaware, Maryland, Virginia, and Washington D.C.',
      icon: 'location',
      tone: 'blue',
    },
    {
      value: '50+',
      label: 'Insurance Companies',
      description:
        'Partnerships with top-rated carriers ensure we find you the best coverage at competitive rates.',
      icon: 'building',
      tone: 'green',
    },
    {
      value: '1000+',
      label: 'Happy Clients',
      description:
        'Thousands of satisfied customers trust us to protect what matters most to them.',
      icon: 'clients',
      tone: 'blue',
    },
    {
      value: '$2M',
      label: 'Claims Paid',
      description: "We've helped our clients recover millions in claims when they needed it most.",
      icon: 'claims',
      tone: 'green',
    },
    {
      value: '5/5',
      label: 'Average Rating',
      description:
        'Our commitment to excellence is reflected in consistently outstanding client reviews.',
      icon: 'star',
      tone: 'orange',
    },
    {
      value: '98%',
      label: 'Client Retention',
      description: 'Our personalized service keeps clients coming back year after year.',
      icon: 'growth',
      tone: 'red',
    },
    {
      value: '15+',
      label: 'Years Experience',
      description: 'Decades of combined experience in the insurance industry guide our expertise.',
      icon: 'shield',
      tone: 'blue',
    },
    {
      value: '24/7',
      label: 'Support Available',
      description: "Round-the-clock claims support ensures you're never alone when you need help.",
      icon: 'support',
      tone: 'green',
    },
  ],
  testimonials: {
    title: 'What Our Clients Say',
  },
  blog: {
    eyebrow: 'Blog preview',
    title: 'Helpful insurance notes for local clients.',
    featuredLabel: 'Featured guide',
    guideLabel: 'Practical guide',
    readLabel: 'Read article',
    allArticlesLabel: 'Explore all articles',
    posts: [
      {
        title: '5 Security Tips for Your New Home',
        excerpt:
          'Simple ways to protect a new home, from changing access codes to documenting the things you own.',
        href: '/blog/5-security-tips-for-your-new-home',
      },
      {
        title: 'A Little Savings Secret',
        excerpt:
          'See how a regular coverage review can help you weigh savings without giving up protection you need.',
        href: '/blog/a-little-savings-secret',
      },
      {
        title: 'How to Safely Store Your Stuff',
        excerpt:
          'Practical storage and photo-inventory habits that can make it easier to protect your belongings.',
        href: '/blog/how-to-safely-store-your-stuff',
      },
    ],
  },
  partners: {
    eyebrow: 'Our partners',
    title: 'Trusted insurance carriers we work with.',
    logos: [
      {
        name: 'Universal Property and Casualty Insurance Company',
        src: '/images/partners/universal-property.png',
      },
      {
        name: 'The Philadelphia Contributionship',
        src: '/images/partners/philadelphia-contributionship.png',
      },
      {
        name: 'State Auto Insurance',
        src: '/images/partners/state-auto.png',
      },
      {
        name: 'Safeco Insurance',
        src: '/images/partners/safeco-insurance.png',
      },
      {
        name: 'Progressive',
        src: '/images/partners/progressive.png',
      },
      {
        name: 'National General Insurance',
        src: '/images/partners/national-general.png',
      },
      {
        name: 'Erie Insurance',
        src: '/images/partners/erie.png',
      },
      {
        name: 'Travelers Insurance',
        src: '/images/partners/travelers.png',
      },
    ],
  },
  contactCta: {
    title: 'Ready for a clearer coverage conversation?',
    body: 'Placeholder copy: Start with a quote request or call the Whitehall office for local guidance.',
    primaryCta: {
      label: 'Start a Quote',
      href: '/get-quote',
    },
    secondaryCta: {
      label: 'Email the Agency',
      href: 'mailto:sales@linwoodforest.com',
      external: true,
    },
  },
};
