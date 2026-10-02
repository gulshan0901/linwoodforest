'use client';

import BusinessIcon from '@mui/icons-material/Business';
import GppGoodIcon from '@mui/icons-material/GppGood';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import ShieldIcon from '@mui/icons-material/Shield';
import StarIcon from '@mui/icons-material/Star';
import SupportIcon from '@mui/icons-material/Support';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Typography from '@mui/material/Typography';
import { useEffect, useMemo, useRef, useState } from 'react';

import type { HomeContent } from '@/types/site';

import { Section } from '../ui/Section';
import './StatsSection.css';

type StatsSectionProps = {
  stats: HomeContent['stats'];
};

const iconMap = {
  location: LocationOnIcon,
  building: BusinessIcon,
  clients: GroupsIcon,
  claims: SavingsIcon,
  star: StarIcon,
  growth: TrendingUpIcon,
  shield: ShieldIcon,
  support: SupportIcon,
} as const;

type CountParts = {
  prefix: string;
  target: number;
  suffix: string;
};

function parseCountValue(value: string): CountParts | null {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return null;
  }

  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
  };
}

function AnimatedStatValue({ value }: { value: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);
  const countParts = useMemo(() => parseCountValue(value), [value]);

  useEffect(() => {
    const node = ref.current;

    if (!node || hasStarted || !countParts) {
      return undefined;
    }

    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (shouldReduceMotion) {
      setDisplayValue(value);
      setHasStarted(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setHasStarted(true);
        observer.disconnect();

        const duration = 1100;
        const startTime = performance.now();
        const formatter = new Intl.NumberFormat('en-US', {
          maximumFractionDigits: Number.isInteger(countParts.target) ? 0 : 1,
        });

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = countParts.target * eased;
          const rounded = Number.isInteger(countParts.target)
            ? Math.round(current)
            : Number(current.toFixed(1));

          setDisplayValue(`${countParts.prefix}${formatter.format(rounded)}${countParts.suffix}`);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [countParts, hasStarted, value]);

  return (
    <dt className="linwood-stats__value" ref={ref}>
      {displayValue}
    </dt>
  );
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <Section className="linwood-stats" id="track-record" tone="white">
      <div className="linwood-stats__heading">
        <Typography component="h2" variant="h2">
          Our Track Record
        </Typography>
        <Typography component="p">
          Numbers that reflect our commitment to excellence and the trust our clients place in us.
        </Typography>
      </div>
      <dl className="linwood-stats__grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon ? iconMap[stat.icon] : GppGoodIcon;

          return (
            <div
              className={[
                'linwood-stats__item',
                `linwood-stats__item--${stat.tone ?? 'blue'}`,
                index === 0 ? 'linwood-stats__item--featured' : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
              key={`${stat.value}-${stat.label}`}
            >
              <div className="linwood-stats__icon" aria-hidden="true">
                <Icon />
              </div>
              <AnimatedStatValue value={stat.value} />
              <dd className="linwood-stats__label">{stat.label}</dd>
              {stat.description ? (
                <dd className="linwood-stats__description">{stat.description}</dd>
              ) : null}
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
