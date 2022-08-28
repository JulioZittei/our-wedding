import { css } from '../stiches.config';
import { teal } from '@radix-ui/colors';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  position: 'relative',
  width: '100vw',
  zIndex: 1020,
  borderBottom: '1px solid',
  borderTop: '1px solid',
  borderColor: '$mauve6',
});

export const Container = css({
  ...ContainerCss,
  '& > div': {
    width: '100%',
  },
});

export const List = css({
  all: 'unset',
  listStyle: 'none',
  pdy: '$space4',

  '@sm': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '@lg': {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Item = css({
  '&:not(:last-child)': {
    marginRight: '$space8',
  },
});

export const Link = css({
  display: 'block',
  padding: '$space8',
  borderRadius: 4,
  backgroundColor: 'transparent',

  color: '$teal11',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize15',
  fontWeight: '$fontWeightNormal',
  lineHeight: '$lineHeight19',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  textDecoration: 'none',

  transition: 'all .5s ease-in-out',

  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': { backgroundColor: '$teal4' },

  '&>svg': {
    marginRight: '$space8',
  },
});

export const Button = css({
  all: 'unset',
  userSelect: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  borderRadius: 4,
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$teal11',

  transition: 'all .5s ease-in-out',

  '&:hover': { backgroundColor: '$teal4' },
  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },

  '&>svg': {
    fontSize: '$fontSize24',
    ':focus > &': {},
    '[data-disabled] &': { color: '$mauve8' },
  },
});
