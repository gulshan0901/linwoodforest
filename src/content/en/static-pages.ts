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

function insurancePage({
  slug,
  title,
  intro,
  description,
  considerations,
}: {
  slug: string[];
  title: string;
  intro: string;
  description: string;
  considerations: string[];
}): StaticPage {
  return {
    slug,
    title,
    description,
    eyebrow: slug[0] === 'business-insurance' ? 'Business insurance' : 'Personal insurance',
    intro,
    sections: [
      {
        heading: 'Coverage to discuss',
        body: 'Coverage, exclusions, and eligibility vary by policy and carrier. We can help you review your needs and compare available options.',
        bullets: considerations,
      },
    ],
    cta: productCta,
  };
}

const additionalInsurancePages: StaticPage[] = [
  insurancePage({
    slug: ['personal-insurance', 'renters-insurance'],
    title: 'Renters Insurance',
    description: 'Renters insurance options for personal belongings and liability.',
    intro:
      'A renters policy can protect personal belongings and provide personal liability coverage while you rent a home or apartment.',
    considerations: [
      'Personal property limits',
      'Loss of use',
      'Personal liability',
      'Deductibles',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'landlord-insurance'],
    title: 'Landlord Insurance',
    description: 'Insurance considerations for owners of rental properties.',
    intro:
      'Rental properties have different occupancy and liability exposures from owner-occupied homes. Review the property, rental activity, and applicable coverage with an agent.',
    considerations: [
      'Dwelling and other structures',
      'Landlord-owned contents',
      'Rental income',
      'Liability and tenant requirements',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'watercraft-insurance'],
    title: 'Watercraft Insurance',
    description: 'Insurance options for boats and other recreational watercraft.',
    intro:
      'Whether you use a boat seasonally or spend much of the summer on the water, review protection for your vessel, equipment, and liability.',
    considerations: [
      'Hull and equipment',
      'Liability',
      'Uninsured boaters',
      'Navigation territory',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'rv-insurance'],
    title: 'RV Insurance',
    description: 'Insurance options for recreational vehicles and motorhomes.',
    intro:
      'RV insurance can address the vehicle, personal belongings carried inside, and liability while you travel or camp.',
    considerations: [
      'Motorhome or trailer type',
      'Comprehensive and collision',
      'Personal effects',
      'Roadside assistance',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'secondary-home-insurance'],
    title: 'Secondary Home Insurance',
    description: 'Insurance considerations for vacation and secondary homes.',
    intro:
      'A vacation home may have different occupancy, location, and seasonal risks from your primary residence. Review its use and protection with an agent.',
    considerations: [
      'Seasonal occupancy',
      'Property location',
      'Rental activity',
      'Weather and vacancy exposures',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'classic-car-insurance'],
    title: 'Classic Car Insurance',
    description: 'Insurance options for classic, collectible, and antique vehicles.',
    intro:
      'Collector vehicles may need coverage that reflects their agreed or collectible value and the way they are driven and stored.',
    considerations: [
      'Vehicle valuation',
      'Annual mileage',
      'Secure storage',
      'Parts and restoration',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'valuable-possessions-insurance'],
    title: 'Valuable Possessions Insurance',
    description: 'Coverage reviews for jewelry, art, and other valuable possessions.',
    intro:
      'Standard personal property limits may not fully address high-value items. Discuss documentation and scheduling options for belongings that matter most.',
    considerations: [
      'Appraisals and receipts',
      'Itemized limits',
      'Worldwide coverage',
      'Current valuations',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'off-road-vehicle-insurance'],
    title: 'Off-Road Vehicle Insurance',
    description: 'Insurance options for ATVs, UTVs, and off-road vehicles.',
    intro:
      'ATVs and other off-road vehicles can create property and liability exposures at home and on the trail. Review how and where they are used.',
    considerations: [
      'Vehicle type and modifications',
      'Physical damage',
      'Liability',
      'Permitted use and territory',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'individual-life-insurance'],
    title: 'Individual Life Insurance',
    description: 'Individual life insurance options for families and individuals.',
    intro:
      'Individual life insurance can help provide financial support for people who depend on you. Compare policy types, terms, and coverage amounts for your situation.',
    considerations: [
      'People and expenses to protect',
      'Coverage period',
      'Policy type',
      'Beneficiary details',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'long-term-disability-insurance'],
    title: 'Long-Term Disability Insurance',
    description: 'Long-term disability insurance considerations for income protection.',
    intro:
      'Long-term disability coverage can help replace part of your income if a qualifying illness or injury prevents you from working.',
    considerations: [
      'Benefit amount',
      'Waiting and benefit periods',
      'Definition of disability',
      'Other income protection',
    ],
  }),
  insurancePage({
    slug: ['personal-insurance', 'long-term-care-insurance'],
    title: 'Long-Term Care Insurance',
    description: 'Long-term care insurance planning and coverage options.',
    intro:
      'Long-term care planning can help address the cost of assistance with everyday activities or extended care later in life.',
    considerations: [
      'Types of care',
      'Benefit amount and duration',
      'Elimination period',
      'Inflation protection',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'crime-insurance'],
    title: 'Crime Insurance',
    description: 'Commercial crime insurance considerations for businesses.',
    intro:
      'Crime coverage can help a business address certain financial losses involving theft, fraud, or employee dishonesty, subject to policy terms.',
    considerations: [
      'Employee dishonesty',
      'Funds transfer fraud',
      'Forgery',
      'Social engineering exclusions',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'cyber-liability-insurance'],
    title: 'Cyber Liability Insurance',
    description: 'Cyber liability insurance options for data and network incidents.',
    intro:
      'A cyber incident can disrupt operations and expose customer or employee information. Review first- and third-party cyber protections for your business.',
    considerations: [
      'Incident response',
      'Data restoration',
      'Business interruption',
      'Privacy and network liability',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'directors-and-officers-liability-insurance'],
    title: 'Directors and Officers Liability Insurance',
    description: 'D&O liability insurance considerations for business leaders.',
    intro:
      'Directors and officers coverage can help protect an organization and its leaders against certain claims related to management decisions.',
    considerations: [
      'Who is insured',
      'Defense costs',
      'Company reimbursement',
      'Policy exclusions',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'employment-practice-liability-insurance'],
    title: 'Employment Practices Liability Insurance',
    description: 'Employment practices liability insurance for workplace claims.',
    intro:
      'Employment practices liability insurance can address certain allegations involving workplace practices, subject to policy terms and exclusions.',
    considerations: [
      'Current and former employees',
      'Third-party claims',
      'Defense costs',
      'Workplace procedures',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'environmental-insurance'],
    title: 'Environmental Insurance',
    description: 'Environmental insurance considerations for pollution exposures.',
    intro:
      'Some businesses face pollution or environmental exposures that may not be covered by standard liability policies. Review operations and contractual requirements.',
    considerations: [
      'Operations and locations',
      'Cleanup costs',
      'Third-party bodily injury',
      'Contract requirements',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'fiduciary-liability-insurance'],
    title: 'Fiduciary Liability Insurance',
    description: 'Fiduciary liability insurance for employee benefit plan sponsors.',
    intro:
      'Fiduciary liability insurance can help address claims alleging errors in administering employee benefit plans.',
    considerations: [
      'Plans and fiduciaries',
      'Defense costs',
      'Plan administration',
      'Policy exclusions',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'flood-insurance'],
    title: 'Commercial Flood Insurance',
    description: 'Commercial flood insurance for business property and operations.',
    intro:
      'Commercial property insurance may not cover flood losses. Review flood protection for buildings, contents, and business interruption exposures.',
    considerations: [
      'Building and contents',
      'Location and flood zone',
      'Business interruption',
      'Waiting periods and limits',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'inland-marine-insurance'],
    title: 'Inland Marine Insurance',
    description: 'Inland marine insurance for equipment and property in transit.',
    intro:
      'Inland marine coverage can protect property that moves between locations or is not fully addressed by a standard property policy.',
    considerations: [
      'Contractor equipment',
      'Goods in transit',
      'Installation projects',
      'Property at temporary locations',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'key-man-life-insurance'],
    title: 'Key Person Life Insurance',
    description: 'Key person life insurance planning for business continuity.',
    intro:
      'Life insurance on a key person may help a business manage financial disruption after the loss of someone essential to its operations.',
    considerations: [
      'Key roles and dependencies',
      'Coverage amount',
      'Policy ownership',
      'Business continuity planning',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'errors-and-omissions-liability-insurance'],
    title: 'Errors and Omissions Liability Insurance',
    description: 'Professional errors and omissions liability insurance options.',
    intro:
      'Errors and omissions insurance can help protect professional service providers from certain claims alleging mistakes or failure to deliver services.',
    considerations: [
      'Professional services',
      'Claims-made terms',
      'Retroactive date',
      'Defense and settlement limits',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'commercial-property-insurance'],
    title: 'Commercial Property Insurance',
    description: 'Commercial property insurance for buildings, equipment, and inventory.',
    intro:
      'Commercial property coverage can help businesses protect buildings, equipment, inventory, and other property against covered losses.',
    considerations: [
      'Building and business personal property',
      'Replacement cost',
      'Business income',
      'Equipment and inventory values',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'ocean-marine-insurance'],
    title: 'Ocean Marine Insurance',
    description: 'Ocean marine insurance considerations for cargo and vessels.',
    intro:
      'Businesses moving goods over water or operating vessels may need specialized marine coverage for cargo, equipment, and liability.',
    considerations: [
      'Cargo and shipments',
      'Vessel exposure',
      'Transit route',
      'Contract and trade terms',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'systems-breakdown-insurance'],
    title: 'Systems Breakdown Insurance',
    description: 'Equipment breakdown insurance for commercial systems.',
    intro:
      'Equipment breakdown coverage can help address certain sudden mechanical or electrical failures affecting essential business systems.',
    considerations: [
      'HVAC and electrical systems',
      'Production equipment',
      'Spoilage exposures',
      'Business interruption',
    ],
  }),
  insurancePage({
    slug: ['business-insurance', 'commercial-umbrella-insurance'],
    title: 'Commercial Umbrella Insurance',
    description: 'Commercial umbrella liability coverage for businesses.',
    intro:
      'A commercial umbrella policy may provide additional liability limits above eligible underlying business policies.',
    considerations: [
      'Underlying policies and limits',
      'Business operations',
      'Contract requirements',
      'Exclusions and retained limits',
    ],
  }),
];

