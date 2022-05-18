import { mauve } from '@radix-ui/colors';
import { css } from '../stiches.config';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$teal2',
  '@sm': {
    pdy: '$space24',
  },
  '@lg': {
    pdy: '$space64',
  },
});

export const MainFooter = css({
  ...ContainerCss,
  backgroundColor: '$teal1',
  borderRadius: 4,

  '@sm': {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '$space8',
  },
  '@lg': {
    justifyContent: 'space-around',
  },
});

export const SecondaryFooter = css({
  ...ContainerCss,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  '&>p': {
    width: '100%',
    textAlign: 'center',
    color: '$teal11',
    fontFamily: '$poppinsFont',
    fontSize: '$fontSize14',
    '&>a': {
      color: '$pink11',
      textDecoration: 'none',
    },
  },

  '@sm': {
    paddingTop: '$space24',
  },
  '@lg': {
    paddingTop: '$space64',
  },
});

export const Content = css({
  maxWidth: 180,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '$space16',

  '@sm': {
    alignItems: 'center',
  },
  '@lg': {
    alignItems: 'flex-start',
  },
});

export const Title = css({
  color: '$mauve11',
  fontFamily: '$poppinsFont',
  fontWeight: '$fontWeightBold',

  '@sm': {
    fontSize: '$fontSize18',
    lineHeight: '$lineHeight22',
  },
  '@lg': {
    fontSize: '$fontSize20',
    lineHeight: '$lineHeight24',
  },
});

export const Separator = css({
  margin: '$space12 0',
  backgroundColor: mauve.mauve6,
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
});

export const Paragraph = css({
  color: '$mauve11',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',
  fontWeight: '$fontWeightNormal',
  '&+a': {
    marginTop: '$space8',
  },
  '&+p': {
    marginTop: '$space8',
  },

  '@sm': {
    textAlign: 'center',
  },
  '@lg': {
    textAlign: 'left',
  },
});

export const Link = css({
  display: 'flex',
  alignItems: 'center',
  minWidth: 'min-content',
  color: '$teal11',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',
  fontWeight: '$fontWeightBold',
  textDecoration: 'none',

  '&+a': {
    marginTop: '$space8',
  },

  '&:hover': {
    filter: 'brightness(1.75)',
  },

  '&>svg': {
    fontSize: '$fontSize18',
    lineHeight: '$lineHeight22',
    marginRight: '$space4',
  },
});
