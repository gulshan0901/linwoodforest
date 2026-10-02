import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import type { HomeContent } from '@/types/site';

import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import './ServicesSection.css';

type ServicesSectionProps = {
  content: HomeContent['services'];
};

const serviceIcons = [HomeWorkIcon, BusinessCenterIcon, FavoriteIcon];
const serviceBadges = ['Most Popular', 'Best Value', 'Peace of Mind'];
const serviceTones = ['blue', 'green', 'sky'];

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <Section className="linwood-services" id="services">
      <div className="linwood-services__heading">
        <p className="linwood-eyebrow">{content.eyebrow}</p>
        <Typography component="h2" variant="h2">
          {content.title}
        </Typography>
      </div>
      <div className="linwood-services__grid">
        {content.cards.map((service, index) => {
          const Icon = serviceIcons[index] ?? HomeWorkIcon;

          return (
            <Card className="linwood-services__card" key={service.title}>
              <CardContent className="linwood-services__card-content">
                <span
                  className={`linwood-services__badge linwood-services__badge--${serviceTones[index]}`}
                >
                  {serviceBadges[index]}
                </span>
                <div className="linwood-services__icon" aria-hidden="true">
                  <Icon />
                </div>
                <Typography component="h3" variant="h5">
                  {service.title}
                </Typography>
                <Typography className="linwood-services__description" component="p">
                  {service.description}
                </Typography>
                <p
                  className={`linwood-services__includes linwood-services__includes--${serviceTones[index]}`}
                >
                  Coverage includes:
                </p>
                <ul className="linwood-services__coverage">
                  {service.items.map((item) => (
                    <li key={item}>
                      <CheckCircleIcon aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                  <li className="linwood-services__more">
                    + {index === 0 ? '3' : '2'} more coverage options
                  </li>
                </ul>
                <Button href={service.href} variant="outlined">
                  Learn more
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
