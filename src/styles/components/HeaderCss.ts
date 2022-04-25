import { css } from '../stiches.config';

export const Root = css({
  position: 'sticky',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  background: '$background',
  boxShadow: `1px 1px 10px -5px #1a1d1e`,
  borderBottom: '1px solid $slateA6',
});

export const Container = css({
  maxWidth: 900,
  margin: '0 auto',
  padding: '$spaceDefault $spaceMD',
});
