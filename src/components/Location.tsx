import OpenWithWaze from '../../public/images/open-with-waze.jpg';
import OpenWithMaps from '../../public/images/open-with-maps.jpg';
import * as LocationCss from '../styles/components/LocationCss';
import { styled } from '../styles/stiches.config';
import * as SiIcon from 'react-icons/si';
import Image from 'next/image';
import { Link } from './Link';
import dynamic from 'next/dynamic';
import useMatchMedia from '../hooks/useMatchMedia';
import { MapOptions } from 'leaflet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Root = styled('section', LocationCss.Root);
const Container = styled('div', LocationCss.Container);
const Header = styled('header', LocationCss.Header);
const Content = styled('div', LocationCss.Content);
const ContentWrapper = styled('div', LocationCss.Wrapper);
const Title = styled(motion.h3, LocationCss.Title);
const SubTitle = styled(motion.p, LocationCss.SubTitle);
const Card = styled(motion.div, LocationCss.Card);
const LinkButton = styled(Link, LocationCss.LinkButton);

const Map = dynamic<MapOptions>(() => import('./Map').then((module) => module.Map), { ssr: false });

export function Location(): JSX.Element {
  const matchedWidthMobile = useMatchMedia('max-width: 768px');
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

  return (
    <Root id="location" ref={ref}>
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
            Localização
          </motion.h2>
        </Header>

        <Content>
          <Title
            layout
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={defaultAnimationVariant}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
          >
            Buffet Pavaneli Eventos
          </Title>
          <SubTitle
            layout
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={defaultAnimationVariant}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            Rua Alvarenga, 1653 - Butantã, São Paulo - SP
          </SubTitle>

          <Map />

          <ContentWrapper>
            <Card
              layout
              initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
              animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
              variants={defaultAnimationVariant}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
            >
              {!matchedWidthMobile && (
                <div style={{ padding: '2px 2px 0 2px', background: '#fff' }}>
                  <Image
                    src={OpenWithWaze}
                    width={120}
                    height={120}
                    objectFit="fill"
                    placeholder="blur"
                    alt="QR Code para abrir a rota para o local do evento no aplicativo Waze"
                  />
                </div>
              )}
              <LinkButton
                href="https://ul.waze.com/ul?place=ChIJyTNyjaJXzpQR1oOeNHsly8c&ll=-23.56711700%2C-46.71195680&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiIcon.SiWaze /> Abrir no Waze
              </LinkButton>
            </Card>

            <Card
              layout
              initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
              animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
              variants={defaultAnimationVariant}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
            >
              {!matchedWidthMobile && (
                <div style={{ padding: '2px 2px 0 2px', background: '#fff' }}>
                  <Image
                    src={OpenWithMaps}
                    width={120}
                    height={120}
                    objectFit="fill"
                    placeholder="blur"
                    alt="QR Code para abrir a rota para o local do evento no aplicativo Maps do Google"
                  />
                </div>
              )}
              <LinkButton href="https://goo.gl/maps/cEZaB9HroXLhsrK28" target="_blank" rel="noopener noreferrer">
                <SiIcon.SiGooglemaps />
                Abrir no Maps
              </LinkButton>
            </Card>
          </ContentWrapper>
        </Content>
      </Container>
    </Root>
  );
}
