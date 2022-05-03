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
import { useState } from 'react';
import { clearTimeout } from 'timers';

const Root = styled('section', GiftsCss.Root);
const Container = styled('div', GiftsCss.Container);
const Header = styled('header', GiftsCss.Header);
const Content = styled('div', GiftsCss.Content);
const ContentWrapper = styled('div', GiftsCss.Wrapper);
const Title = styled('h3', GiftsCss.Title);
const SubTitle = styled('p', GiftsCss.SubTitle);
const Card = styled('div', GiftsCss.Card);
const LinkButton = styled(Link, GiftsCss.LinkButton);
const Button = styled('button', GiftsCss.LinkButton);

interface GiftsProps {
  pixCode: string;
}

export function Gifts({ pixCode }: GiftsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipBoard = () => {
    setCopied(true);

    const sleep = setTimeout(() => {
      setCopied(false);
    }, 5000);

    return () => clearTimeout(sleep);
  };

  return (
    <Root>
      <Container>
        <Header>
          <h2>Presentes</h2>
        </Header>

        <Content>
          <Image
            src={DrawImage}
            width={744}
            height={450}
            objectFit="initial"
            priority
            alt="Ilustração de uma caixa grande de presente com um casal próximo da caixa com balões flutuando"
          />
          <ContentWrapper>
            <Card>
              <ImGift />
              <Title>Lista de Presentes</Title>
              <LinkButton href="http://finalfeliz.de/elenejulio" target="_blank" rel="noopener noreferrer">
                <ImLink />
                Acessar lista
              </LinkButton>
            </Card>

            <Card>
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
