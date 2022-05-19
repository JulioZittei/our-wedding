import { styled } from '../styles/stiches.config';
import * as FooterCss from '../styles/components/FooterCss';
import { Link as SimpleLink } from './Link';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { NavData } from './NavData';
import * as MdIcons from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';

const Root = styled('footer', FooterCss.Root);
const MainFooter = styled('section', FooterCss.MainFooter);
const SecondaryFooter = styled('section', FooterCss.SecondaryFooter);
const Content = styled('article', FooterCss.Content);
const Title = styled('article', FooterCss.Title);
const Separator = styled(SeparatorPrimitive.Root, FooterCss.Separator);
const Paragraph = styled('p', FooterCss.Paragraph);
const Link = styled(SimpleLink, FooterCss.Link);

export function Footer() {
  return (
    <Root>
      <MainFooter>
        <Content>
          <Title>Sobre:</Title>
          <Separator decorative orientation="horizontal" />
          <Paragraph>
            Este é um site de casamento desenvolvido especialmente para Élen e Julio. Contribua como puder para ajudar
            na construcão de uma nova história.
          </Paragraph>
          <Link href="/termos">Termos de uso</Link>
        </Content>

        <Content>
          <Title>Mais:</Title>
          <Separator decorative orientation="horizontal" />
          {NavData.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                {item.title}
              </Link>
            );
          })}
        </Content>

        <Content>
          <Title>Contato:</Title>
          <Separator decorative orientation="horizontal" />
          <Paragraph>
            <MdIcons.MdEmail /> <strong>Email:</strong> <br /> contato@elenejulio.com
          </Paragraph>
          <Paragraph>
            <MdIcons.MdLocationOn /> <strong>Endereço:</strong> <br /> São Paulo, SP/Brasil
          </Paragraph>
        </Content>

        <Content>
          <Title>Social:</Title>
          <Separator decorative orientation="horizontal" />
          <Link href="https://www.instagram.com/elensousasz/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
            @elensousasz
          </Link>
          <Link href="https://www.instagram.com/juliozittei/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
            @juliozittei
          </Link>
        </Content>
      </MainFooter>

      <SecondaryFooter>
        <p>
          Developed with ❤️ &nbsp;by{' '}
          <SimpleLink href="https://github.com/juliozittei" target="_blank" rel="noopener noreferrer">
            Julio Zittei
          </SimpleLink>
        </p>
      </SecondaryFooter>
    </Root>
  );
}
