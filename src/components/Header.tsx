import { styled } from '../styles/stiches.config';
import { ReactNode } from 'react';
import { HeaderCss } from '../styles/components/HeaderCss';

const HeaderRoot = styled('header', HeaderCss);

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return <HeaderRoot>{children}</HeaderRoot>;
}
