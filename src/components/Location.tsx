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

const Root = styled('section', LocationCss.Root);
const Container = styled('div', LocationCss.Container);
const Header = styled('header', LocationCss.Header);
const Content = styled('div', LocationCss.Content);
const ContentWrapper = styled('div', LocationCss.Wrapper);
const Title = styled('h3', LocationCss.Title);
const SubTitle = styled('p', LocationCss.SubTitle);
const Card = styled('div', LocationCss.Card);
const LinkButton = styled(Link, LocationCss.LinkButton);

const Map = dynamic<MapOptions>(() => import('./Map').then((module) => module.Map), { ssr: false });

export function Location(): JSX.Element {
  const matchedWidthMobile = useMatchMedia('max-width: 768px');

  return (
    <Root id="location">
      <Container>
        <Header>
          <h2>Localização</h2>
        </Header>

        <Content>
          <Title>Buffet Pavaneli Eventos</Title>
          <SubTitle>Rua Alvarenga, 1653 - Butantã, São Paulo - SP</SubTitle>

          <Map />

          <ContentWrapper>
            <Card>
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

            <Card>
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
