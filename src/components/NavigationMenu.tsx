/* eslint-disable react/display-name */
import { styled } from '../styles/stiches.config';
import { useTheme } from 'next-themes';
import { FormEvent, useEffect, useState } from 'react';
import { HiOutlineSun } from 'react-icons/hi';
import { NavData } from './NavData';
import { DropdownMenu } from './DropdownMenu';
import NextLink from 'next/link';
import useMatchMedia from '../hooks/useMatchMedia';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as NavMenuCss from '../styles/components/NavigationMenuCss';

const Root = styled(NavigationMenuPrimitive.Root, NavMenuCss.Root);
const Container = styled('div', NavMenuCss.Container);
const List = styled(NavigationMenuPrimitive.List, NavMenuCss.List);
const Item = styled(NavigationMenuPrimitive.Item, NavMenuCss.Item);
const Link = styled(NavigationMenuPrimitive.Link, NavMenuCss.Link);
const Button = styled('button', NavMenuCss.Button);

type NavigationProps = React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {};

export function NavigationMenu({}: NavigationProps): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const matchedWidthMobile = useMatchMedia('max-width: 768px');

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  const handleToggleTheme = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(targetTheme);
  };

  return (
    <Root>
      <Container>
        <List>
          {matchedWidthMobile && (
            <Item>
              <DropdownMenu />
            </Item>
          )}

          {!matchedWidthMobile &&
            NavData.map((item, index) => {
              return (
                <Item key={index}>
                  <NextLink href={item.path} passHref>
                    <Link>
                      <span>{item.title}</span>
                    </Link>
                  </NextLink>
                </Item>
              );
            })}

          <Item>
            <Button onClick={handleToggleTheme} aria-label="Alternar entre o tema light e dark">
              <HiOutlineSun />
            </Button>
          </Item>
        </List>
      </Container>
    </Root>
  );
}
