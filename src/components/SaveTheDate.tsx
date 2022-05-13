import AddToAgenda from '../../public/images/add-to-agenda.jpeg';
import AddToGoogleAgenda from '../../public/images/add-to-google-agenda.jpeg';
import DrawImage from '../../public/images/save-the-date.svg';
import useMatchMedia from '../hooks/useMatchMedia';
import Image from 'next/image';
import { styled } from '../styles/stiches.config';
import { FcGoogle } from 'react-icons/fc';
import { FcCalendar } from 'react-icons/fc';
import { Link } from './Link';
import * as SaveTheDateCss from '../styles/components/SaveTheDateCss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Root = styled('section', SaveTheDateCss.Root);
const Container = styled('div', SaveTheDateCss.Container);
const Header = styled('header', SaveTheDateCss.Header);
const Content = styled('div', SaveTheDateCss.Content);
const ContentWrapper = styled('div', SaveTheDateCss.Wrapper);
const Title = styled(motion.h3, SaveTheDateCss.Title);
const SubTitle = styled(motion.p, SaveTheDateCss.SubTitle);
const Card = styled(motion.div, SaveTheDateCss.Card);
const LinkButton = styled(Link, SaveTheDateCss.LinkButton);

export function SaveTheDate() {
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
    <Root id="save-the-date" ref={ref}>
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
            Save The Date
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
            <time dateTime="2022-11-26 15:30:00">26 de Novembro de 2022 às 15h30</time>
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
            - Convidamos você para celebrar este grande momento conosco -
          </SubTitle>

          <motion.div
            layout
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={defaultAnimationVariant}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            <Image
              src={DrawImage}
              width={744}
              height={450}
              objectFit="initial"
              alt="Ilustração de um calendário com eventos adicionados e um botão para adicionar um evento"
            />
          </motion.div>

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
                    src={AddToAgenda}
                    width={120}
                    height={120}
                    objectFit="fill"
                    placeholder="blur"
                    alt="QR Code para adicionar o evento ao calendário do seu dispositivo"
                  />
                </div>
              )}
              <LinkButton
                href="https://drive.google.com/uc?export=download&id=10Fk60pY2uETT6-sIskrQyok7KgyJsU6L"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcCalendar /> Adicionar à agenda
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
                    src={AddToGoogleAgenda}
                    width={120}
                    height={120}
                    objectFit="fill"
                    placeholder="blur"
                    alt="QR Code para adicionar o evento ao Google Agenda"
                  />
                </div>
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
