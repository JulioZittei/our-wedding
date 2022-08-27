import { motion } from 'framer-motion';
import Head from 'next/head';
import NextImage from 'next/image';
import { GetStaticPropsContext, NextApiRequest, NextApiResponse } from 'next/types';
import NotFoundImage from '../../public/images/not-found.svg';
import { Link } from '../components/Link';
import { Optout } from '../components/Optout';
import * as NotFoundCss from '../styles/pages/404Css';
import { styled } from '../styles/stiches.config';

const Root = styled('section', NotFoundCss.Root);
const Content = styled('article', NotFoundCss.Content);
const Button = styled(Link, NotFoundCss.LinkButton);
const ErrorCode = styled(motion.div, {
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize96',
  color: '$mauve11',
});

export default function NotFound(): JSX.Element {
  const defaultAnimationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <main>
        <Root>
          <Head>
            <title>❤️ Página não encontrada❤️ </title>
          </Head>

          <Content>
            <ErrorCode
              layout
              initial={`hidden}`}
              animate={`visible`}
              variants={defaultAnimationVariant}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
            >
              404
            </ErrorCode>
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
      </main>
      <Optout />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext, req: NextApiRequest, res: NextApiResponse) {
  return {
    props: {},
  };
}
