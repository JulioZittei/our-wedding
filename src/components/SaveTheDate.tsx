import AddToAgenda from '../../public/images/add-to-agenda.svg';
import AddToGoogleAgenda from '../../public/images/add-to-google-agenda.svg';
import * as SaveTheDateCss from '../styles/components/SaveTheDateCss';
import { styled } from '../styles/stiches.config';
import { FcGoogle } from 'react-icons/fc';
import { FcCalendar } from 'react-icons/fc';
import Image from 'next/image';
import { Link } from './Link';

const SaveTheDateRoot = styled('section', SaveTheDateCss.Root);
const SaveTheDateContainer = styled('div', SaveTheDateCss.Container);
const SaveTheDateHeader = styled('h2', SaveTheDateCss.Header);
const SaveTheDateContent = styled('div', SaveTheDateCss.Content);
const SaveTheDateContentWrapper = styled('div', SaveTheDateCss.Wrapper);
const SaveTheDateTitle = styled('h3', SaveTheDateCss.Title);
const SaveTheDateSubTitle = styled('small', SaveTheDateCss.SubTitle);
const SaveTheDateCard = styled('div', SaveTheDateCss.Card);
const SaveTheDateLinkButton = styled(Link, SaveTheDateCss.LinkButton);

export function SaveTheDate() {
  return (
    <SaveTheDateRoot>
      <SaveTheDateContainer>
        <SaveTheDateHeader>Save The Date</SaveTheDateHeader>

        <SaveTheDateContent>
          <SaveTheDateTitle>
            <time dateTime="2022-11-26 17:30:00">26 de Novembro de 2022 às 15h30</time>
          </SaveTheDateTitle>
          <SaveTheDateSubTitle>- Convidamos você para celebrar este grande momento conosco -</SaveTheDateSubTitle>

          <SaveTheDateContentWrapper>
            <SaveTheDateCard>
              <Image
                src={AddToAgenda}
                width={150}
                height={150}
                objectFit="cover"
                alt="QR Code para adicionar o evento ao calendário do seu dispositivo"
              />
              <SaveTheDateLinkButton
                href="https://drive.google.com/uc?export=download&id=10Fk60pY2uETT6-sIskrQyok7KgyJsU6L"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcCalendar
                  style={{
                    marginRight: '.75rem',
                  }}
                />{' '}
                Adicionar à agenda
              </SaveTheDateLinkButton>
            </SaveTheDateCard>

            <SaveTheDateCard>
              <Image
                src={AddToGoogleAgenda}
                width={150}
                height={150}
                objectFit="cover"
                alt="QR Code para adicionar o evento ao calendário do seu dispositivo"
              />
              <SaveTheDateLinkButton
                href="https://calendar.google.com/event?action=TEMPLATE&tmeid=Xzg1MGo0YzlrNm9zNDRiOW82NTBqNmI5azZsMjRjYjlvNjhzMzRiYTM4OTEzY2NpNDg0cmthZGE1ODgganVsaW8ueml0dGVpOTZAbQ&tmsrc=julio.zittei96%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcGoogle
                  style={{
                    marginRight: '.75rem',
                  }}
                />{' '}
                Adicionar à agenda
              </SaveTheDateLinkButton>
            </SaveTheDateCard>
          </SaveTheDateContentWrapper>
        </SaveTheDateContent>
      </SaveTheDateContainer>
    </SaveTheDateRoot>
  );
}
