import { css } from '../stiches.config';

export const HeaderCss = css({
  position: 'sticky',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  background: '$background',
  boxShadow: '1px 1px 10px -5px #05294d',
  borderBottom: '1px solid $slateA6',
});
