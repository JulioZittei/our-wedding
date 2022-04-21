import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { styled } from '../styles/stiches.config';
import * as NavMenuCss from '../styles/components/NavigationMenuCss';

const StyledNavMenu = styled(NavigationMenuPrimitive.Root, NavMenuCss.Root);
const StyledNavMenuContainer = styled('div', NavMenuCss.NavMenuContainer);
const StyledNavMenuList = styled(NavigationMenuPrimitive.List, NavMenuCss.NavMenuList);
const StyledNavMenuItem = styled(NavigationMenuPrimitive.Item, NavMenuCss.NavMenuItem);
const StyledNavMenuLink = styled(NavigationMenuPrimitive.Link, NavMenuCss.NavMenuLink);

const NavMenuRoot = StyledNavMenu;
const NavMenuContainer = StyledNavMenuContainer;
const NavMenuList = StyledNavMenuList;
const NavMenuItem = StyledNavMenuItem;
const NavMenuLink = StyledNavMenuLink;
const NavMenuIndicator = NavigationMenuPrimitive.Indicator;

type NavigationProps = React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {};

export function NavigationMenu({}: NavigationProps): JSX.Element {
  return (
    <NavMenuRoot orientation="horizontal">
      <NavMenuContainer>
        <NavMenuList>
          <NavMenuItem>
            <NavMenuLink href="/">Home</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/">Sobre nós</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/">Save The Date</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/">The Wedding</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/">Gifts</NavMenuLink>
          </NavMenuItem>
        </NavMenuList>
      </NavMenuContainer>
    </NavMenuRoot>
  );
}
