import type { HTMLAttributes } from 'react';

import './Container.css';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={['linwood-container', className].filter(Boolean).join(' ')} {...props} />;
}
