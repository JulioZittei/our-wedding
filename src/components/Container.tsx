import { ReactNode } from 'react';

import { ContainerCss } from '../styles/components/ContainerCss';
import { styled } from '../styles/stiches.config';

const ContainerRoot = styled('div', ContainerCss);

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <ContainerRoot>{children}</ContainerRoot>;
}
