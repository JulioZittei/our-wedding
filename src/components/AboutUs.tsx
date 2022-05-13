import * as AboutUsCss from '../styles/components/AboutUsCss';
import NextImage from 'next/image';
import ElenImage from '../../public/images/elen.jpg';
import JulioImage from '../../public/images/julio.jpg';
import { styled } from '../styles/stiches.config';
import { Link } from './Link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Root = styled('section', AboutUsCss.Root);
const Container = styled('div', AboutUsCss.Container);
const Content = styled('div', AboutUsCss.Content);
const ContentBox = styled(motion.div, AboutUsCss.Box);
const ImageCircle = styled(Link, AboutUsCss.ImageCircle);
const ImageLayer = styled('div', AboutUsCss.ImageLayer);
const Image = styled(NextImage, AboutUsCss.Image);
const Header = styled('header', AboutUsCss.Header);
const ContentWrapper = styled('div', {});
const Title = styled('h3', AboutUsCss.Title);
const Paragraph = styled('p', AboutUsCss.Paragraph);

export function AboutUs() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, inView } = useInView();

  const defaultAnimationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contentAnimationVariantLeft = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0 },
  };

  const contentAnimationVariantRight = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0 },
  };

  const ringAnimationVariant = {
    hidden: { opacity: 0, rotate: 360, scale: 0 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  };

  useEffect(() => {
    if (inView && !shouldAnimate) {
      setShouldAnimate(!shouldAnimate);
    } else if (!inView && shouldAnimate) {
      setShouldAnimate(!shouldAnimate);
    }
  }, [inView, shouldAnimate]);

  return (
    <Root id="about-us" ref={ref}>
      <Container>
        <Header>
          <motion.h2
            layout
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={defaultAnimationVariant}
            transition={{
              duration: 0.6,
            }}
          >
            Sobre nós
          </motion.h2>
        </Header>
        <Content>
          <ContentBox
            layout
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={contentAnimationVariantLeft}
            transition={{
              duration: 0.6,
              bounce: 0.3,
            }}
          >
            <ImageCircle href="https://www.instagram.com/elensousasz/" target="_blank" rel="noopener noreferrer">
              <ImageLayer>
                <Image
                  width={80}
                  height={80}
                  layout="intrinsic"
                  src={ElenImage}
                  placeholder="blur"
                  alt="Foto da Élen sorrindo com a cabeça levemente inclinada para direita. Ela está vestida de rosa"
                />
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

          <motion.div
            layout
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={ringAnimationVariant}
            transition={{
              duration: 1,
            }}
          >
            <Image
              width={100}
              height={100}
              layout="intrinsic"
              src="/images/wedding-ring.png"
              alt="alianças de ouro entrelaçadas"
            />
          </motion.div>

          <ContentBox
            layout
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={contentAnimationVariantRight}
            transition={{
              duration: 0.6,
              bounce: 0.3,
            }}
          >
            <ImageCircle href="https://www.instagram.com/juliozittei/" target="_blank" rel="noopener noreferrer">
              <ImageLayer>
                <Image
                  width={80}
                  height={80}
                  layout="intrinsic"
                  src={JulioImage}
                  alt="Foto do Julio sorrindo com a cabeça inclinada para esquerda. Ele está de óculos e blazer marrom"
                />
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
