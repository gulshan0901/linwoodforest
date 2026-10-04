const googleMapsCid = process.env.NEXT_PUBLIC_GOOGLE_MAPS_CID || '6910901999074585092';

export const siteConfig = {
  name: 'Linwood Forest Insurance Group',
  legalName: 'Linwood Forest Insurance Group LLC',
  siteUrl: 'https://linwoodforest.com',
  phone: '(610) 572-7322',
  phoneHref: 'tel:+16105727322',
  email: 'sales@linwoodforest.com',
  emailHref: 'mailto:sales@linwoodforest.com',
  googleMapsCid,
  googlePlaceId: 'ChIJxZ_nCbaCxIkRRE6bC067G2A',
  googleReviewsHref: `https://www.google.com/maps?cid=${googleMapsCid}`,
  address: {
    street: '3312 7th St. Unit 101',
    city: 'Whitehall',
    region: 'PA',
    postalCode: '18052',
    country: 'US',
  },
  licensedStates: ['PA', 'NJ', 'DE', 'MD', 'VA', 'DC'],
  serviceArea: 'Lehigh Valley, Pennsylvania',
} as const;
