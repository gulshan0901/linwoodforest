import Typography from '@mui/material/Typography';

import type { HomeContent } from '@/types/site';

import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import './ContactCtaSection.css';

type ContactCtaSectionProps = {
  content: HomeContent['contactCta'];
};

export function ContactCtaSection({ content }: ContactCtaSectionProps) {
  return (
    <Section className="linwood-contact-cta" id="contact" tone="forest">
      <div className="linwood-contact-cta__grid">
        <div>
          <Typography className="linwood-contact-cta__title" component="h2" variant="h2">
            {content.title}
          </Typography>
          <Typography className="linwood-contact-cta__body" component="p">
            {content.body}
          </Typography>
        </div>
        <div className="linwood-contact-cta__actions">
          <Button href={content.primaryCta.href} variant="contained">
            {content.primaryCta.label}
          </Button>
          <Button
            external={content.secondaryCta.external}
            href={content.secondaryCta.href}
            variant="outlined"
          >
            {content.secondaryCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
