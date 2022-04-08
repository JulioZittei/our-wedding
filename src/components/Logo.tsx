import { styled } from '../styles/stiches.config';
import * as LogoCss from '../styles/components/LogoCss';

const StyledRoot = styled('div', LogoCss.Root);
const StyledBoxName = styled('div', LogoCss.BoxName);
const StyledFirstName = styled('span', LogoCss.FirstName);
const StyledLastName = styled('span', LogoCss.LastName);

const LogoRoot = StyledRoot;
const BoxName = StyledBoxName;
const FirstName = StyledFirstName;
const LastName = StyledLastName;

export function Logo() {
  return (
    <LogoRoot>
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
    </LogoRoot>
  );
}
