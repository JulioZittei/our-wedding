import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  href: string;
  target?: string;
  rel?: string;
}

export function Link({ href, target, rel, children, ...props }: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <a target={target} rel={rel} {...props}>
        {children}
      </a>
    </NextLink>
  );
}
