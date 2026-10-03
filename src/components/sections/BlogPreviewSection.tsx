import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Link } from '@/i18n/navigation';
import type { HomeContent } from '@/types/site';

import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import './BlogPreviewSection.css';

type BlogPreviewSectionProps = {
  content: HomeContent['blog'];
};

const articleIcons = [HouseOutlinedIcon, SavingsOutlinedIcon, Inventory2OutlinedIcon];

export function BlogPreviewSection({ content }: BlogPreviewSectionProps) {
  return (
    <Section className="linwood-blog" id="blog" tone="white">
      <div className="linwood-blog__heading">
        <div>
          <p className="linwood-eyebrow">{content.eyebrow}</p>
          <Typography component="h2" variant="h2">
            {content.title}
          </Typography>
        </div>
        <Link className="linwood-blog__all-link" href="/blog">
          {content.allArticlesLabel}
          <ArrowForwardIcon aria-hidden="true" />
        </Link>
      </div>
      <div className="linwood-blog__grid">
        {content.posts.map((post, index) => {
          const ArticleIcon = articleIcons[index % articleIcons.length];

          return (
            <Card
              className={[
                'linwood-blog__card',
                index === 0 ? 'linwood-blog__card--featured' : undefined,
                `linwood-blog__card--${index + 1}`,
              ]
                .filter(Boolean)
                .join(' ')}
              component="article"
              key={post.title}
            >
              <div aria-hidden="true" className="linwood-blog__art">
                <span className="linwood-blog__art-orbit" />
                <span className="linwood-blog__art-icon">
                  <ArticleIcon />
                </span>
                <span className="linwood-blog__art-caption">
                  {index === 0 ? content.featuredLabel : content.guideLabel}
                </span>
              </div>
              <CardContent className="linwood-blog__content">
                <span className="linwood-blog__tag">
                  {index === 0 ? content.featuredLabel : content.guideLabel}
                </span>
                <Typography component="h3" variant="h5">
                  <Link href={post.href}>{post.title}</Link>
                </Typography>
                <Typography className="linwood-blog__excerpt" component="p">
                  {post.excerpt}
                </Typography>
                <Link className="linwood-blog__read-link" href={post.href}>
                  {content.readLabel}
                  <ArrowForwardIcon aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
