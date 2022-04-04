import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { styled } from '@stitches/react';
import * as NavMenuCss from '../styles/components/NavigationMenuCss';

const StyledNavMenu = styled(NavigationMenuPrimitive.Root, NavMenuCss.NavMenu);
const StyledNavMenuContainer = styled('div', NavMenuCss.NavMenuContainer);
const StyledNavMenuList = styled(NavigationMenuPrimitive.List, NavMenuCss.NavMenuList);
const StyledNavMenuItem = styled(NavigationMenuPrimitive.Item, NavMenuCss.NavMenuItem);
const StyledNavMenuLink = styled(NavigationMenuPrimitive.Link, NavMenuCss.NavMenuLink);

const NavMenu = StyledNavMenu;
const NavMenuContainer = StyledNavMenuContainer;
const NavMenuList = StyledNavMenuList;
const NavMenuItem = StyledNavMenuItem;
const NavMenuLink = StyledNavMenuLink;

type NavigationProps = React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {};

export function NavigationMenu({}: NavigationProps): JSX.Element {
  return (
    <NavMenu orientation="horizontal">
      <NavMenuContainer>
        <NavMenuList>
          <NavMenuItem>
            <NavMenuLink href="/">Home</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/">About</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/">The Wedding</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/">Save The Date</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/">Gifts</NavMenuLink>
          </NavMenuItem>
        </NavMenuList>
      </NavMenuContainer>
    </NavMenu>
  );
}