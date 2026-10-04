import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Link } from '@/i18n/navigation';
import type { HomeContent } from '@/types/site';
import { siteConfig } from '@/lib/config/site';

import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import './TeamPreviewSection.css';

type TeamPreviewSectionProps = {
  content: HomeContent['team'];
};

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('');
}

const teamDetails = [
  {
    avatar: '👨‍💼',
    image: '/images/team/dave-lin.jpeg',
    badge: 'Founder',
    specialties: ['Personal Insurance', 'Business Insurance'],
  },
  {
    avatar: '👩‍💼',
    image: '/images/team/monique-merino.jpg',
    specialties: ['Home Insurance', 'Auto Insurance'],
  },
  {
    avatar: '👨‍💻',
    image: '/images/team/ryan.jpg',
    specialties: ['Commercial Insurance', 'Property Management'],
  },
  {
    avatar: '👩‍🎓',
    image: '/images/team/madeline-pizarro.jpg',
    specialties: ['Life Insurance', 'Education & Training'],
  },
];

export function TeamPreviewSection({ content }: TeamPreviewSectionProps) {
  return (
    <Section className="linwood-team" id="team" tone="white">
      <div className="linwood-team__heading">
        <p className="linwood-eyebrow">{content.eyebrow}</p>
        <Typography component="h2" variant="h2">
          {content.title}
        </Typography>
        <Typography className="linwood-team__body" component="p">
          {content.body}
        </Typography>
      </div>
      <div className="linwood-team__grid">
        {content.members.map((member, index) => {
          const detail = teamDetails[index] ?? {
            avatar: initials(member.name),
            specialties: ['Insurance Guidance'],
          };

          return (
            <Card className="linwood-team__card" key={member.name}>
              <div className="linwood-team__content">
                <div className="linwood-team__portrait">
                  <Avatar
                    alt={`${member.name} headshot`}
                    className="linwood-team__avatar"
                    src={detail.image}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: 0,
                      '& img': {
                        objectFit: 'cover',
                        objectPosition: 'center 28%',
                      },
                    }}
                  >
                    {detail.avatar}
                  </Avatar>
                  {detail.badge ? (
                    <span className="linwood-team__badge">{detail.badge}</span>
                  ) : null}
                </div>
                <div className="linwood-team__details">
                  <Typography component="h3" variant="h5">
                    {member.name}
                  </Typography>
                  <p className="linwood-team__role">{member.role}</p>
                  <Typography className="linwood-team__summary" component="p">
                    {member.summary}
                  </Typography>
                  <ul className="linwood-team__chips" aria-label={`${member.name} specialties`}>
                    {detail.specialties.map((specialty) => (
                      <li key={specialty}>{specialty}</li>
                    ))}
                  </ul>
                  <Link className="linwood-team__profile-link" href={member.image}>
                    View profile
                    <ArrowForwardIcon aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="linwood-team__actions">
        <Typography component="h3" variant="h4">
          Ready to work with our team?
        </Typography>
        <p>
          Our experienced agents are here to help you find the perfect insurance coverage. Contact
          us today for a free consultation.
        </p>
        <div className="linwood-team__action-buttons">
          <Button href={siteConfig.phoneHref} variant="contained">
            Call {siteConfig.phone}
          </Button>
          <Button href={siteConfig.emailHref} variant="outlined">
            Email Our Team
          </Button>
        </div>
      </div>
    </Section>
  );
}
