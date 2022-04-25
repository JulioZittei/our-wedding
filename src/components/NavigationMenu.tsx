import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { styled } from '../styles/stiches.config';
import * as NavMenuCss from '../styles/components/NavigationMenuCss';
import { HiOutlineSun } from 'react-icons/hi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  return (
    <Root orientation="horizontal">
      <Container>
        <List>
          <Item>
            <Link href="/">Home</Link>
          </Item>
          <Item>
            <Link href="/">Sobre nós</Link>
          </Item>
          <Item>
            <Link href="/">Save The Date</Link>
          </Item>
        </List>

        <List>
          <Item>
            <Button onClick={toggleTheme}>
              <HiOutlineSun />
            </Button>
          </Item>
        </List>
      </Container>
    </Root>
  );
}
