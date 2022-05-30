import { styled } from '../styles/stiches.config';
import * as OptoutCss from '../styles/components/OptoutCss';
import { Link } from './Link';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { BiCalendarCheck } from 'react-icons/bi';

const Root = styled('section', OptoutCss.Root);
const Container = styled('div', OptoutCss.Container);
const Header = styled('header', OptoutCss.Header);
const Content = styled('div', OptoutCss.Content);
const ContentWrapper = styled('div', OptoutCss.Wrapper);
const Title = styled('h3', OptoutCss.Title);
const Card = styled('div', OptoutCss.Card);
const LinkButton = styled(Link, OptoutCss.LinkButton);

export function Optout() {
  return (
    <Root id="attendance-confirmation">
      <Container>
        <Header>
          <h2>Confirme sua presença no casamento agora mesmo</h2>
        </Header>

        <Content>
          <Title>É rápido, simples e fácil!</Title>

          <ContentWrapper>
            <Card>
              <LinkButton href="/confirmacao-presenca">
                <BiCalendarCheck />
                Quero confirmar
              </LinkButton>
            </Card>
          </ContentWrapper>
        </Content>
      </Container>
    </Root>
  );
}
