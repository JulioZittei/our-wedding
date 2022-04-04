import { styled } from '@stitches/react';
import * as LogoCss from '../styles/components/LogoCss';

const StyledContainer = styled('div', LogoCss.Container);
const StyledBoxName = styled('div', LogoCss.BoxName);
const StyledFirstName = styled('span', LogoCss.FirstName);
const StyledLastName = styled('span', LogoCss.LastName);

const Container = StyledContainer;
const BoxName = StyledBoxName;
const FirstName = StyledFirstName;
const LastName = StyledLastName;

export function Logo() {
  return (
    <Container>
      <BoxName>
        <FirstName>Élen</FirstName>
        <LastName
          css={{
            textAlign: 'right',
          }}
        >
          Sousa
        </LastName>
      </BoxName>

      <div className={LogoCss.Separator()}>&</div>

      <BoxName>
        <FirstName>Julio</FirstName>
        <LastName
          css={{
            textAlign: 'left',
          }}
        >
          Zittei
        </LastName>
      </BoxName>
    </Container>
  );
}
