import { styled } from '../styles/stiches.config';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import useMatchMedia from '../hooks/useMatchMedia';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as NavMenuCss from '../styles/components/NavigationMenuCss';
import { Link } from './Link';
import { HiOutlineSun } from 'react-icons/hi';
import { BiMenuAltLeft } from 'react-icons/bi';
import { NavData } from './NavData';

const Root = styled(NavigationMenuPrimitive.Root, NavMenuCss.Root);
const Container = styled('div', NavMenuCss.Container);
const List = styled(NavigationMenuPrimitive.List, NavMenuCss.List);
const Item = styled(NavigationMenuPrimitive.Item, NavMenuCss.Item);
const LinkPrimitive = styled(NavigationMenuPrimitive.Link, NavMenuCss.Link);
const Button = styled('button', NavMenuCss.Button);

const MobileList = styled(NavigationMenuPrimitive.List, NavMenuCss.MobileList);
const MobileItem = styled(NavigationMenuPrimitive.Item, NavMenuCss.MobileItem);
const MobileLinkPrimitive = styled(NavigationMenuPrimitive.Link, NavMenuCss.MobileLink);

type NavigationProps = React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {};

export function NavigationMenu({}: NavigationProps): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const matchedWidthMobile = useMatchMedia('max-width: 768px');

  useEffect(() => {
    if (!matchedWidthMobile) setMobileMenuIsOpen(false);
    setMounted(true);
  }, [matchedWidthMobile]);

  if (!mounted) return <></>;

  const handleToggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(targetTheme);
  };

  const handleToggleMobileNavMenu = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

  return (
    <Root>
      <Container direction="row" alignItems="center" justifyContent="space-between">
        <List>
          {matchedWidthMobile && (
            <Item>
              <Button onClick={handleToggleMobileNavMenu}>
                <BiMenuAltLeft />
              </Button>
            </Item>
          )}

          {!matchedWidthMobile &&
            NavData.map((item, index) => {
              return (
                <Item key={index}>
                  <LinkPrimitive asChild>
                    <Link href={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </LinkPrimitive>
                </Item>
              );
            })}
        </List>

        <List>
          <Item>
            <Button onClick={handleToggleTheme}>
              <HiOutlineSun />
            </Button>
          </Item>
        </List>
      </Container>

      {mobileMenuIsOpen && (
        // <Container direction="column" alignItems="stretch">
        <MobileList onClick={handleToggleMobileNavMenu}>
          {NavData.map((item, index) => {
            return (
              <MobileItem key={index}>
                <MobileLinkPrimitive asChild>
                  <Link href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </MobileLinkPrimitive>
              </MobileItem>
            );
          })}
        </MobileList>
        // </Container>
      )}
    </Root>
  );
}
