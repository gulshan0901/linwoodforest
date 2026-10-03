'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import Typography from '@mui/material/Typography';

import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/config/site';

import { Container } from '../ui/Container';
import { ContactRequestForm } from './ContactRequestForm';
import './QuotePage.css';

type QuotePageProps = {
  locale: Locale;
};

const content = {
  en: {
    eyebrow: 'Get a quote',
    title: 'Let’s discuss your insurance.',
    intro:
      'Our experienced team is ready to help. Let us know your concerns and we will work together to tackle them.',
    callTitle: 'Talk with our team',
    callBody: 'Call us to discuss what you would like to protect and get help with next steps.',
    emailTitle: 'Send us an email',
    emailBody: 'Share a good time to reach you and the type of coverage you are exploring.',
    callCta: 'Call for a quote',
    emailCta: 'Email for a quote',
    servicesTitle: 'Coverage for what matters',
    personal: 'Home, auto, and personal coverage',
    business: 'Coverage for your business',
    life: 'Life insurance options',
    nextTitle: 'A helpful place to start',
    nextBody:
      'When you reach out, let us know what you would like to insure, where you need coverage, and how we can reach you. We will help you understand the options and what information is needed next.',
    privacy:
      'Please do not email sensitive personal or financial information. Our team can guide you through a secure way to share details if needed.',
    phone: 'Prefer to speak with someone now?',
    quoteEmailSubject: 'Quote request',
    emailBodyText: 'Hello, I would like to discuss an insurance quote. Please contact me.',
  },
  zh: {
    eyebrow: '获取报价',
    title: '让我们聊聊您的保险需求。',
    intro: '我们的专业团队随时为您提供帮助。告诉我们您的顾虑，我们会一起寻找解决方案。',
    callTitle: '与团队沟通',
    callBody: '致电我们，聊聊您希望保障的内容以及接下来的步骤。',
    emailTitle: '发送邮件',
    emailBody: '告诉我们方便联系您的时间，以及您正在了解哪类保障。',
    callCta: '致电咨询报价',
    emailCta: '发送报价咨询邮件',
    servicesTitle: '为重要的人和事提供保障',
    personal: '房屋、汽车及个人保险',
    business: '企业保险保障',
    life: '人寿保险方案',
    nextTitle: '从这里开始',
    nextBody:
      '联系我们时，请告诉我们您希望投保的内容、需要保障的地区，以及如何联系您。我们会协助您了解可选方案和后续所需资料。',
    privacy:
      '请勿通过邮件发送敏感个人或财务信息。如需提供详细资料，我们的团队会指导您使用安全方式。',
    phone: '希望现在就与专人沟通？',
    quoteEmailSubject: '报价咨询',
    emailBodyText: '您好，我想咨询保险报价。请与我联系。',
  },
} as const;

export function QuotePage({ locale }: QuotePageProps) {
  const text = content[locale];
  const emailHref = `${siteConfig.emailHref}?subject=${encodeURIComponent(text.quoteEmailSubject)}&body=${encodeURIComponent(text.emailBodyText)}`;

  return (
    <main className="linwood-quote-page" id="main-content">
      <section className="linwood-quote-page__hero">
        <Container className="linwood-quote-page__hero-inner">
          <div className="linwood-quote-page__intro">
            <p className="linwood-quote-page__eyebrow">{text.eyebrow}</p>
            <Typography component="h1" variant="h1">
              {text.title}
            </Typography>
            <Typography component="p">{text.intro}</Typography>
            <div className="linwood-quote-page__trust">
              <span aria-hidden="true" className="linwood-quote-page__trust-mark">
                <ShieldOutlinedIcon />
              </span>
              <span>{text.servicesTitle}</span>
            </div>
          </div>

          <div aria-label={text.eyebrow} className="linwood-quote-page__contact-options">
            <a className="linwood-quote-page__option" href={siteConfig.phoneHref}>
              <span aria-hidden="true" className="linwood-quote-page__option-icon">
                <PhoneInTalkOutlinedIcon />
              </span>
              <span className="linwood-quote-page__option-copy">
                <strong>{text.callTitle}</strong>
                <span>{text.callBody}</span>
                <b>
                  {text.callCta}
                  <ArrowForwardIcon aria-hidden="true" />
                </b>
              </span>
            </a>
            <a className="linwood-quote-page__option" href={emailHref}>
              <span aria-hidden="true" className="linwood-quote-page__option-icon">
                <EmailOutlinedIcon />
              </span>
              <span className="linwood-quote-page__option-copy">
                <strong>{text.emailTitle}</strong>
                <span>{text.emailBody}</span>
                <b>
                  {text.emailCta}
                  <ArrowForwardIcon aria-hidden="true" />
                </b>
              </span>
            </a>
          </div>
        </Container>
      </section>

      <ContactRequestForm formType="quote" locale={locale} />

      <section className="linwood-quote-page__coverage">
        <Container>
          <div className="linwood-quote-page__section-heading">
            <p className="linwood-quote-page__eyebrow">{text.eyebrow}</p>
            <Typography component="h2" variant="h2">
              {text.servicesTitle}
            </Typography>
          </div>
          <div className="linwood-quote-page__coverage-grid">
            <div className="linwood-quote-page__coverage-item">
              <FamilyRestroomOutlinedIcon aria-hidden="true" />
              <span>{text.personal}</span>
            </div>
            <div className="linwood-quote-page__coverage-item">
              <BusinessOutlinedIcon aria-hidden="true" />
              <span>{text.business}</span>
            </div>
            <div className="linwood-quote-page__coverage-item">
              <ShieldOutlinedIcon aria-hidden="true" />
              <span>{text.life}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="linwood-quote-page__next">
        <Container className="linwood-quote-page__next-inner">
          <div>
            <Typography component="h2" variant="h2">
              {text.nextTitle}
            </Typography>
            <Typography component="p">{text.nextBody}</Typography>
            <p className="linwood-quote-page__privacy">{text.privacy}</p>
          </div>
          <div className="linwood-quote-page__next-callout">
            <span>{text.phone}</span>
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          </div>
        </Container>
      </section>
    </main>
  );
}
