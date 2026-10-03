'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Typography from '@mui/material/Typography';

import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/config/site';

import { Container } from '../ui/Container';
import { ContactRequestForm } from './ContactRequestForm';
import './ContactPage.css';

type ContactPageProps = {
  locale: Locale;
};

const content = {
  en: {
    eyebrow: 'Contact Linwood Forest',
    title: 'We are here for you, at our office or online.',
    intro:
      'Have a question, need help with a policy, or want to talk through your coverage? Reach our local team by phone, email, or at our Whitehall office.',
    office: 'Our office',
    phoneLabel: 'Call our team',
    emailLabel: 'Email',
    directions: 'Get directions',
    callCta: 'Call Linwood Forest',
    emailCta: 'Email our team',
    secondPhone: 'Office',
  },
  zh: {
    eyebrow: '联系 Linwood Forest',
    title: '无论到访办公室还是在线联系，我们都在这里为您服务。',
    intro:
      '有疑问、需要保单协助，或想了解保障方案？您可以致电、发送邮件，或前往我们位于 Whitehall 的办公室联系本地团队。',
    office: '我们的办公室',
    phoneLabel: '致电团队',
    emailLabel: '电子邮箱',
    directions: '查看路线',
    callCta: '致电 Linwood Forest',
    emailCta: '发送邮件',
    secondPhone: '办公室',
  },
} as const;

export function ContactPage({ locale }: ContactPageProps) {
  const text = content[locale];
  const address = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <main className="linwood-contact-page" id="main-content">
      <section className="linwood-contact-page__hero">
        <Container className="linwood-contact-page__hero-inner">
          <div className="linwood-contact-page__hero-copy">
            <p className="linwood-contact-page__eyebrow">{text.eyebrow}</p>
            <Typography component="h1" variant="h1">
              {text.title}
            </Typography>
            <Typography className="linwood-contact-page__intro" component="p">
              {text.intro}
            </Typography>
            <div className="linwood-contact-page__actions">
              <a
                className="linwood-contact-page__button linwood-contact-page__button--primary"
                href={siteConfig.phoneHref}
              >
                <PhoneInTalkOutlinedIcon aria-hidden="true" />
                {text.callCta}
              </a>
              <a
                className="linwood-contact-page__button linwood-contact-page__button--secondary"
                href={siteConfig.emailHref}
              >
                <EmailOutlinedIcon aria-hidden="true" />
                {text.emailCta}
              </a>
            </div>
          </div>
          <aside aria-label={text.office} className="linwood-contact-page__office-card">
            <span aria-hidden="true" className="linwood-contact-page__office-icon">
              <LocationOnOutlinedIcon />
            </span>
            <p className="linwood-contact-page__card-eyebrow">{text.office}</p>
            <Typography component="h2" variant="h4">
              {siteConfig.address.city}, {siteConfig.address.region}
            </Typography>
            <p className="linwood-contact-page__address">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
            </p>
            <a
              className="linwood-contact-page__directions"
              href={directionsHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              {text.directions}
              <ArrowForwardIcon aria-hidden="true" />
            </a>
            <span aria-hidden="true" className="linwood-contact-page__card-watermark">
              LF
            </span>
          </aside>
        </Container>
      </section>

      <section aria-label={text.office} className="linwood-contact-page__details">
        <Container className="linwood-contact-page__details-grid">
          <a className="linwood-contact-page__detail" href={siteConfig.phoneHref}>
            <span aria-hidden="true" className="linwood-contact-page__detail-icon">
              <PhoneInTalkOutlinedIcon />
            </span>
            <span>
              <span className="linwood-contact-page__detail-label">{text.phoneLabel}</span>
              <strong>{siteConfig.phone}</strong>
            </span>
            <ArrowForwardIcon aria-hidden="true" className="linwood-contact-page__detail-arrow" />
          </a>
          <a className="linwood-contact-page__detail" href="tel:+16105727344">
            <span aria-hidden="true" className="linwood-contact-page__detail-icon">
              <PhoneInTalkOutlinedIcon />
            </span>
            <span>
              <span className="linwood-contact-page__detail-label">{text.secondPhone}</span>
              <strong>(610) 572-7344</strong>
            </span>
            <ArrowForwardIcon aria-hidden="true" className="linwood-contact-page__detail-arrow" />
          </a>
          <a className="linwood-contact-page__detail" href={siteConfig.emailHref}>
            <span aria-hidden="true" className="linwood-contact-page__detail-icon">
              <EmailOutlinedIcon />
            </span>
            <span>
              <span className="linwood-contact-page__detail-label">{text.emailLabel}</span>
              <strong>{siteConfig.email}</strong>
            </span>
            <ArrowForwardIcon aria-hidden="true" className="linwood-contact-page__detail-arrow" />
          </a>
        </Container>
      </section>
      <ContactRequestForm formType="contact" locale={locale} />
    </main>
  );
}
