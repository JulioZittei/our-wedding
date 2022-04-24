import { styled } from '../styles/stiches.config';
import { ReactNode } from 'react';
import { HeaderCss } from '../styles/components/HeaderCss';

const Root = styled('header', HeaderCss);

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return <Root>{children}</Root>;
}
