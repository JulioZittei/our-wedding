import { styled } from '../styles/stiches.config';
import * as LogoCss from '../styles/components/LogoCss';

const Root = styled('div', LogoCss.Root);
const BoxName = styled('div', LogoCss.BoxName);
const FirstName = styled('span', LogoCss.FirstName);
const LastName = styled('span', LogoCss.LastName);

export function Logo() {
  return (
    <Root>
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
    </Root>
  );
}
