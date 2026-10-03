'use client';

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import ForestIcon from '@mui/icons-material/Forest';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import VerifiedIcon from '@mui/icons-material/Verified';
import XIcon from '@mui/icons-material/X';
import Box from '@mui/material/Box';

import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/lib/config/site';
import { thirdPartyTools } from '@/lib/config/third-party';

import { Container } from '../ui/Container';
import './Footer.css';

const footerLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Service Center', href: '/service-center' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get Quote', href: '/get-quote' },
  {
    label: thirdPartyTools.termLifeRater.label,
    href: thirdPartyTools.termLifeRater.url,
    external: true,
  },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions-sms' },
  { label: '中文', href: '/', locale: 'zh' as const },
];

const socialLinks = [
  { label: 'X', href: '#', icon: XIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'Pinterest', href: '#', icon: PinterestIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { label: 'Google Business', href: '#', icon: GoogleIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
];

const licensedStates = [
  'Pennsylvania',
  'New Jersey',
  'Delaware',
  'Maryland',
  'Virginia',
  'Washington D.C.',
];

export function Footer() {
  return (
    <Box component="footer" className="linwood-footer">
      <Container className="linwood-footer__licensed">
        <h2>
          <VerifiedIcon aria-hidden="true" />
          Licensed &amp; Serving
        </h2>
        <ul aria-label="Licensed and serving areas">
          {licensedStates.map((state) => (
            <li key={state}>{state}</li>
          ))}
        </ul>
      </Container>

      <Container className="linwood-footer__inner">
        <nav aria-label="Footer navigation" className="linwood-footer__column">
          <h2>Important Links</h2>
          <ul className="linwood-footer__links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <KeyboardArrowRightIcon aria-hidden="true" />
                {link.external ? (
                  <a href={link.href} rel="noopener noreferrer" target="_blank">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} locale={link.locale}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="linwood-footer__column">
          <h2>About Us</h2>
          <p>
            Linwood Forest is licensed in the states of Pennsylvania, New Jersey, Delaware,
            Maryland, Virginia and Washington D.C. We offer numerous insurance products to meet the
            needs of our clients, both personal and business.
          </p>
        </div>

        <div className="linwood-footer__column">
          <h2>Our Mission</h2>
          <p>
            As a veteran owned business, our agency has a mission. We are here to make sure our
            clients are properly protected. We strive for a job well done. Our agency motto is “Your
            Insurance...Our Priority”.
          </p>
        </div>

        <div className="linwood-footer__column linwood-footer__contact">
          <div className="linwood-footer__veteran">
            <span className="linwood-footer__flag" aria-hidden="true" />
            <strong>Veteran owned and operated.</strong>
          </div>
          <div className="linwood-footer__social" aria-label="Social links">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a aria-label={social.label} href={social.href} key={social.label}>
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
          <address className="linwood-footer__address">
            <a href={siteConfig.phoneHref}>
              <span>
                <LocalPhoneIcon aria-hidden="true" />
              </span>
              {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref}>
              <span>
                <EmailIcon aria-hidden="true" />
              </span>
              {siteConfig.email}
            </a>
            <p>
              <span>
                <LocationOnIcon aria-hidden="true" />
              </span>
              {siteConfig.address.street} {siteConfig.address.city}, {siteConfig.address.region}{' '}
              {siteConfig.address.postalCode}
            </p>
          </address>
        </div>
      </Container>

      <Container className="linwood-footer__divider" aria-hidden="true">
        <span />
        <ForestIcon />
        <ForestIcon />
        <ForestIcon />
        <span />
      </Container>

      <Container className="linwood-footer__bottom">
        <p className="linwood-footer__fineprint">
          Copyright {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
        </p>
      </Container>
    </Box>
  );
}
