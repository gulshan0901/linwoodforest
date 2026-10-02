import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

import { Container } from './Container';
import './Section.css';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'white' | 'forest';
};

export function Section({ id, children, className, tone = 'default' }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      className={['linwood-section', `linwood-section--${tone}`, className]
        .filter(Boolean)
        .join(' ')}
    >
      <Container>{children}</Container>
    </Box>
  );
}
