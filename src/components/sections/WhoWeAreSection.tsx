import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

import type { HomeContent } from '@/types/site';

import { Section } from '../ui/Section';
import './WhoWeAreSection.css';

type WhoWeAreSectionProps = {
  content: HomeContent['whoWeAre'];
};

export function WhoWeAreSection({ content }: WhoWeAreSectionProps) {
  return (
    <Section className="linwood-who" id="who-we-are" tone="white">
      <div className="linwood-who__layout">
        <div className="linwood-who__copy">
          <p className="linwood-eyebrow">{content.eyebrow}</p>
          <Typography className="linwood-who__title" component="h2" variant="h2">
            {content.title}
          </Typography>
          <Typography className="linwood-who__body" component="p">
            {content.body}
          </Typography>
          <ul className="linwood-who__list">
            {content.points.map((point) => (
              <li key={point}>
                <CheckCircleIcon aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="linwood-who__media">
          <div className="linwood-who__video">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/maEJTRfIr98"
              title="Linwood Forest Insurance Group video"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
