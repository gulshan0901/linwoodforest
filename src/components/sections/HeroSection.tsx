import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import VerifiedIcon from '@mui/icons-material/Verified';
import Typography from '@mui/material/Typography';

import { Link } from '@/i18n/navigation';
import type { HomeContent } from '@/types/site';
import { siteConfig } from '@/lib/config/site';

import { Container } from '../ui/Container';
import './HeroSection.css';

type HeroSectionProps = {
  content: HomeContent['hero'];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="linwood-hero">
      <Container className="linwood-hero__inner">
        <div className="linwood-hero__copy">
          <p className="linwood-hero__eyebrow">
            <VerifiedIcon aria-hidden="true" />
            Veteran owned - licensed in 6 states
          </p>
          <Typography className="linwood-hero__title" component="h1" variant="h1">
            Your Insurance, <span>Our Priority</span>
          </Typography>
          <Typography className="linwood-hero__body" component="p">
            We are your advocates in the Lehigh Valley, providing competitive insurance coverage
            that protects what matters most to you and your business.
          </Typography>
          <p className="linwood-hero__service-area">
            <LocationOnIcon aria-hidden="true" />
            Serving Pennsylvania, New Jersey, Delaware, Maryland, Virginia & Washington D.C.
          </p>
          <div className="linwood-hero__actions">
            <Link
              className="linwood-hero__button linwood-hero__button--primary"
              href={content.primaryCta.href}
            >
              <RequestQuoteIcon aria-hidden="true" />
              Get Free Quote
            </Link>
            <a
              className="linwood-hero__button linwood-hero__button--secondary"
              href={content.secondaryCta.href}
            >
              <LocalPhoneIcon aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
          <p className="linwood-hero__trusted">Trusted by thousands</p>
          <ul className="linwood-hero__stats" aria-label="Agency statistics">
            <li>
              <strong>6</strong>
              <span>Licensed States</span>
            </li>
            <li>
              <strong>50+</strong>
              <span>Insurance Companies</span>
            </li>
            <li>
              <strong>1000+</strong>
              <span>Happy Clients</span>
            </li>
          </ul>
        </div>
        <div className="linwood-hero__visual" aria-hidden="true">
          <div className="linwood-hero__glow linwood-hero__glow--one" />
          <div className="linwood-hero__glow linwood-hero__glow--two" />
          <div className="linwood-hero__orbit" />
          <div className="linwood-hero__orbit linwood-hero__orbit--outer" />
          <div className="linwood-hero__shield">
            <GppGoodIcon />
          </div>
          <span className="linwood-hero__spark linwood-hero__spark--one" />
          <span className="linwood-hero__spark linwood-hero__spark--two" />
          <span className="linwood-hero__spark linwood-hero__spark--three" />
          <div className="linwood-hero__float-card linwood-hero__float-card--top">
            <strong>$2M+</strong>
            <span>Claims Paid</span>
          </div>
          <div className="linwood-hero__float-card linwood-hero__float-card--bottom">
            <strong>24/7</strong>
            <span>Support</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
