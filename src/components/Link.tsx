import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  href: string;
}

export function Link({ href, children, ...props }: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
