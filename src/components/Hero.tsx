import NextImage from 'next/image';
import HeroImage from '../../public/images/wedding.svg';
import * as HeroCss from '../styles/components/HeroCss';
import { styled } from '../styles/stiches.config';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Figure = styled(motion.figure, HeroCss.Root);
const Image = styled(NextImage, HeroCss.Image);
const Content = styled(motion.figcaption, HeroCss.Content);
const Container = styled('div', HeroCss.Container);
const Header = styled('header', HeroCss.Header);
const Title = styled('h1', HeroCss.Title);
const SubTitle = styled('h2', HeroCss.SubTitle);

export function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const defaultAnimationVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (inView && !shouldAnimate) {
      setShouldAnimate(!shouldAnimate);
    } else if (!inView && shouldAnimate) {
      setShouldAnimate(!shouldAnimate);
    }
  }, [inView, shouldAnimate]);

  return (
    <section id="home" ref={ref}>
      <Figure
        layout
        initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
        animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
        variants={defaultAnimationVariant}
        transition={{
          duration: 1,
        }}
      >
        <Image
          src={HeroImage}
          layout="intrinsic"
          width={1920}
          height={1080}
          objectFit="cover"
          priority
          alt="Ilustração de um noivo e sua noiva se abrançando com fogos de artificio ao fundo. O noivo está de smoking preto e a noiva de vestido branco segurando um ramo de flores com petalas verdes"
        />

        <Content
          layout
          initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
          animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
          variants={defaultAnimationVariant}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
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
