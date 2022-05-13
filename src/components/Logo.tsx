import { styled } from '../styles/stiches.config';
import * as LogoCss from '../styles/components/LogoCss';
import { Link } from './Link';
import { motion } from 'framer-motion';

const Root = styled(Link, LogoCss.Root);
const ContentWrapper = styled(motion.div, LogoCss.ContentWrapper);
const Title = styled('span', LogoCss.Title);
const Separator = styled(motion.span, LogoCss.Separator);
const SubTitle = styled('span', LogoCss.SubTitle);

export function Logo() {
  const defaultAnimationVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <Root href="/">
      <ContentWrapper
        layout
        initial={`hidden`}
        animate={`visible`}
        variants={defaultAnimationVariant}
        transition={{
          duration: 0.6,
        }}
      >
        <Title>Élen</Title>
        <SubTitle align="right">Sousa</SubTitle>
      </ContentWrapper>

      <Separator
        layout
        initial={`hidden`}
        animate={`visible`}
        variants={defaultAnimationVariant}
        transition={{
          duration: 0.6,
        }}
      >
        &
      </Separator>

      <ContentWrapper
        layout
        initial={`hidden`}
        animate={`visible`}
        variants={defaultAnimationVariant}
        transition={{
          duration: 0.6,
        }}
      >
        <Title>Julio</Title>
        <SubTitle align="left">Zittei</SubTitle>
      </ContentWrapper>
    </Root>
  );
}
