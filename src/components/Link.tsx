import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  href: string;
  target?: string;
  rel?: string;
  tabIndex?: number | undefined;
}

export function Link({ href, target, rel, tabIndex, children, ...props }: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <a target={target} rel={rel} tabIndex={tabIndex} {...props}>
        {children}
      </a>
    </NextLink>
  );
}
