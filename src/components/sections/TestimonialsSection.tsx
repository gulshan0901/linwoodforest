'use client';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';

import type { HomeContent } from '@/types/site';

import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import './TestimonialsSection.css';

type TestimonialsSectionProps = {
  content: HomeContent['testimonials'];
};

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = content.items.length;
  const visibleItems = useMemo(
    () => content.items.map((_, index) => content.items[(activeIndex + index) % itemCount]),
    [activeIndex, content.items, itemCount],
  );

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + itemCount) % itemCount);
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % itemCount);
  };

  return (
    <Section className="linwood-testimonials" id="testimonials" tone="white">
      <div className="linwood-testimonials__heading">
        <Typography component="h2" variant="h2">
          {content.title}
        </Typography>
        <Typography component="p">
          Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say
          about our service.
        </Typography>
        <div
          className="linwood-testimonials__rating"
          aria-label="5.0 star rating based on 9 reviews"
        >
          <span className="linwood-testimonials__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </span>
          <strong>5.0</strong>
          <span>Based on 9 reviews</span>
        </div>
      </div>
      <div className="linwood-testimonials__controls">
        <IconButton aria-label="Previous testimonial" onClick={goToPrevious}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton aria-label="Next testimonial" onClick={goToNext}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <div
        className="linwood-testimonials__grid"
        key={activeIndex}
        aria-live="polite"
        aria-roledescription="carousel"
      >
        {visibleItems.map((item) => (
          <Card className="linwood-testimonials__card" key={item.author}>
            <CardContent>
              <FormatQuoteIcon className="linwood-testimonials__mark" aria-hidden="true" />
              <div className="linwood-testimonials__card-stars" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <blockquote className="linwood-testimonials__quote">“{item.quote}”</blockquote>
              <div className="linwood-testimonials__person">
                <Avatar aria-hidden="true" className="linwood-testimonials__avatar">
                  {item.avatar ?? item.author.charAt(0)}
                </Avatar>
                <div>
                  <p className="linwood-testimonials__author">{item.author}</p>
                  <p className="linwood-testimonials__location">{item.location}</p>
                  {item.date ? <p className="linwood-testimonials__date">{item.date}</p> : null}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="linwood-testimonials__dots" aria-label="Choose testimonial">
        {content.items.map((item, index) => (
          <button
            aria-label={`Show testimonial from ${item.author}`}
            className={index === activeIndex ? 'linwood-testimonials__dot--active' : undefined}
            key={item.author}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </Section>
  );
}
