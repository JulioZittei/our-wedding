import * as AboutUsCss from '../styles/components/AboutUsCss';
import Image from 'next/image';
import ElenImage from '../../public/images/elen.jpg';
import JulioImage from '../../public/images/julio.jpg';
import { styled } from '../styles/stiches.config';

const Root = styled('section', AboutUsCss.Root);
const Container = styled('div', AboutUsCss.Container);
const Content = styled('div', AboutUsCss.Content);
const ContentBox = styled('div', AboutUsCss.Box);
const ImageCircle = styled('a', AboutUsCss.ImageCircle);
const ImageLayer = styled('div', AboutUsCss.ImageLayer);
const SimpleImage = styled(Image, AboutUsCss.Image);
const Header = styled('header', AboutUsCss.Header);
const ContentWrapper = styled('div', {});
const Title = styled('h3', AboutUsCss.Title);
const Paragraph = styled('p', AboutUsCss.Paragraph);

export function AboutUs() {
  return (
    <Root>
      <Container>
        <Header>
          <h2>Sobre nós</h2>
        </Header>
        <Content>
          <ContentBox>
            <ImageCircle href="/">
              <ImageLayer>
                <SimpleImage width={80} height={80} layout="intrinsic" src={ElenImage} placeholder="blur" />
              </ImageLayer>
            </ImageCircle>

            <ContentWrapper>
              <Title>Élen Sousa</Title>
              <Paragraph>
                Sou apaixonada por <strong>música</strong>, <strong>moda</strong>, <strong>decoração</strong> e{' '}
                <strong>viagem</strong>. Também adoro assistir <strong>filmes e séries</strong>, embora durmo bastante
                durante os filmes. Gosto muito de <strong>ler livros</strong> no meu tempo livre 📖📚
              </Paragraph>
            </ContentWrapper>
          </ContentBox>

          <SimpleImage width={100} height={100} layout="intrinsic" src="/images/wedding-ring.png" />

          <ContentBox>
            <ImageCircle href="/">
              <ImageLayer>
                <SimpleImage width={80} height={80} layout="intrinsic" src={JulioImage} />
              </ImageLayer>
            </ImageCircle>

            <ContentWrapper>
              <Title>Julio Zittei</Title>
              <Paragraph>
                Sou apaixonado por <strong>tecnologia</strong>, adoro assistir <strong>filmes e séries</strong>,
                principalmente as da <strong>MARVEL STUDIOS</strong>. Meu sangue é verde, sou{' '}
                <strong>Palmeirense</strong> e não perco um jogo do meu time do <strong>coração</strong> 💚🐷
              </Paragraph>
            </ContentWrapper>
          </ContentBox>
        </Content>
      </Container>
    </Root>
  );
}
