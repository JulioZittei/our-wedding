import { teal } from '@radix-ui/colors';
import { css } from '../stiches.config';

export const Root = css({
  '@sm': {
    pdy: '$space24',
  },

  '@lg': {
    pdy: '$space64',
  },
});

export const Container = css({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',

  '@sm': {
    aspectRatio: 1.75,
  },

  '@lg': {
    aspectRatio: 2.75,
  },
});

export const Image = css({
  width: '100%',
});

export const Content = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '0 auto',
  pdx: '$space24',
  pdy: '$space24',
  height: '100%',
  maxWidth: 992,

  '&>h1': {
    textAlign: 'center',
    fontFamily: '$poppinsFont',
    color: '$teal11',

    '@sm': {
      fontSize: '$fontSize24',
      lineHeight: '$lineHeight28',
    },

    '@lg': {
      fontSize: '$fontSize36',
      lineHeight: '$lineHeight40',
    },
  },

  '&>p': {
    textAlign: 'center',
    marginTop: '$space16',
    fontFamily: '$poppinsFont',
    fontSize: '$fontSize15',
    lineHeight: '$lineHeight19',
    color: '$mauve11',
  },
});

export const LinkButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  background: '$teal3',
  padding: '.75rem $space16',
  borderRadius: 4,
  border: `1px solid transparent`,

  color: '$teal11',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'all .5s ease-in-out',

  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': {
    background: '$teal6',
  },

  '@sm': {
    marginTop: '$space8',
  },
  '@lg': {
    marginTop: '$space16',
  },

  '&>svg': {
    marginRight: '.75rem',
    fontSize: '$fontSize16',
    lineHeight: '$lineHeight20',
  },
});
