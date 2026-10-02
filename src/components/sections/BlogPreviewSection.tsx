import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import type { HomeContent } from '@/types/site';

import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import './BlogPreviewSection.css';

type BlogPreviewSectionProps = {
  content: HomeContent['blog'];
};

export function BlogPreviewSection({ content }: BlogPreviewSectionProps) {
  return (
    <Section className="linwood-blog" id="blog" tone="white">
      <div className="linwood-blog__heading">
        <p className="linwood-eyebrow">{content.eyebrow}</p>
        <Typography component="h2" variant="h2">
          {content.title}
        </Typography>
      </div>
      <div className="linwood-blog__grid">
        {content.posts.map((post, index) => (
          <Card
            className={[
              'linwood-blog__card',
              index === 0 ? 'linwood-blog__card--featured' : undefined,
            ]
              .filter(Boolean)
              .join(' ')}
            key={post.title}
          >
            <CardContent className="linwood-blog__content">
              <div className="linwood-blog__meta">
                <span className="linwood-blog__tag">
                  {index === 0 ? 'Featured insight' : 'Insurance guide'}
                </span>
                <time className="linwood-blog__date" dateTime={post.date}>
                  {post.date}
                </time>
              </div>
              <Typography component="h3" variant="h5">
                {post.title}
              </Typography>
              <Typography className="linwood-blog__excerpt" component="p">
                {post.excerpt}
              </Typography>
              <Button href={post.href} variant="text">
                Read article
                <ArrowForwardIcon aria-hidden="true" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
