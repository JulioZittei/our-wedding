import { styled } from '../styles/stiches.config';
import * as HeaderCss from '../styles/components/HeaderCss';
import { NavigationMenu } from './NavigationMenu';
import { Logo } from './Logo';

const Root = styled('header', HeaderCss.Root);
const Container = styled('div', HeaderCss.Container);

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <Root>
      <Container css={{ alignItems: 'center', justifyContent: 'center' }}>
        <Logo />
      </Container>
      <NavigationMenu />
    </Root>
  );
}
