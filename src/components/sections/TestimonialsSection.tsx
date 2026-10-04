'use client';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useMemo, useState } from 'react';

import type { HomeContent } from '@/types/site';
import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/config/site';

import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import './TestimonialsSection.css';

type Review = {
  rating: number;
  text: string;
  author: string;
  authorUrl?: string;
  relativeDate: string;
};

type GoogleReviews = {
  rating?: number;
  reviewCount?: number;
  googleMapsUri?: string;
  reviews: Review[];
  unavailable?: boolean;
};

type TestimonialsSectionProps = {
  content: HomeContent['testimonials'];
  locale: Locale;
};

const EMPTY_REVIEWS: Review[] = [];
const GOOGLE_FALLBACK_REVIEWS: GoogleReviews = {
  rating: 5,
  reviewCount: 201,
  googleMapsUri: siteConfig.googleReviewsHref,
  reviews: [
    {
      rating: 5,
      text: 'Dave was recommended to us from our realtor. He was very helpful from the beginning to the end.',
      author: 'Stephanie Torres',
      relativeDate: '5 years ago',
    },
    {
      rating: 5,
      text: "Dave is great! I'm so glad I found him. His customer service was awesome!",
      author: 'Dennis O-O',
      relativeDate: '9 years ago',
    },
    {
      rating: 5,
      text: 'Dave and his team are outstanding. We have worked with them several times and they consistently exceed our expectations.',
      author: 'Sean Goral',
      relativeDate: '6 years ago',
    },
    {
      rating: 5,
      text: "Madeline is so helpful. I love the fact that she tries to find what's good for you.",
      author: 'Rosa Almonte',
      relativeDate: 'Edited a year ago',
    },
    {
      rating: 5,
      text: 'Dave found me better insurance plan. His communication is wonderful.',
      author: 'Olga Colley',
      relativeDate: '4 years ago',
    },
    {
      rating: 5,
      text: 'Linwood always does their best to get you the best price!',
      author: 'Allison Rompilla',
      relativeDate: '3 years ago',
    },
  ],
};

const copy = {
  en: {
    description: 'Real feedback from clients who have worked with our team.',
    basedOn: 'Google reviews',
    viewAll: 'View all reviews on',
    review: 'Google review',
    loading: 'Loading the latest Google reviews…',
    unavailable: 'Google reviews are temporarily unavailable.',
    none: 'There are no reviews available to display right now.',
    previous: 'Previous Google reviews',
    next: 'Next Google reviews',
    choose: 'Choose a Google review',
    source: 'Reviews and ratings from',
  },
  zh: {
    description: '了解客户与我们团队合作后的真实反馈。',
    basedOn: 'Google 评论',
    viewAll: '在以下平台查看全部评论：',
    review: 'Google 评论',
    loading: '正在加载最新 Google 评论…',
    unavailable: 'Google 评论暂时无法显示。',
    none: '目前没有可显示的评论。',
    previous: '上一条 Google 评论',
    next: '下一条 Google 评论',
    choose: '选择一条 Google 评论',
    source: '评论与评分来自',
  },
} as const;

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('');
}

