import Image from 'next/image';
import Typography from '@mui/material/Typography';

import type { HomeContent } from '@/types/site';

import { Section } from '../ui/Section';
import './PartnersSection.css';

type PartnersSectionProps = {
  content: HomeContent['partners'];
};

export function PartnersSection({ content }: PartnersSectionProps) {
  return (
    <Section className="linwood-partners" id="partners" tone="white">
      <div className="linwood-partners__heading">
        <p className="linwood-eyebrow">{content.eyebrow}</p>
        <Typography component="h2" variant="h2">
          {content.title}
        </Typography>
        <Typography component="p">
          We compare coverage across respected carriers so clients can choose policies with
          confidence.
        </Typography>
      </div>
      <ul className="linwood-partners__list" aria-label="Insurance carrier partner logos">
        {content.logos.map((logo) => (
          <li className="linwood-partners__logo" key={logo.name}>
            <Image alt={`${logo.name} logo`} height={96} src={logo.src} width={151} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
