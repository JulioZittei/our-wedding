import { css } from '../stiches.config';
import { slateA } from '@radix-ui/colors';
import { tealA } from '@radix-ui/colors';

export const Root = css({
  borderTop: `1px solid ${slateA.slateA6}`,
  borderColor: '$slateA6',
});

export const Container = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 900,
  margin: '0 auto',
  padding: '0 $spaceMD',
});

export const List = css({
  all: 'unset',
  display: 'flex',
  justifyContent: 'left',
  listStyle: 'none',
});

export const Item = css({
  padding: '$spaceXS 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Link = css({
  position: 'relative',
  display: 'block',
  padding: '$spaceSM $spaceSM',
  borderRadius: '4px',
  background: 'transparent',
  color: '$tealA11',
  textDecoration: 'none',
  fontFamily: '$poppinsFont',
  fontWeight: 400,
  fontSize: '$fontSizeSM',
  lineHeight: '$lineHeightSM',
  outline: 'none',
  userSelect: 'none',

  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${tealA.tealA7}` },
  '&:hover': { backgroundColor: tealA.tealA3 },
});

export const Button = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$spaceXS $spaceXS',
  borderRadius: '4px',
  border: 'none',
  background: 'transparent',
  color: '$tealA11',
  fontFamily: '$poppinsFont',
  fontWeight: 400,
  fontSize: '$fontSizeSM',
  lineHeight: '$lineHeightSM',
  outline: 'none',
  userSelect: 'none',

  '&>svg': {
    fontSize: '$fontSizeDefault',
  },

  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${tealA.tealA7}` },
  '&:hover': { backgroundColor: tealA.tealA3 },
});
