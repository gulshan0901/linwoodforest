import MuiCard from '@mui/material/Card';
import type { CardProps as MuiCardProps } from '@mui/material/Card';

import './Card.css';

export function Card({ className, ...props }: MuiCardProps) {
  return <MuiCard className={['linwood-card', className].filter(Boolean).join(' ')} {...props} />;
}
