import { ReactNode } from 'react';

import { ContainerCss } from '../styles/components/ContainerCss';

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className={ContainerCss()}>{children}</div>;
}
