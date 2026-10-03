'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/config/site';

import { Container } from '../ui/Container';
import './TeamPage.css';

type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  summary: string;
  bio: string;
  specialties: string[];
};

const team: TeamMember[] = [
  {
    slug: 'dave-lin',
    name: 'Dave Lin',
    role: 'Principal Agent',
    image: '/images/team/dave-lin.jpeg',
    summary:
      'Multi-lingual insurance professional with experience in real estate and financial services.',
    bio: 'Dave Lin is a multi-lingual insurance professional with prior experience in real estate and financial services. His specialties include life, property, and casualty insurance. In addition to English, Dave speaks three Chinese dialects. His mission is to help clients secure their possessions and their loved ones’ future through attentive service. Dave grew up in northeastern Pennsylvania, graduated from Crestwood High School and King’s College, and served in the United States Navy aboard the USS Blue Ridge.',
    specialties: ['Life insurance', 'Property insurance', 'Personal and business coverage'],
  },
  {
    slug: 'monique-merino',
    name: 'Monique Merino',
    role: 'Independent Insurance Agent',
    image: '/images/team/monique-merino.jpg',
    summary:
      'Brings more than 18 years of financial-industry experience and a background in insurance.',
    bio: 'Raised in Brooklyn and educated in Miami, Monique began her financial-industry career in New York City. She holds a bachelor’s degree in Business Finance and has more than 18 years of experience in the investment sector. Before joining Linwood Forest, she supported clients with life insurance, Medicare supplement plans, and wealth management. Monique and her family made the Lehigh Valley their home.',
    specialties: ['Personal insurance', 'Life insurance', 'Client service'],
  },
  {
    slug: 'ryan',
    name: 'Ryan',
    role: 'Account Executive',
    image: '/images/team/ryan.jpg',
    summary:
      'Helps clients and referral partners coordinate quotes, timelines, and coverage questions.',
    bio: 'Ryan is an account executive at Linwood Forest Insurance Group. He works with clients and referral partners to coordinate insurance quotes, manage time-sensitive details, and answer coverage questions.',
    specialties: ['Account support', 'Quote coordination', 'Referral partners'],
  },
  {
    slug: 'madeline-pizarro',
    name: 'Madeline Pizarro',
    role: 'Insurance Agent',
    image: '/images/team/madeline-pizarro.jpg',
    summary:
      'Helps clients review policies, compare options, and keep coverage aligned with their needs.',
    bio: 'Madeline helps clients review their insurance policies, compare available options, and keep their coverage aligned with their changing needs.',
    specialties: ['Policy reviews', 'Coverage comparisons', 'Client education'],
  },
];

export function isTeamProfileSlug(slug: string) {
  return team.some((member) => member.slug === slug);
}

const labels = {
  en: {
    directoryEyebrow: 'The people behind your protection',
    directoryTitle: 'Meet our team',
    directoryIntro:
      'Get to know the people ready to help with your insurance questions, coverage reviews, and next steps.',
    profile: 'View profile',
    contact: 'Talk with our team',
    contactBody:
      'Our team is here to listen, explain your options, and help you decide what to do next.',
    call: 'Call our office',
    email: 'Send us an email',
    back: 'Back to our team',
    expertise: 'Areas of focus',
    role: 'Linwood Forest Insurance Group',
  },
  zh: {
    directoryEyebrow: '为您提供保障的团队',
    directoryTitle: '认识我们的团队',
    directoryIntro: '认识我们的团队成员，他们可以协助您解答保险问题、检查保障方案并了解后续步骤。',
    profile: '查看个人介绍',
    contact: '联系团队',
    contactBody: '我们的团队会认真倾听、说明可选方案，并协助您了解下一步。',
    call: '致电办公室',
    email: '发送邮件',
    back: '返回团队介绍',
    expertise: '服务领域',
    role: 'Linwood Forest Insurance Group',
  },
} as const;

type TeamPageProps = {
  locale: Locale;
  slug?: string;
};

export function TeamPage({ locale, slug }: TeamPageProps) {
  const text = labels[locale];
  const member = slug ? team.find((person) => person.slug === slug) : undefined;

  if (slug && !member) {
    return null;
  }

  if (member) {
    return (
      <main className="linwood-team-page" id="main-content">
        <section className="linwood-team-page__profile-hero">
          <Container className="linwood-team-page__profile-inner">
            <Link className="linwood-team-page__back" href="/our-team">
              <ArrowBackIcon aria-hidden="true" />
              {text.back}
            </Link>
            <div className="linwood-team-page__profile">
              <div className="linwood-team-page__portrait">
                <Image
                  alt={member.name}
                  fill
                  priority
                  sizes="(max-width: 800px) 80vw, 28rem"
                  src={member.image}
                />
              </div>
              <div className="linwood-team-page__profile-copy">
                <p className="linwood-team-page__eyebrow">{text.role}</p>
                <Typography component="h1" variant="h1">
                  {member.name}
                </Typography>
                <p className="linwood-team-page__role">{member.role}</p>
                <Typography component="p">{member.bio}</Typography>
                <div className="linwood-team-page__specialties">
                  <h2>{text.expertise}</h2>
                  <ul>
                    {member.specialties.map((specialty) => (
                      <li key={specialty}>{specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="linwood-team-page__contact">
          <Container className="linwood-team-page__contact-inner">
            <div>
              <Typography component="h2" variant="h2">
                {text.contact}
              </Typography>
              <p>{text.contactBody}</p>
            </div>
            <div className="linwood-team-page__contact-actions">
              <a href={siteConfig.phoneHref}>
                <PhoneInTalkOutlinedIcon aria-hidden="true" />
                {text.call}
              </a>
              <a href={siteConfig.emailHref}>
                <EmailOutlinedIcon aria-hidden="true" />
                {text.email}
              </a>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="linwood-team-page" id="main-content">
      <section className="linwood-team-page__directory-hero">
        <Container>
          <p className="linwood-team-page__eyebrow">{text.directoryEyebrow}</p>
          <Typography component="h1" variant="h1">
            {text.directoryTitle}
          </Typography>
          <Typography component="p">{text.directoryIntro}</Typography>
        </Container>
      </section>
      <section className="linwood-team-page__directory">
        <Container className="linwood-team-page__grid">
          {team.map((person) => (
            <article className="linwood-team-page__card" key={person.slug}>
              <Link
                aria-label={`${text.profile}: ${person.name}`}
                className="linwood-team-page__card-image"
                href={`/our-team/${person.slug}`}
              >
                <Image
                  alt=""
                  fill
                  sizes="(max-width: 680px) 90vw, (max-width: 1050px) 42vw, 22rem"
                  src={person.image}
                />
                <span aria-hidden="true">
                  <ArrowForwardIcon />
                </span>
              </Link>
              <div className="linwood-team-page__card-copy">
                <p className="linwood-team-page__role">{person.role}</p>
                <Typography component="h2" variant="h4">
                  {person.name}
                </Typography>
                <p>{person.summary}</p>
                <Link className="linwood-team-page__profile-link" href={`/our-team/${person.slug}`}>
                  {text.profile}
                  <ArrowForwardIcon aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </main>
  );
}
