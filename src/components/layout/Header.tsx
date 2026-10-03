import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Box from '@mui/material/Box';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/lib/config/site';
import type { NavItem } from '@/types/site';

import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import './Header.css';

type HeaderNavItem = Omit<NavItem, 'children'> & {
  children?: HeaderNavItem[];
  icon?: string;
  submenuTitle?: string;
  submenuTone?: 'personal' | 'business';
};

const personalItems: HeaderNavItem[] = [
  { label: 'Home Insurance', href: '/personal-insurance/home-insurance', icon: '🏠' },
  { label: 'Auto Insurance', href: '/personal-insurance/auto-insurance', icon: '🚙' },
  { label: 'Condo Insurance', href: '/personal-insurance/condo-insurance', icon: '🏢' },
  { label: 'Motorcycle Insurance', href: '/personal-insurance/motorcycle-insurance', icon: '🏍️' },
  { label: 'Flood Insurance', href: '/personal-insurance/flood-insurance', icon: '🌊' },
  { label: 'Umbrella Insurance', href: '/personal-insurance/umbrella-insurance', icon: '☂️' },
  { label: 'Pet Insurance', href: '/personal-insurance/pet-insurance', icon: '🐕' },
];

const businessItems: HeaderNavItem[] = [
  {
    label: 'Business Owners Insurance',
    href: '/business-insurance/business-owners-insurance',
    icon: '🏢',
  },
  {
    label: 'Commercial Auto Insurance',
    href: '/business-insurance/business-auto-insurance',
    icon: '🚚',
  },
  {
    label: 'General Liability Insurance',
    href: '/business-insurance/general-liability-insurance',
    icon: '🛡️',
  },
  {
    label: "Worker's Compensation Insurance",
    href: '/business-insurance/workers-compensation-insurance',
    icon: '👷',
  },
];

const navItems: HeaderNavItem[] = [
  {
    label: 'About',
    href: '/about',
    submenuTitle: 'About Linwood Forest',
    children: [
      { label: 'Our Team', href: '/our-team' },
      { label: 'Agency Story', href: '/about/agency-story' },
      { label: 'Carrier Team', href: '/about/carrier-team' },
      { label: 'Local Vendors', href: '/about/local-vendors' },
    ],
  },
  {
    label: 'Personal Insurance',
    href: '/personal-insurance',
    children: personalItems,
    submenuTitle: 'Personal Insurance Products',
    submenuTone: 'personal',
  },
  {
    label: 'Business Insurance',
    href: '/business-insurance',
    children: businessItems,
    submenuTitle: 'Business Insurance Products',
    submenuTone: 'business',
  },
  { label: 'Life Insurance', href: '/life-insurance' },
  { label: 'Service Center', href: '/service-center' },
  { label: 'Contact', href: '/contact' },
  { label: 'Realtors & Lenders', href: '/realtors-and-lenders' },
];

const topMenuItems = [
  { label: 'Testimonials', href: '/client-testimonials' },
  { label: 'Careers', href: '/careers' },
  { label: 'Heroes Referral Program', href: '/heroes-referral-program' },
  { label: 'Self Quoting Portal', href: '/business-insurance/get-insurance' },
];

export function Header() {
  return (
    <header className="linwood-header">
      <a className="linwood-skip-link" href="#main-content">
        Skip to content
      </a>
      <Box className="linwood-header__utility">
        <Container className="linwood-header__utility-inner">
          <div className="linwood-header__utility-links">
            <a href={siteConfig.phoneHref}>
              <LocalPhoneIcon aria-hidden="true" fontSize="small" />
              <span>{siteConfig.phone}</span>
            </a>
            <a className="linwood-header__utility-email" href={siteConfig.emailHref}>
              <EmailIcon aria-hidden="true" fontSize="small" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="linwood-header__utility-location">
              <LocationOnIcon aria-hidden="true" fontSize="small" />
              <span>{siteConfig.serviceArea}</span>
            </span>
          </div>
          <nav aria-label="Utility navigation" className="linwood-header__top-menu">
            {topMenuItems.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="linwood-header__utility-actions">
            <span className="linwood-header__badge">
              <VerifiedUserIcon aria-hidden="true" fontSize="small" />
              Veteran Owned
            </span>
            <div className="linwood-header__language-wrap">
              <LanguageIcon aria-hidden="true" fontSize="small" />
              <LanguageSwitcher />
            </div>
          </div>
        </Container>
      </Box>
      <Container className="linwood-header__main">
        <Link
          aria-label="Linwood Forest Insurance Group home"
          className="linwood-header__brand"
          href="/"
        >
          <span className="linwood-header__brand-mark" aria-hidden="true">
            <Image
              alt=""
              className="linwood-header__mark-image"
              height={300}
              priority
              src="/images/linwood-forest-logo.png"
              width={500}
            />
          </span>
          <span className="linwood-header__brand-copy">
            <span className="linwood-header__brand-name">Linwood Forest</span>
            <span className="linwood-header__brand-subtitle">Insurance Group</span>
          </span>
        </Link>
        <DesktopNav items={navItems} />
        <div className="linwood-header__actions">
          <Button href="/get-quote" variant="contained">
            <RequestQuoteIcon aria-hidden="true" fontSize="small" />
            Get Quote
          </Button>
        </div>
        <MobileNav items={navItems} />
      </Container>
    </header>
  );
}
