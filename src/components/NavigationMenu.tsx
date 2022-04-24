import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { styled } from '../styles/stiches.config';
import * as NavMenuCss from '../styles/components/NavigationMenuCss';

const Root = styled(NavigationMenuPrimitive.Root, NavMenuCss.Root);
const Container = styled('div', NavMenuCss.NavMenuContainer);
const List = styled(NavigationMenuPrimitive.List, NavMenuCss.NavMenuList);
const Item = styled(NavigationMenuPrimitive.Item, NavMenuCss.NavMenuItem);
const Link = styled(NavigationMenuPrimitive.Link, NavMenuCss.NavMenuLink);

type NavigationProps = React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {};

export function NavigationMenu({}: NavigationProps): JSX.Element {
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
          <Item>
            <Link href="/">The Wedding</Link>
          </Item>
          <Item>
            <Link href="/">Gifts</Link>
          </Item>
        </List>
      </Container>
    </Root>
  );
}