const additionalServicePages: StaticPage[] = [
  {
    slug: ['service-center', 'report-a-claim'],
    title: 'Report a Claim',
    description: 'Guidance for reporting an insurance claim to your carrier.',
    eyebrow: 'Policy service',
    intro:
      'If you need to report a loss, contact your insurance carrier as soon as practical. Carrier claims teams can provide immediate instructions and explain the next steps.',
    sections: [
      {
        heading: 'Before you call',
        bullets: [
          'Move to safety and contact emergency services if needed.',
          'Have your policy or carrier information available.',
          'Take reasonable steps to prevent further damage.',
          'Keep receipts and notes related to the loss.',
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['service-center', 'request-policy-change'],
    title: 'Request a Policy Change',
    description: 'Contact our team to discuss changes to your insurance policy.',
    eyebrow: 'Policy service',
    intro:
      'Life, vehicles, property, and business operations change over time. Contact our team to review a requested policy update before assuming a change is covered.',
    sections: [
      {
        heading: 'Common requests',
        bullets: [
          'Add or remove a vehicle',
          'Update a mailing address',
          'Review a home renovation',
          'Discuss a change to business operations',
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['service-center', 'request-certificate'],
    title: 'Request a Certificate of Insurance',
    description: 'Request a certificate of insurance for a business policy.',
    eyebrow: 'Policy service',
    intro:
      'If a client, project, or property manager needs proof of insurance, contact our team with the certificate holder and policy details.',
    sections: [
      {
        heading: 'Information to have ready',
        bullets: [
          'Certificate holder name and address',
          'Project or contract reference',
          'Required limits or wording',
          'Requested delivery date',
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['service-center', 'request-auto-id-card'],
    title: 'Request an Auto ID Card',
    description: 'Get help locating or requesting an auto insurance ID card.',
    eyebrow: 'Policy service',
    intro:
      'Many carriers let policyholders download an auto ID card through their online account or mobile app. Contact us if you need help finding yours.',
    sections: [
      {
        heading: 'Quick ways to get your card',
        bullets: [
          'Check your insurer’s mobile app',
          'Sign in to the carrier website',
          'Call your carrier’s service team',
          'Contact our office for help',
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['service-center', 'pay-insurance-bill'],
    title: 'Pay an Insurance Bill',
    description: 'Find help paying an insurance premium through your carrier.',
    eyebrow: 'Policy service',
    intro:
      'For the fastest payment processing, use your insurance carrier’s official website or billing phone number shown on your statement.',
    sections: [
      {
        heading: 'Payment reminders',
        bullets: [
          'Confirm the policy number and amount due',
          'Check the carrier’s payment options',
          'Review automatic payment settings',
          'Contact the carrier about a billing notice',
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['service-center', 'complete-annual-renewal'],
    title: 'Complete an Annual Renewal Review',
    description: 'Review changing coverage needs before an annual policy renewal.',
    eyebrow: 'Policy service',
    intro:
      'A renewal is a useful time to check whether your policies still match your property, vehicles, household, or business.',
    sections: [
      {
        heading: 'What to review',
        bullets: [
          'New purchases or renovations',
          'Household or driver changes',
          'Business growth and equipment',
          'Limits, deductibles, and updated values',
        ],
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['service-center', 'review-us'],
    title: 'Review Linwood Forest',
    description: 'Share feedback about your experience with Linwood Forest Insurance Group.',
    eyebrow: 'Client feedback',
    intro:
      'We appreciate hearing from clients. Contact our team with feedback about your experience or let us know where we can improve.',
    sections: [
      {
        heading: 'Your feedback matters',
        body: 'We value thoughtful feedback and use it to keep improving the service we provide to families, businesses, and referral partners.',
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['service-center', 'refer-a-friend-copy'],
    title: 'Refer a Friend',
    description: 'Introduce a friend or family member to Linwood Forest Insurance Group.',
    eyebrow: 'Client referrals',
    intro:
      'If someone you know is reviewing their insurance, you can share our contact details and encourage them to speak with our team.',
    sections: [
      {
        heading: 'How referrals work',
        body: 'Ask your friend to mention your referral when they call. We will listen to their needs and help them explore available options.',
      },
    ],
    cta: contactCta,
  },
];

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
            body: 'A multi-lingual insurance professional with experience in real estate and financial services.',
            href: '/our-team/dave-lin',
          },
          {
            title: 'Monique Merino',
            body: 'An independent agent with more than 18 years of experience in the financial industry.',
            href: '/our-team/monique-merino',
          },
          {
            title: 'Ryan',
            body: 'An account executive helping clients and referral partners coordinate coverage.',
            href: '/our-team/ryan',
          },
          {
            title: 'Madeline Pizarro',
            body: 'An insurance agent helping clients review policies and compare options.',
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
      'Dave Lin is a multi-lingual insurance professional with prior experience in real estate and financial services. His specialties include life, property, and casualty insurance. In addition to English, Dave speaks three Chinese dialects. His mission is to help clients secure their possessions and their loved ones’ future through attentive service. Dave grew up in northeastern Pennsylvania, graduated from Crestwood High School and King’s College, and served in the United States Navy aboard the USS Blue Ridge.',
    sections: [
      {
        heading: 'Bio',
        body: '“I ask questions, listen, and help find competitive solutions to meet the needs of my clients.” Dave brings the same dedication and attention to detail to his agency and clients that he learned through his service in the Navy.',
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
      'Monique was raised in Brooklyn, studied in Miami, and began a career in New York’s financial industry at age 18. She holds a bachelor’s degree in Business Finance and has more than 18 years of investment-sector experience.',
    sections: [
      {
        heading: 'Experience',
        body: 'Before joining Linwood Forest, Monique helped clients with life insurance and Medicare supplement plans, and worked as a registered client associate at Wells Fargo Advisors. She and her family chose to make the Lehigh Valley their home.',
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['our-team', 'ryan'],
    title: 'Ryan',
    description: 'Ryan, account executive at Linwood Forest Insurance Group.',
    eyebrow: 'Account executive',
    intro:
      'Ryan is an account executive at Linwood Forest Insurance Group. He works with clients and referral partners to coordinate insurance quotes, manage time-sensitive details, and answer coverage questions.',
    sections: [
      {
        heading: 'How Ryan helps',
        body: 'Ryan supports clients and referral partners with quote coordination and follow-through as coverage needs and timelines change.',
      },
    ],
    cta: contactCta,
  },
  {
    slug: ['our-team', 'madeline-pizarro'],
    title: 'Madeline Pizarro',
    description: 'Madeline Pizarro, insurance agent at Linwood Forest Insurance Group.',
    eyebrow: 'Insurance agent',
    intro:
      'Madeline helps clients review their insurance policies, compare available options, and keep their coverage aligned with changing needs.',
    sections: [
      {
        heading: 'Client support',
        body: 'Madeline works with clients to understand their questions and identify coverage options to discuss.',
      },
    ],
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
          {
            title: 'Renters Insurance',
            body: 'Protection for personal belongings and liability while renting.',
            href: '/personal-insurance/renters-insurance',
          },
          {
            title: 'Landlord Insurance',
            body: 'Coverage considerations for owners of residential rental properties.',
            href: '/personal-insurance/landlord-insurance',
          },
          {
            title: 'Watercraft Insurance',
            body: 'Coverage to discuss for boats, equipment, and water-related liability.',
            href: '/personal-insurance/watercraft-insurance',
          },
          {
            title: 'RV Insurance',
            body: 'Protection options for motorhomes and recreational vehicles.',
            href: '/personal-insurance/rv-insurance',
          },
          {
            title: 'Secondary Home Insurance',
            body: 'Coverage considerations for seasonal and vacation properties.',
            href: '/personal-insurance/secondary-home-insurance',
          },
          {
            title: 'Classic Car Insurance',
            body: 'Options for collectible vehicles, storage, and limited use.',
            href: '/personal-insurance/classic-car-insurance',
          },
          {
            title: 'Valuable Possessions Insurance',
            body: 'Review limits and scheduling for high-value belongings.',
            href: '/personal-insurance/valuable-possessions-insurance',
          },
          {
            title: 'Off-Road Vehicle Insurance',
            body: 'Coverage discussions for ATVs, UTVs, and off-road vehicles.',
            href: '/personal-insurance/off-road-vehicle-insurance',
          },
          {
            title: 'Individual Life Insurance',
            body: 'Life coverage options tailored to individual and family needs.',
            href: '/personal-insurance/individual-life-insurance',
          },
          {
            title: 'Long-Term Disability Insurance',
            body: 'Income protection options if illness or injury interrupts work.',
            href: '/personal-insurance/long-term-disability-insurance',
          },
          {
            title: 'Long-Term Care Insurance',
            body: 'Planning for assistance and extended care needs.',
            href: '/personal-insurance/long-term-care-insurance',
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
          {
            title: 'Crime Insurance',
            body: 'Coverage to discuss for employee theft, fraud, and other crime losses.',
            href: '/business-insurance/crime-insurance',
          },
          {
            title: 'Cyber Liability Insurance',
            body: 'Options for cyber incidents, privacy events, and network interruptions.',
            href: '/business-insurance/cyber-liability-insurance',
          },
          {
            title: 'Directors and Officers Liability',
            body: 'Protection to consider for company leaders and management decisions.',
            href: '/business-insurance/directors-and-officers-liability-insurance',
          },
          {
            title: 'Employment Practices Liability',
            body: 'Coverage for certain workplace practice claims.',
            href: '/business-insurance/employment-practice-liability-insurance',
          },
          {
            title: 'Environmental Insurance',
            body: 'Review pollution and environmental exposures tied to operations.',
            href: '/business-insurance/environmental-insurance',
          },
          {
            title: 'Fiduciary Liability',
            body: 'Coverage to discuss for employee benefit plan administration.',
            href: '/business-insurance/fiduciary-liability-insurance',
          },
          {
            title: 'Commercial Flood Insurance',
            body: 'Flood protection considerations for commercial property.',
            href: '/business-insurance/flood-insurance',
          },
          {
            title: 'Inland Marine Insurance',
            body: 'Coverage for equipment, goods in transit, and property off-site.',
            href: '/business-insurance/inland-marine-insurance',
          },
          {
            title: 'Key Person Life Insurance',
            body: 'Life insurance planning to support business continuity.',
            href: '/business-insurance/key-man-life-insurance',
          },
          {
            title: 'Errors and Omissions Liability',
            body: 'Professional liability coverage for certain service-related claims.',
            href: '/business-insurance/errors-and-omissions-liability-insurance',
          },
          {
            title: 'Commercial Property Insurance',
            body: 'Protection options for business buildings, equipment, and inventory.',
            href: '/business-insurance/commercial-property-insurance',
          },
          {
            title: 'Ocean Marine Insurance',
            body: 'Coverage to discuss for cargo, vessels, and waterborne transit.',
            href: '/business-insurance/ocean-marine-insurance',
          },
          {
            title: 'Systems Breakdown Insurance',
            body: 'Protection to consider for mechanical and electrical equipment failure.',
            href: '/business-insurance/systems-breakdown-insurance',
          },
          {
            title: 'Commercial Umbrella Insurance',
            body: 'Additional liability limits above eligible underlying policies.',
            href: '/business-insurance/commercial-umbrella-insurance',
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
          {
            title: 'Report a Claim',
            body: 'Find guidance for contacting your insurer after a loss.',
            href: '/service-center/report-a-claim',
          },
          {
            title: 'Request a Policy Change',
            body: 'Ask our team to review a change to your coverage.',
            href: '/service-center/request-policy-change',
          },
          {
            title: 'Request a Certificate',
            body: 'Get help with a certificate of insurance request.',
            href: '/service-center/request-certificate',
          },
          {
            title: 'Request an Auto ID Card',
            body: 'Find ways to access or request your insurance ID card.',
            href: '/service-center/request-auto-id-card',
          },
          {
            title: 'Pay an Insurance Bill',
            body: 'Connect with your carrier to make a premium payment.',
            href: '/service-center/pay-insurance-bill',
          },
          {
            title: 'Annual Renewal Review',
            body: 'Review changing coverage needs at renewal.',
            href: '/service-center/complete-annual-renewal',
          },
          {
            title: 'Review Us',
            body: 'Share feedback about your experience.',
            href: '/service-center/review-us',
          },
          {
            title: 'Refer a Friend',
            body: 'Introduce someone to Linwood Forest.',
            href: '/service-center/refer-a-friend-copy',
          },
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
  {
    slug: ['heroes-referral-program'],
    title: 'Heroes Referral Program',
    description: 'Refer a friend or family member to Linwood Forest Insurance Group.',
    eyebrow: 'Share the help',
    intro:
      'Want to be a hero to your family and friends? Let them know about Linwood Forest. We can help them compare coverage and explore potential savings.',
    sections: [
      {
        heading: 'A thank-you for your referral',
        body: 'Ask your friend to mention your referral when they call. Linwood Forest offers a $10 gift card as a thank-you for eligible referrals. Contact our team for program details.',
      },
      {
        heading: 'Make an introduction',
        body: 'Share our phone number or email with your friend so they can talk with an insurance professional directly.',
        bullets: ['Call (610) 572-7322', 'Email sales@linwoodforest.com'],
      },
    ],
    cta: contactCta,
  },
  ...additionalInsurancePages,
  ...additionalServicePages,
];
