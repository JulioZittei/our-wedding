import { css } from '../stiches.config';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  backgroundColor: '$teal2',
});

export const Container = css({
  ...ContainerCss,
  '&>span': {
    color: '$teal11',
    fontFamily: '$poppinsFont',
    fontSize: '$fontSize14',
    '&>a': {
      color: '$pink11',
      textDecoration: 'none',
    },
  },
  '@sm': {
    pdy: '$space24',
  },
  '@lg': {
    pdy: '$space64',
  },
});
