import { css } from '../stiches.config';
import { slate } from '@radix-ui/colors';
import { teal } from '@radix-ui/colors';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  borderBottom: '1px solid',
  borderTop: '1px solid',
  borderColor: '$slate6',
});

export const Container = css({
  ...ContainerCss,
});

export const List = css({
  all: 'unset',
  display: 'flex',
  justifyContent: 'left',
  listStyle: 'none',
});

export const MobileList = css({
  flex: 1,
  display: 'block',
  width: '100%',
  listStyle: 'none',
  overflowY: 'scroll',
  pdy: '$space16',
});

export const Item = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  pdy: '$space4',
});

export const MobileItem = css({
  width: '100%',
  backgroundColor: 'transparent',

  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': { backgroundColor: '$teal4' },
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
  textDecoration: 'none',

  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': { backgroundColor: '$teal4' },
});

export const MobileLink = css({
  display: 'block',
  width: '100%',
  padding: '$space8',
  paddingLeft: '$space32',
  backgroundColor: 'transparent',

  color: '$teal11',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize15',
  fontWeight: '$fontWeightNormal',
  lineHeight: '$lineHeight19',

  outline: 'none',
  userSelect: 'none',
  textDecoration: 'none',

  '&>svg': {
    marginRight: '$space8',
  },
});

export const Button = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$space4',
  borderRadius: 4,
  border: 'none',
  backgroundColor: 'transparent',
  height: '100%',

  color: '$teal11',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize15',
  fontWeight: '$fontWeightNormal',
  lineHeight: '$lineHeight19',

  outline: 'none',
  userSelect: 'none',

  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': { backgroundColor: '$teal4' },

  '&>svg': {
    fontSize: '$fontSize24',
  },
});
