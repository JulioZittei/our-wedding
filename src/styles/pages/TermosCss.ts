import { teal } from '@radix-ui/colors';
import { ContainerCss } from '../components/ContainerCss';
import { css } from '../stiches.config';

export const Root = css({
  background: '$backgroundDefault',
  '@sm': {
    pdy: '$space24',
  },

  '@lg': {
    pdy: '$space64',
  },
});

export const Container = css({
  ...ContainerCss,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
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

export const Article = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const Title = css({
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: '$poppinsFont',
  color: '$teal11',

  '@sm': {
    fontSize: '$fontSize16',
    marginBottom: '$space24',
  },
  '@lg': {
    fontSize: '$fontSize18',
    marginBottom: '$space32',
  },
});

export const SubTitle = css({
  textAlign: 'left',
  fontFamily: '$poppinsFont',
  fontWeight: '$fontWeightBold',
  fontSize: '$fontSize18',
  lineHeight: '$lineHeight22',
  color: '$mauve11',

  '&+p, +h4': {
    marginTop: '$space16',
  },
});

export const Paragraph = css({
  textAlign: 'left',
  fontFamily: '$poppinsFont',
  fontWeight: '$fontWeightNormal',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',
  color: '$mauve11',

  '&+p, +h4': {
    marginTop: '$space16',
  },
});
