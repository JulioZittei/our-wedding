import Image from 'next/image';
import HeroImage from '../../public/images/noivos-hero.jpeg';
import * as HeroCss from '../styles/components/HeroCss';
import { styled } from '../styles/stiches.config';

const Root = styled('section', HeroCss.Root);
const SimpleImage = styled(Image, HeroCss.Image);
const Content = styled('div', HeroCss.Content);
const Header = styled('header', HeroCss.Header);
const Title = styled('h1', HeroCss.Title);
const SubTitle = styled('h2', HeroCss.SubTitle);

export function Hero() {
  return (
    <Root>
      <SimpleImage
        src={HeroImage}
        layout="intrinsic"
        width={6000}
        height={2800}
        objectFit="cover"
        priority
        placeholder="blur"
        alt="Élen e Julio estão se beijando sentados num banco de parque em formato octagonal, no centro do octagono, atrás do casal tem uma árvore e flores vermelhas. Ao fundo algumas pequenas mesas de restaurante."
      />
      <Content>
        <Header>
          <Title>Élen & Julio</Title>
          <SubTitle>
            <time dateTime="2022-11-26">26/11/2022</time>
          </SubTitle>
        </Header>
      </Content>
    </Root>
  );
}
