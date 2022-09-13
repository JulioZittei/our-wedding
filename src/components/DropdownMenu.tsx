import React from 'react';
import { styled } from '../styles/stiches.config';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as DropdownMenuCss from '../styles/components/DropdownMenuCss';
import { BiMenuAltLeft } from 'react-icons/bi';
import * as LinkComponent from './Link';
import { NavData } from './NavData';

export const Root = styled(DropdownMenuPrimitive.Root, DropdownMenuCss.Root);
export const Trigger = styled(DropdownMenuPrimitive.Trigger, DropdownMenuCss.Trigger);
export const Content = styled(DropdownMenuPrimitive.Content, DropdownMenuCss.Content);
export const Item = styled(DropdownMenuPrimitive.Item, DropdownMenuCss.Item);
export const Arrow = styled(DropdownMenuPrimitive.Arrow, DropdownMenuCss.Arrow);
export const Button = styled('button', DropdownMenuCss.Button);
export const Link = styled(LinkComponent.Link, DropdownMenuCss.Link);

export function DropdownMenu() {
  return (
    <Root>
      <Trigger asChild>
        <Button
          aria-label="Acesso ao menu de navegação"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <BiMenuAltLeft />
        </Button>
      </Trigger>

      <Content sideOffset={5}>
        {NavData.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <Item>
                {item.icon}
                <span>{item.title}</span>
              </Item>
            </Link>
          );
        })}
        <Arrow offset={12} />
      </Content>
    </Root>
  );
}
