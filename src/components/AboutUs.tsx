import * as AboutUsCss from '../styles/components/AboutUsCss';
import Image from 'next/image';
import { styled } from '../styles/stiches.config';

const AboutUsRoot = styled('section', AboutUsCss.AboutUs);
const AboutUsContainer = styled('div', AboutUsCss.Container);
const AboutUsContent = styled('div', AboutUsCss.Content);
const AboutUsBox = styled('div', AboutUsCss.Box);
const AboutUsImageCircle = styled('a', AboutUsCss.ImageCircle);
const AboutUsImageLayer = styled('div', AboutUsCss.ImageLayer);
const AboutUsImage = styled(Image, AboutUsCss.Image);
const AboutUsHeader = styled('h2', AboutUsCss.Header);
const AboutUsTitle = styled('h3', AboutUsCss.Title);
const AboutUsParagraph = styled('p', AboutUsCss.Paragraph);
const AboutUsContentWrapper = styled('div', {});

export function AboutUs() {
  return (
    <AboutUsRoot>
      <AboutUsContainer>
        <AboutUsHeader>Sobre nós</AboutUsHeader>
        <AboutUsContent>
          <AboutUsBox>
            <AboutUsImageCircle href="/">
              <AboutUsImageLayer>
                <AboutUsImage width={128} height={128} layout="intrinsic" src="/images/elen.jpg" />
              </AboutUsImageLayer>
            </AboutUsImageCircle>

            <AboutUsContentWrapper>
              <AboutUsTitle>Élen Sousa</AboutUsTitle>
              <AboutUsParagraph>
                Sou apaixonada por <strong>música</strong>, <strong>moda</strong>, <strong>decoração</strong> e{' '}
                <strong>viagem</strong>. Também adoro assistir <strong>filmes e séries</strong>, embora durmo bastante
                durante os filmes. Gosto muito de <strong>ler livros</strong> no meu tempo livre 📖📚
              </AboutUsParagraph>
            </AboutUsContentWrapper>
          </AboutUsBox>

          <AboutUsImage width={128} height={128} layout="intrinsic" src="/images/wedding-ring.png" />

          <AboutUsBox>
            <AboutUsImageCircle href="/">
              <AboutUsImageLayer>
                <AboutUsImage width={128} height={128} layout="intrinsic" src="/images/julio.jpg" />
              </AboutUsImageLayer>
            </AboutUsImageCircle>

            <AboutUsContentWrapper>
              <AboutUsTitle>Julio Zittei</AboutUsTitle>
              <AboutUsParagraph>
                Sou apaixonado por <strong>tecnologia</strong>, adoro assistir <strong>filmes e séries</strong>,
                principalmente as da <strong>MARVEL STUDIOS</strong>. Meu sangue é verde, sou{' '}
                <strong>Palmeirense</strong> e não perco um jogo do meu time do <strong>coração</strong> 💚🐷
              </AboutUsParagraph>
            </AboutUsContentWrapper>
          </AboutUsBox>
        </AboutUsContent>
      </AboutUsContainer>
    </AboutUsRoot>
  );
}
