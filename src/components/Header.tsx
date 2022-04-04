import { styled } from '@stitches/react';
import { ReactNode } from 'react';
import { HeaderCss } from '../styles/components/HeaderCss';

const StyledHeader = styled('header', HeaderCss);

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return <StyledHeader>{children}</StyledHeader>;
}
