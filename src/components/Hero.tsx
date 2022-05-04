import Image from 'next/image';
import HeroImage from '../../public/images/wedding.svg';
import * as HeroCss from '../styles/components/HeroCss';
import { styled } from '../styles/stiches.config';

const Figure = styled('figure', HeroCss.Root);
const SimpleImage = styled(Image, HeroCss.Image);
const Content = styled('figcaption', HeroCss.Content);
const Container = styled('div', HeroCss.Container);
const Header = styled('header', HeroCss.Header);
const Title = styled('h1', HeroCss.Title);
const SubTitle = styled('h2', HeroCss.SubTitle);

export function Hero() {
  return (
    <section id="home">
      <Figure>
        <SimpleImage
          src={HeroImage}
          layout="intrinsic"
          width={1920}
          height={1080}
          objectFit="cover"
          priority
          alt="Ilustração de um noivo e sua noiva se abrançando com fogos de artificio ao fundo. O noivo está de smoking preto e a noiva de vestido branco segurando um ramo de flores com petalas verdes"
        />

        <Content>
          <Container>
            <Header>
              <Title>
                Bem-vindo <br /> <strong>ao nosso site</strong>
              </Title>
              <SubTitle>www.elenejulio.com</SubTitle>
            </Header>
          </Container>
        </Content>
      </Figure>
    </section>
  );
}