export function TestimonialsSection({ content, locale }: TestimonialsSectionProps) {
  const [reviewData, setReviewData] = useState<GoogleReviews | null>(null);
  const [failed, setFailed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const labels = copy[locale];
  const displayedReviewData =
    reviewData && !reviewData.unavailable && reviewData.reviews.length > 0
      ? reviewData
      : GOOGLE_FALLBACK_REVIEWS;
  const reviews = displayedReviewData.reviews ?? EMPTY_REVIEWS;
  const visibleCount = Math.min(3, reviews.length);
  const visibleReviews = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, index) => {
        return reviews[(activeIndex + index) % reviews.length];
      }),
    [activeIndex, reviews, visibleCount],
  );

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch(`/api/google-reviews?languageCode=${locale}`, {
          cache: 'no-store',
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Google reviews request failed with HTTP ${response.status}.`);
        }

        const data: GoogleReviews = await response.json();
        setReviewData(data);
        setFailed(Boolean(data.unavailable));
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Could not load Google reviews.', error);
          setFailed(true);
        }
      }
    }

    void loadReviews();
    return () => controller.abort();
  }, [locale]);

  const googleMapsHref = displayedReviewData.googleMapsUri ?? siteConfig.googleReviewsHref;
  const hasReviews = reviews.length > 0;

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % reviews.length);
  };

  return (
    <Section className="linwood-testimonials" id="testimonials" tone="white">
      <div className="linwood-testimonials__heading">
        <Typography component="h2" variant="h2">
          {content.title}
        </Typography>
        <Typography component="p">{labels.description}</Typography>
        {displayedReviewData.rating !== undefined &&
        displayedReviewData.reviewCount !== undefined ? (
          <div
            aria-label={`${displayedReviewData.rating} out of 5 stars based on ${displayedReviewData.reviewCount} Google reviews`}
            className="linwood-testimonials__rating"
          >
            <Rating precision={0.1} readOnly size="large" value={displayedReviewData.rating} />
            <strong>{displayedReviewData.rating.toFixed(1)}</strong>
            <span>
              {displayedReviewData.reviewCount} {labels.basedOn}
            </span>
          </div>
        ) : null}
        <a
          className="linwood-testimonials__google-link"
          href={googleMapsHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          {labels.viewAll}
          <span lang="en" translate="no">
            Google Maps
          </span>
        </a>
      </div>

      {hasReviews && reviews.length > 1 ? (
        <div className="linwood-testimonials__controls">
          <IconButton aria-label={labels.previous} onClick={goToPrevious}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton aria-label={labels.next} onClick={goToNext}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      ) : null}

      {hasReviews ? (
        <>
          <div
            className="linwood-testimonials__grid"
            key={activeIndex}
            aria-live="polite"
            aria-roledescription="carousel"
          >
            {visibleReviews.map((review, index) => (
              <Card className="linwood-testimonials__card" key={`${review.author}-${index}`}>
                <CardContent>
                  <FormatQuoteIcon className="linwood-testimonials__mark" aria-hidden="true" />
                  <div className="linwood-testimonials__card-stars">
                    <Rating
                      aria-label={`${review.rating} out of 5 stars`}
                      precision={0.1}
                      readOnly
                      size="small"
                      value={review.rating}
                    />
                  </div>
                  <blockquote className="linwood-testimonials__quote">{review.text}</blockquote>
                  <div className="linwood-testimonials__person">
                    <Avatar aria-hidden="true" className="linwood-testimonials__avatar">
                      {initials(review.author)}
                    </Avatar>
                    <div>
                      {review.authorUrl ? (
                        <a
                          className="linwood-testimonials__author"
                          href={review.authorUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {review.author}
                        </a>
                      ) : (
                        <p className="linwood-testimonials__author">{review.author}</p>
                      )}
                      {review.relativeDate ? (
                        <p className="linwood-testimonials__date">{review.relativeDate}</p>
                      ) : null}
                      <p className="linwood-testimonials__source">{labels.review}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {reviews.length > 1 ? (
            <div className="linwood-testimonials__dots" aria-label={labels.choose}>
              {reviews.map((review, index) => (
                <button
                  aria-label={`${labels.choose}: ${review.author}`}
                  aria-pressed={index === activeIndex}
                  className={
                    index === activeIndex ? 'linwood-testimonials__dot--active' : undefined
                  }
                  key={`${review.author}-${index}`}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <p className="linwood-testimonials__state" role="status">
          {failed ? labels.unavailable : reviewData ? labels.none : labels.loading}
        </p>
      )}

      <p className="linwood-testimonials__attribution">
        {labels.source}{' '}
        <span lang="en" translate="no">
          Google Maps
        </span>
      </p>
    </Section>
  );
}
