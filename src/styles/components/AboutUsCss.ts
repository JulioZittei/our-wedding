import { teal } from '@radix-ui/colors';
import { css } from '../stiches.config';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  background: '$background',
  overflow: 'hidden',
});

export const Container = css({
  ...ContainerCss,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@sm': {
    pdy: '$space24',
  },
  '@lg': {
    pdy: '$space64',
  },
});

export const Content = css({
  flex: 1,
  width: '100%',

  '@sm': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '@lg': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

export const Box = css({
  flex: 1,
  maxWidth: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
});

export const Wrapper = css({
  flex: 1,
});

export const ImageCircle = css({
  padding: '$space4',
  background: 'linear-gradient(120deg, $teal11, $green8)',
  borderRadius: '100%',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'all .5s ease-in-out',
  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
});

export const ImageLayer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$space4',
  background: '$backgroundDefault',
  borderRadius: '100%',
});

export const Image = css({
  borderRadius: '100%',
});

export const Header = css({
  '@sm': {
    marginBottom: '$space16',
  },
  '@lg': {
    marginBottom: '$space32',
  },

  '&>h2': {
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: '$poppinsFont',
    fontWeight: 'bold',

    '&::after': {
      content: '',
      position: 'absolute',
      bottom: -4,
      left: 0,
      right: 0,
      height: 4,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      background: 'linear-gradient(120deg, $teal11, $green8)',
    },

    '@sm': {
      fontSize: '$fontSize18',
      lineHeight: '$lineHeight22',
    },
    '@lg': {
      fontSize: '$fontSize24',
      lineHeight: '$lineHeight28',
    },
  },
});

export const Title = css({
  textAlign: 'center',
  fontFamily: '$poppinsFont',
  color: '$teal11',

  '@sm': {
    fontSize: '$fontSize16',
    lineHeight: '$lineHeight20',
    margin: '$space8 0',
  },
  '@lg': {
    fontSize: '$fontSize18',
    lineHeight: '$lineHeigh22',
    margin: '$space8 0',
  },
});

export const Paragraph = css({
  textAlign: 'center',
  fontFamily: '$poppinsFont',

  '@sm': {
    fontSize: '$fontSize14',
    lineHeight: '$lineHeight18',
  },
  '@lg': {
    fontSize: '$fontSize15',
    lineHeight: '$lineHeight19',
  },
});
