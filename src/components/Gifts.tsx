import QRCodePix from '../../public/images/qr-code-pix.png';
import Image from 'next/image';
import DrawImage from '../../public/images/gifts.svg';
import * as GiftsCss from '../styles/components/GiftsCss';
import { styled } from '../styles/stiches.config';
import { ImGift } from 'react-icons/im';
import { ImCopy } from 'react-icons/im';
import { ImLink } from 'react-icons/im';
import { ImCheckmark2 } from 'react-icons/im';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from './Link';
import { clearTimeout } from 'timers';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Root = styled('section', GiftsCss.Root);
const Container = styled('div', GiftsCss.Container);
const Header = styled('header', GiftsCss.Header);
const Content = styled('div', GiftsCss.Content);
const ContentWrapper = styled('div', GiftsCss.Wrapper);
const Title = styled('h3', GiftsCss.Title);
const SubTitle = styled('p', GiftsCss.SubTitle);
const Card = styled(motion.div, GiftsCss.Card);
const LinkButton = styled(Link, GiftsCss.LinkButton);
const Button = styled('button', GiftsCss.LinkButton);

interface GiftsProps {
  pixCode: string;
}

export function Gifts({ pixCode }: GiftsProps) {
  const [copied, setCopied] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const defaultAnimationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView && !shouldAnimate) {
      setShouldAnimate(!shouldAnimate);
    } else if (!inView && shouldAnimate) {
      setShouldAnimate(!shouldAnimate);
    }
  }, [inView, shouldAnimate]);

  const handleCopyToClipBoard = () => {
    setCopied(true);

    const sleep = setTimeout(() => {
      setCopied(false);
    }, 5000);

    return () => clearTimeout(sleep);
  };

  return (
    <Root id="gifts" ref={ref}>
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
            Presentes
          </motion.h2>
        </Header>

        <Content>
          <motion.div
            layout
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={defaultAnimationVariant}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
          >
            <Image
              src={DrawImage}
              width={744}
              height={450}
              objectFit="initial"
              priority
              alt="Ilustração de uma caixa grande de presente com um casal próximo da caixa com balões flutuando"
            />
          </motion.div>
          <ContentWrapper>
            <Card
              layout
              initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
              animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
              variants={defaultAnimationVariant}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
            >
              <ImGift />
              <Title>Lista de Presentes</Title>
              <LinkButton href="http://finalfeliz.de/elenejulio" target="_blank" rel="noopener noreferrer">
                <ImLink />
                Acessar lista
              </LinkButton>
            </Card>

            <Card
              layout
              initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
              animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
              variants={defaultAnimationVariant}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
            >
              <Image
                src={QRCodePix}
                width={120}
                height={120}
                objectFit="cover"
                placeholder="blur"
                alt="QR Code para transferência via PIX"
              />
              <Title>Transferência PIX</Title>
              <CopyToClipboard text={pixCode} onCopy={handleCopyToClipBoard}>
                <Button>
                  {copied ? <ImCheckmark2 /> : <ImCopy />}
                  {copied ? 'Copiado' : 'Copiar código'}
                </Button>
              </CopyToClipboard>
            </Card>
          </ContentWrapper>
        </Content>
      </Container>
    </Root>
  );
}
