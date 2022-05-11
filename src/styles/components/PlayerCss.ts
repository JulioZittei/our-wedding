import { teal } from '@radix-ui/colors';
import { css } from '../stiches.config';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 9999,

  backgroundColor: '$pink5',
  borderRadius: 4,

  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  pdy: '$space8',
  pdx: '$space12',
});

export const Container = css({
  display: 'flex',
  width: '100%',

  alignItems: 'center',
  justifyContent: 'space-between',
});

export const InfoSection = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Content = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  pdx: '$space8',

  color: '$teal11',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize12',
  lineHeight: '$lineHeight16',
});

export const ControlSection = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Button = css({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  padding: '$space4 $space8',
  borderRadius: 4,
  border: `1px solid transparent`,

  color: '$teal11',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  fontSize: '$fontSize24',
  lineHeight: '$lineHeight28',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'All .5s ease-in-out',

  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': {
    background: '$teal4',
  },

  // '&>svg': {
  //   fontSize: '$fontSize16',
  //   lineHeight: '$lineHeight18',
  // },
});
