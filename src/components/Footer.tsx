import { styled } from '../styles/stiches.config';
import * as FooterCss from '../styles/components/FooterCss';
import { Link } from './Link';

const Root = styled('footer', FooterCss.Root);
const Container = styled('div', FooterCss.Container);

export function Footer() {
  return (
    <Root>
      <Container css={{ alignItems: 'center', justifyContent: 'center' }}>
        <span>
          Developed with ❤️ &nbsp;by{' '}
          <Link href="https://github.com/juliozittei" target="_blank">
            Julio Zittei
          </Link>
        </span>
      </Container>
    </Root>
  );
}
