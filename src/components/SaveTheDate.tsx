import AddToAgenda from '../../public/images/add-to-agenda.jpeg';
import AddToGoogleAgenda from '../../public/images/add-to-google-agenda.jpeg';
import DrawImage from '../../public/images/save-the-date.svg';
import * as SaveTheDateCss from '../styles/components/SaveTheDateCss';
import { styled } from '../styles/stiches.config';
import { FcGoogle } from 'react-icons/fc';
import { FcCalendar } from 'react-icons/fc';
import Image from 'next/image';
import { Link } from './Link';
import useMatchMedia from '../hooks/useMatchMedia';

const Root = styled('section', SaveTheDateCss.Root);
const Container = styled('div', SaveTheDateCss.Container);
const Header = styled('header', SaveTheDateCss.Header);
const Content = styled('div', SaveTheDateCss.Content);
const ContentWrapper = styled('div', SaveTheDateCss.Wrapper);
const Title = styled('h3', SaveTheDateCss.Title);
const SubTitle = styled('small', SaveTheDateCss.SubTitle);
const Card = styled('div', SaveTheDateCss.Card);
const LinkButton = styled(Link, SaveTheDateCss.LinkButton);

export function SaveTheDate() {
  const matchedWidthMobile = useMatchMedia('max-width: 768px');

  return (
    <Root>
      <Container>
        <Header>
          <h2>Save The Date</h2>
        </Header>

        <Content>
          <Title>
            <time dateTime="2022-11-26 17:30:00">26 de Novembro de 2022 às 15h30</time>
          </Title>
          <SubTitle>- Convidamos você para celebrar este grande momento conosco -</SubTitle>

          <Image
            src={DrawImage}
            width={744}
            height={450}
            objectFit="initial"
            alt="Ilustração de um calendário com eventos adicionados e um botão para adicionar um evento"
          />

          <ContentWrapper>
            <Card>
              {!matchedWidthMobile && (
                <Image
                  src={AddToAgenda}
                  width={120}
                  height={120}
                  objectFit="cover"
                  placeholder="blur"
                  alt="QR Code para adicionar o evento ao calendário do seu dispositivo"
                />
              )}
              <LinkButton
                href="https://drive.google.com/uc?export=download&id=10Fk60pY2uETT6-sIskrQyok7KgyJsU6L"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcCalendar /> Adicionar à agenda
              </LinkButton>
            </Card>

            <Card>
              {!matchedWidthMobile && (
                <Image
                  src={AddToGoogleAgenda}
                  width={120}
                  height={120}
                  objectFit="cover"
                  placeholder="blur"
                  alt="QR Code para adicionar o evento ao Google Agenda"
                />
              )}
              <LinkButton
                href="https://calendar.google.com/event?action=TEMPLATE&tmeid=Xzg1MGo0YzlrNm9zNDRiOW82NTBqNmI5azZsMjRjYjlvNjhzMzRiYTM4OTEzY2NpNDg0cmthZGE1ODgganVsaW8ueml0dGVpOTZAbQ&tmsrc=julio.zittei96%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcGoogle />
                Adicionar à agenda
              </LinkButton>
            </Card>
          </ContentWrapper>
        </Content>
      </Container>
    </Root>
  );
}
