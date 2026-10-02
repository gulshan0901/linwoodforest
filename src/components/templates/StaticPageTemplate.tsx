import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Link } from '@/i18n/navigation';
import type { StaticPageWithLocale } from '@/types/static-pages';

import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import './StaticPageTemplate.css';

type StaticPageTemplateProps = {
  page: StaticPageWithLocale;
};

function localizeHref(locale: StaticPageWithLocale['locale'], href: string) {
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }

  return `/${locale}${href.startsWith('/') ? href : `/${href}`}`;
}

export function StaticPageTemplate({ page }: StaticPageTemplateProps) {
  return (
    <main className="linwood-static-page" id="main-content">
      <section className="linwood-static-page__hero">
        <Container className="linwood-static-page__hero-inner">
          {page.eyebrow ? <p className="linwood-eyebrow">{page.eyebrow}</p> : null}
          <Typography component="h1" variant="h1">
            {page.title}
          </Typography>
          <Typography className="linwood-static-page__intro" component="p">
            {page.intro}
          </Typography>
        </Container>
      </section>

      {page.sections.map((section, index) => (
        <Section
          className="linwood-static-page__section"
          key={`${page.path}-${section.heading}`}
          tone={index % 2 === 0 ? 'white' : 'default'}
        >
          <div className="linwood-static-page__section-copy">
            <Typography component="h2" variant="h2">
              {section.heading}
            </Typography>
            {section.body ? (
              <Typography className="linwood-static-page__body" component="p">
                {section.body}
              </Typography>
            ) : null}
            {section.bullets ? (
              <ul className="linwood-static-page__list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>

          {section.cards ? (
            <div className="linwood-static-page__cards">
              {section.cards.map((card) => (
                <Card className="linwood-static-page__card" key={card.title}>
                  <CardContent className="linwood-static-page__card-content">
                    <Typography component="h3" variant="h5">
                      {card.title}
                    </Typography>
                    <Typography className="linwood-static-page__card-body" component="p">
                      {card.body}
                    </Typography>
                    {card.href ? (
                      <Link className="linwood-static-page__card-link" href={card.href}>
                        Learn more
                      </Link>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}
        </Section>
      ))}

      {page.cta ? (
        <Section className="linwood-static-page__cta" tone="forest">
          <div className="linwood-static-page__cta-copy">
            <Typography component="h2" variant="h2">
              {page.cta.title}
            </Typography>
            <Typography component="p">{page.cta.body}</Typography>
          </div>
          <Button
            external={page.cta.external}
            href={localizeHref(page.locale, page.cta.href)}
            variant="contained"
          >
            {page.cta.label}
          </Button>
        </Section>
      ) : null}
    </main>
  );
}
