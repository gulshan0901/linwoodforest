import type { StaticPage } from '@/types/static-pages';

const contactCta = {
  title: 'Get in touch and tell us your story',
  body: 'We are here to help with clear coverage guidance and responsive local service.',
  label: 'Contact us',
  href: '/contact',
};

const productCta = {
  title: 'Ready to compare coverage?',
  body: 'Our knowledgeable team will be happy to provide a proposal tailored to you.',
  label: 'Get a quote',
  href: '/get-quote',
};

export const enStaticPages: StaticPage[] = [
  {
    slug: ['about'],
    title: 'About',
    description:
      'Learn about Linwood Forest Insurance Group, an independent insurance agency based in Whitehall, PA.',
    eyebrow: 'About Linwood Forest',
    intro:
      'Linwood Forest Insurance Group is an independent agency and brokerage firm based in the Lehigh Valley, serving clients across PA, NJ, DE, MD, VA, and DC.',
    sections: [
      {
        heading: 'Independent agency, more choice',
        body: 'Independent insurance agencies are best described with one word: choice. We represent multiple insurance companies, giving clients more options as their needs change over time.',
      },
      {
        heading: 'History',
        body: 'The agency officially opened its doors on January 15, 2014. Guided by our motto, “Your Insurance...Our Priority,” we combine practical technology with old-fashioned customer service.',
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['about', 'agency-story'],
    title: 'Agency Story',
    description: 'Read the story behind Linwood Forest Insurance Group and founder Dave Lin.',
    eyebrow: 'Our story',
    intro:
      'How did Linwood Forest Insurance Group come to be? The short answer: curiosity, service, and a commitment to helping clients protect what matters.',
    sections: [
      {
        heading: 'A condensed timeline',
        bullets: [
          'Dave Lin entered the financial services world and added property and casualty insurance to his repertoire.',
          'Dave learned auto, home, and business insurance from the ground up.',
          'The agency grew through customer service, referrals, and practical coverage advice.',
        ],
      },
      {
        heading: 'Still writing the story',
        body: 'Dave, his team, and the agency’s commitment to clients continues into the future. We are here to stay, and we welcome you to tell us your story.',
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['about', 'carrier-team'],
    title: 'Carrier Team',
    description:
      'Insurance carrier relationships that help Linwood Forest compare coverage options.',
    eyebrow: 'Carrier access',
    intro:
      'As an independent agency, our carrier relationships help us compare coverage and service options for families and businesses.',
    sections: [
      {
        heading: 'What this means for clients',
        bullets: [
          'More than one carrier option for many coverage needs.',
          'Practical renewal reviews when pricing or life circumstances change.',
          'A team that helps explain tradeoffs instead of handing you a quote without context.',
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['about', 'local-vendors'],
    title: 'Local Vendors',
    description: 'Local vendor and referral partner information for Linwood Forest clients.',
    eyebrow: 'Local network',
    intro:
      'We work with local real estate, lending, contractor, and service partners to help clients move from quote to coverage with less friction.',
    sections: [
      {
        heading: 'Referral partner support',
        body: 'This page is ready for curated local vendor information once approved partner details are finalized.',
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['our-team'],
    title: 'Our Team',
    description: 'Meet the Linwood Forest Insurance Group team.',
    eyebrow: 'People you can reach',
    intro:
      'Meet the advisors and service specialists helping clients compare coverage, solve policy questions, and move quickly when timing matters.',
    sections: [
      {
        heading: 'Team members',
        cards: [
          {
            title: 'Dave Lin',
            body: 'Principal agent focused on clear advice, carrier access, and long-term client relationships.',
            href: '/our-team/dave-lin',
          },
          {
            title: 'Monique Merino',
            body: 'Associate agent supporting personal insurance clients and responsive service needs.',
            href: '/our-team/monique-merino',
          },
          {
            title: 'Ryan',
            body: 'Account executive helping clients and referral partners coordinate practical coverage solutions.',
            href: '/our-team/ryan',
          },
          {
            title: 'Madeline Pizarro',
            body: 'Insurance agent helping clients review policies and find competitive options.',
            href: '/our-team/madeline-pizarro',
          },
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['our-team', 'dave-lin'],
    title: 'Dave Lin',
    description: 'Dave Lin, principal agent at Linwood Forest Insurance Group.',
    eyebrow: 'Principal agent',
    intro:
      'Dave Lin leads Linwood Forest Insurance Group with a focus on client advocacy, practical coverage reviews, and responsive service.',
    sections: [
      {
        heading: 'Bio',
        body: 'Dave helps individuals, families, and business owners understand their insurance options and make informed decisions.',
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['our-team', 'monique-merino'],
    title: 'Monique Merino',
    description: 'Monique Merino, associate agent at Linwood Forest Insurance Group.',
    eyebrow: 'Associate agent',
    intro:
      'Monique supports clients with personal insurance questions, policy updates, and service needs.',
    sections: [{ heading: 'Bio', body: 'Placeholder bio to be replaced with approved team copy.' }],
    cta: contactCta,
  },
  {
    slug: ['our-team', 'ryan'],
    title: 'Ryan',
    description: 'Ryan, account executive at Linwood Forest Insurance Group.',
    eyebrow: 'Account executive',
    intro:
      'Ryan helps clients and referral partners navigate quotes, timelines, and coverage questions.',
    sections: [{ heading: 'Bio', body: 'Placeholder bio to be replaced with approved team copy.' }],
    cta: contactCta,
  },
  {
    slug: ['our-team', 'madeline-pizarro'],
    title: 'Madeline Pizarro',
    description: 'Madeline Pizarro, insurance agent at Linwood Forest Insurance Group.',
    eyebrow: 'Insurance agent',
    intro:
      'Madeline helps clients review policies, compare options, and keep coverage aligned with their needs.',
    sections: [{ heading: 'Bio', body: 'Placeholder bio to be replaced with approved team copy.' }],
    cta: contactCta,
  },
  {
    slug: ['blog'],
    title: 'Blog',
    description: 'Insurance tips and updates from Linwood Forest Insurance Group.',
    eyebrow: 'Insurance notes',
    intro: 'Helpful articles for homeowners, drivers, families, and local business owners.',
    sections: [
      {
        heading: 'Latest posts',
        cards: [
          {
            title: '5 Security Tips for Your New Home',
            body: 'Simple steps that can help new homeowners think about safety and protection.',
            href: '/blog/5-security-tips-for-your-new-home',
          },
          {
            title: 'A Little Savings Secret',
            body: 'Everyday savings ideas that can pair with a smarter coverage review.',
            href: '/blog/a-little-savings-secret',
          },
          {
            title: 'How to Safely Store Your Stuff',
            body: 'Storage and protection basics for personal belongings.',
            href: '/blog/how-to-safely-store-your-stuff',
          },
        ],
      },
    ],
  },
  {
    slug: ['blog', '5-security-tips-for-your-new-home'],
    title: '5 Security Tips for Your New Home',
    description: 'Security tips for new homeowners from Linwood Forest Insurance Group.',
    eyebrow: 'Personal insurance',
    intro:
      'When you think of home security, you may imagine expensive systems. These practical habits can help protect a new home too.',
    sections: [
      {
        heading: 'Tips to consider',
        bullets: [
          'Change locks or access codes after moving in.',
          'Review smoke detectors, carbon monoxide detectors, and exterior lighting.',
          'Document valuable belongings with photos or video.',
          'Talk with your insurance advisor about coverage limits and deductibles.',
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['blog', 'a-little-savings-secret'],
    title: 'A Little Savings Secret',
    description: 'Savings ideas and insurance review reminders from Linwood Forest.',
    eyebrow: 'Personal insurance',
    intro:
      'Small savings can add up. Insurance reviews can do the same when your needs, vehicles, home, or household change.',
    sections: [
      {
        heading: 'Where to start',
        body: 'Bundle options, deductible choices, payment plans, and coverage updates can all affect pricing. The key is comparing savings without stripping out protection you actually need.',
      },
    ],
    cta: productCta,
  },
  {
    slug: ['blog', 'how-to-safely-store-your-stuff'],
    title: 'How to Safely Store Your Stuff',
    description: 'Storage and documentation tips for protecting personal belongings.',
    eyebrow: 'Personal insurance',
    intro:
      'Misplacing or damaging important belongings is stressful. Good storage habits and documentation can make claims conversations easier.',
    sections: [
      {
        heading: 'Storage basics',
        bullets: [
          'Keep important documents in a secure, dry location.',
          'Avoid storing valuables directly on basement floors.',
          'Create a photo inventory before you need it.',
          'Ask how off-premises personal property is covered.',
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['personal-insurance'],
    title: 'Personal Insurance',
    description: 'Home, auto, condo, motorcycle, flood, umbrella, and pet insurance options.',
    eyebrow: 'Personal coverage',
    intro:
      'Competitive insurance with coverage tailored for your household, property, vehicles, and everyday risks.',
    sections: [
      {
        heading: 'Personal insurance options',
        cards: [
          {
            title: 'Home Insurance',
            body: 'Coverage for your home and belongings.',
            href: '/personal-insurance/home-insurance',
          },
          {
            title: 'Auto Insurance',
            body: 'Protection for your vehicles and liability needs.',
            href: '/personal-insurance/auto-insurance',
          },
          {
            title: 'Condo Insurance',
            body: 'Coverage for condo owners and personal property.',
            href: '/personal-insurance/condo-insurance',
          },
          {
            title: 'Motorcycle Insurance',
            body: 'Coverage for bikes, riders, and liability.',
            href: '/personal-insurance/motorcycle-insurance',
          },
          {
            title: 'Flood Insurance',
            body: 'Flood protection beyond standard home policies.',
            href: '/personal-insurance/flood-insurance',
          },
          {
            title: 'Umbrella Insurance',
            body: 'Additional liability protection above underlying policies.',
            href: '/personal-insurance/umbrella-insurance',
          },
          {
            title: 'Pet Insurance',
            body: 'Coverage options for veterinary costs.',
            href: '/personal-insurance/pet-insurance',
          },
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['personal-insurance', 'home-insurance'],
    title: 'Home Insurance',
    description: 'Home insurance options for homeowners in PA and surrounding states.',
    eyebrow: 'Personal insurance',
    intro:
      'Home is where the heart is. Whether you are buying insurance for your first home or reviewing a high-value home, we can help compare options.',
    sections: [
      {
        heading: 'What it can cover',
        bullets: [
          'Dwelling coverage',
          'Other structures',
          'Personal property',
          'Loss of use',
          'Personal liability',
        ],
      },
      {
        heading: 'Coverage review',
        body: 'We love to talk coverage and review policies so you understand replacement cost, deductibles, limits, and special items.',
      },
    ],
    cta: productCta,
  },
  {
    slug: ['personal-insurance', 'auto-insurance'],
    title: 'Auto Insurance',
    description: 'Auto insurance coverage options from Linwood Forest Insurance Group.',
    eyebrow: 'Personal insurance',
    intro:
      'From a gas-sipping sedan to a family minivan or work truck, auto insurance can protect your vehicles and liability exposure.',
    sections: [
      {
        heading: 'Common coverages',
        bullets: [
          'Liability coverage',
          'Collision coverage',
          'Comprehensive coverage',
          'Medical payments',
          'Uninsured and underinsured motorist coverage',
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['personal-insurance', 'condo-insurance'],
    title: 'Condo Insurance',
    description: 'Condo insurance coverage for unit owners.',
    eyebrow: 'Personal insurance',
    intro:
      'Condo insurance can help cover personal belongings, interior improvements, loss assessment, and personal liability.',
    sections: [
      {
        heading: 'Who needs it',
        body: 'Condo owners who want protection beyond the association master policy should review a condo policy.',
      },
    ],
    cta: productCta,
  },
  {
    slug: ['personal-insurance', 'motorcycle-insurance'],
    title: 'Motorcycle Insurance',
    description: 'Motorcycle insurance options for riders.',
    eyebrow: 'Personal insurance',
    intro:
      'Motorcycle insurance can help protect your bike, liability, passengers, and optional accessories.',
    sections: [
      {
        heading: 'Coverage options',
        bullets: [
          'Liability',
          'Collision',
          'Comprehensive',
          'Medical payments',
          'Accessory coverage',
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['personal-insurance', 'flood-insurance'],
    title: 'Flood Insurance',
    description: 'Flood insurance options for homeowners and property owners.',
    eyebrow: 'Personal insurance',
    intro:
      'Standard home policies usually do not cover flood damage. Flood insurance can help protect your home and belongings from flood-related losses.',
    sections: [
      {
        heading: 'Why review it',
        body: 'Flood risk can exist outside high-risk flood zones, so it is worth discussing before a storm is in the forecast.',
      },
    ],
    cta: productCta,
  },
  {
    slug: ['personal-insurance', 'umbrella-insurance'],
    title: 'Umbrella Insurance',
    description: 'Umbrella liability coverage options.',
    eyebrow: 'Personal insurance',
    intro:
      'Umbrella insurance adds an extra layer of liability protection above eligible home, auto, and other underlying policies.',
    sections: [
      {
        heading: 'Who needs it',
        body: 'Umbrella coverage can be useful for households that want higher liability limits and broader protection.',
      },
    ],
    cta: productCta,
  },
  {
    slug: ['personal-insurance', 'pet-insurance'],
    title: 'Pet Insurance',
    description: 'Pet insurance options for veterinary care costs.',
    eyebrow: 'Personal insurance',
    intro:
      'Pet insurance can help families plan for eligible veterinary costs and unexpected care needs.',
    sections: [
      {
        heading: 'What to compare',
        bullets: [
          'Accident coverage',
          'Illness coverage',
          'Deductibles',
          'Reimbursement levels',
          'Waiting periods',
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['business-insurance'],
    title: 'Business Insurance',
    description: 'Business insurance options for companies in PA and surrounding states.',
    eyebrow: 'Commercial coverage',
    intro:
      'Business insurance helps protect your ventures from property, liability, auto, and employee-related risks.',
    sections: [
      {
        heading: 'Business insurance options',
        cards: [
          {
            title: 'Business Owners Insurance',
            body: 'Combined property and liability protection.',
            href: '/business-insurance/business-owners-insurance',
          },
          {
            title: 'Commercial Auto Insurance',
            body: 'Coverage for vehicles used in business.',
            href: '/business-insurance/business-auto-insurance',
          },
          {
            title: 'General Liability Insurance',
            body: 'Protection for common third-party liability claims.',
            href: '/business-insurance/general-liability-insurance',
          },
          {
            title: 'Workers Compensation Insurance',
            body: 'Coverage for employee workplace injuries.',
            href: '/business-insurance/workers-compensation-insurance',
          },
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['business-insurance', 'business-owners-insurance'],
    title: 'Business Owners Insurance',
    description: 'Business owners policy options from Linwood Forest Insurance Group.',
    eyebrow: 'Business insurance',
    intro:
      'A Business Owner’s Policy combines various coverages into one convenient policy for many small businesses.',
    sections: [
      {
        heading: 'Common BOP coverages',
        bullets: ['Commercial property', 'General liability', 'Business income', 'Crime coverage'],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['business-insurance', 'business-auto-insurance'],
    title: 'Commercial Auto Insurance',
    description: 'Commercial auto insurance for vehicles used in business.',
    eyebrow: 'Business insurance',
    intro:
      'Commercial auto insurance provides liability and physical damage protection for cars, trucks, vans, and other vehicles used for business.',
    sections: [
      {
        heading: 'Common coverages',
        bullets: [
          'Liability',
          'Medical payments',
          'Uninsured motorist',
          'Hired auto',
          'Non-owned auto',
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['business-insurance', 'general-liability-insurance'],
    title: 'General Liability Insurance',
    description: 'General liability insurance for businesses.',
    eyebrow: 'Business insurance',
    intro:
      'General liability coverage can help protect a business from common claims involving bodily injury, property damage, and personal or advertising injury.',
    sections: [
      {
        heading: 'Why it matters',
        body: 'Contracts, landlords, and clients often require proof of liability insurance before work begins.',
      },
    ],
    cta: productCta,
  },
  {
    slug: ['business-insurance', 'workers-compensation-insurance'],
    title: 'Workers Compensation Insurance',
    description: 'Workers compensation insurance for employers.',
    eyebrow: 'Business insurance',
    intro:
      'Workers compensation insurance helps cover eligible workplace injuries and can help employers meet state requirements.',
    sections: [
      {
        heading: 'What to review',
        bullets: [
          'Payroll estimates',
          'Class codes',
          'Owner inclusion or exclusion',
          'Certificates of insurance',
        ],
      },
    ],
    cta: productCta,
  },
  {
    slug: ['life-insurance'],
    title: 'Life Insurance',
    description: 'Life insurance options and term life quote information.',
    eyebrow: 'Life insurance',
    intro:
      'Life insurance can help protect loved ones and provide financial continuity. We can help compare simple term life options and more complex planning needs.',
    sections: [
      {
        heading: 'Instant quotes',
        body: 'The term life rater is loaded behind a click-to-load facade in the full implementation so third-party tools do not slow down the first page load.',
      },
    ],
    cta: productCta,
  },
  {
    slug: ['service-center'],
    title: 'Service Center',
    description: 'Carrier service, claims, and billing contact information.',
    eyebrow: 'Policy service',
    intro:
      'Bills and ID cards can often be handled through the insurance company website. If it is not urgent, contact our team and we will get back to you promptly.',
    sections: [
      {
        heading: 'Carrier contacts',
        cards: [
          { title: 'Progressive', body: 'Claims and billing: 800-776-4737' },
          { title: 'Safeco', body: 'Claims: 800-332-3226. Billing: 888-723-3260' },
          { title: 'Travelers', body: 'Claims: 800-252-4633. Billing: 800-842-5075' },
          { title: 'Nationwide', body: 'Claims and billing: 1-800-940-7757' },
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['client-testimonials'],
    title: 'Client Testimonials',
    description: 'Client testimonials for Linwood Forest Insurance Group.',
    eyebrow: 'Client feedback',
    intro: 'A sampling of client feedback from homeowners, drivers, and referral partners.',
    sections: [
      {
        heading: 'Testimonials',
        cards: [
          {
            title: 'Yang Li',
            body: 'Just saved me hundreds on my rental property. Thank you Dave!',
          },
          {
            title: 'Dennis Cheng',
            body: 'Dave is great. We feel very confident with our new home insurance.',
          },
          {
            title: 'Eileen Aguilera',
            body: 'Great customer service. Always goes the extra mile to get you the best coverage.',
          },
        ],
      },
    ],
  },
  {
    slug: ['realtors-and-lenders'],
    title: 'Realtors & Lenders',
    description: 'Insurance support for realtors, lenders, and home purchase timelines.',
    eyebrow: 'Partner support',
    intro:
      'We help realtors and lenders coordinate insurance quickly and clearly during home purchase timelines.',
    sections: [
      {
        heading: 'How we help',
        bullets: [
          'Responsive quote coordination',
          'Clear mortgagee and escrow details',
          'Coverage explanations for buyers',
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['careers'],
    title: 'Careers',
    description: 'Career opportunities at Linwood Forest Insurance Group.',
    eyebrow: 'Join the team',
    intro:
      'We are interested in people who care about clients, communication, and practical insurance guidance.',
    sections: [
      {
        heading: 'Current opportunities',
        body: 'Placeholder copy: approved job postings will be added here when available.',
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['privacy-policy'],
    title: 'Privacy Policy',
    description: 'Privacy policy for Linwood Forest Insurance Group LLC.',
    eyebrow: 'Privacy',
    intro: 'Privacy Policy for Linwood Forest Insurance Group LLC. Effective Date: 10/11/2024.',
    sections: [
      {
        heading: 'Information we collect',
        body: 'We may collect information you provide through website forms, registration, service requests, and customer communication, plus limited automatically collected website information.',
      },
      {
        heading: 'How we use information',
        body: 'We use information to provide services, respond to inquiries, manage support, and comply with legal obligations.',
      },
      {
        heading: 'SMS consent',
        body: 'We do not sell, rent, release, or transfer SMS consent or phone numbers to third parties for third-party marketing purposes.',
      },
    ],
  },
  {
    slug: ['privacy-policy-for-sms-communications'],
    title: 'Privacy Policy for SMS Communications',
    description:
      'SMS privacy policy and consent information for Linwood Forest Insurance Group LLC.',
    eyebrow: 'SMS terms',
    intro: 'Information about conversational SMS messages from Linwood Forest Insurance Group LLC.',
    sections: [
      {
        heading: 'Consent',
        body: 'By opting in, you agree to receive text messages related to conversational purposes. You may reply STOP to opt out at any time.',
      },
      {
        heading: 'Help',
        body: 'Reply HELP or call (610) 572-7322 for assistance. Message and data rates may apply. Message frequency may vary.',
      },
    ],
  },
];
