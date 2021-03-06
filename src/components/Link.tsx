import NextLink from 'next/link';
import React from 'react';

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, ...props }: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref shallow>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
