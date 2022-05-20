import { styled } from '../styles/stiches.config';
import * as LogoCss from '../styles/components/LogoCss';
import { Link } from './Link';

const Root = styled(Link, LogoCss.Root);
const ContentWrapper = styled('div', LogoCss.ContentWrapper);
const Title = styled('span', LogoCss.Title);
const Separator = styled('span', LogoCss.Separator);
const SubTitle = styled('span', LogoCss.SubTitle);

export function Logo() {
  return (
    <Root href="/">
      <ContentWrapper>
        <Title>Élen</Title>
        <SubTitle align="right">Sousa</SubTitle>
      </ContentWrapper>

      <Separator>&</Separator>

      <ContentWrapper>
        <Title>Julio</Title>
        <SubTitle align="left">Zittei</SubTitle>
      </ContentWrapper>
    </Root>
  );
}
