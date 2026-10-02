import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './Button.css';

type ButtonProps = Omit<MuiButtonProps<'a'>, 'component'> & {
  href: string;
  external?: boolean;
};

export function Button({ children, external, className, ...props }: ButtonProps) {
  return (
    <MuiButton
      className={['linwood-button', className].filter(Boolean).join(' ')}
      component="a"
      endIcon={<ArrowForwardIcon aria-hidden="true" />}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
