import { css } from '../stiches.config';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  position: 'inherit',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1020,
  backgroundColor: '$backgroundDefault',
});

export const Container = css({
  ...ContainerCss,
  pdy: '$space24',
});
