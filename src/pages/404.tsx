import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import NotFoundImage from '../../public/images/not-found.svg';
import { Link } from '../components/Link';
import * as NotFoundCss from '../styles/pages/404Css';
import { styled } from '../styles/stiches.config';

const Root = styled('section', NotFoundCss.Root);
const Image = styled(NextImage, NotFoundCss.Image);
const Container = styled(motion.div, NotFoundCss.Container);
const Content = styled('article', NotFoundCss.Content);
const Button = styled(Link, NotFoundCss.LinkButton);

export default function NotFound(): JSX.Element {
  const defaultAnimationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Root>
      <Container
        layout
        initial={`hidden}`}
        animate={`visible`}
        variants={defaultAnimationVariant}
        transition={{
          duration: 0.6,
        }}
      >
        <Image
          src={NotFoundImage}
          layout="intrinsic"
          width={1920}
          height={1080}
          objectFit="contain"
          priority
          alt="Ilustração de uma paisagem com sol, nuvens, montanhas e em destaque o número 404."
        />
      </Container>

      <Content>
        <motion.h1
          layout
          initial={`hidden}`}
          animate={`visible`}
          variants={defaultAnimationVariant}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
        >
          Ooops. Conteúdo indisponível :/
        </motion.h1>
        <motion.p
          layout
          initial={`hidden}`}
          animate={`visible`}
          variants={defaultAnimationVariant}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
        >
          Sentimos muito, mas o conteúdo que você tentou acessar não existe, está indisponível no momento ou foi
          removido :/
        </motion.p>

        <motion.div
          layout
          initial={`hidden}`}
          animate={`visible`}
          variants={defaultAnimationVariant}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
        >
          <Button href="/#home">Continue navegando</Button>
        </motion.div>
      </Content>
    </Root>
  );
}
