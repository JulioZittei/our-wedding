import { css } from '../stiches.config';

export const Root = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const BoxName = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const FirstName = css({
  fontSize: '$fontSizeMD',
  lineHeight: '$lineHeightMD',
  fontFamily: '$cinzelFont',
  textDecoration: 'none',
  '-webkit-text-fill-color': 'transparent',
  background: 'linear-gradient(120deg, $tealA11, $greenA8)',
  backgroundClip: 'text',
});

export const LastName = css({
  fontSize: '$fontSizeXS',
  fontFamily: '$poppinsFont',
  lineHeight: '$lineHeightXS',
  textDecoration: 'none',
  color: '$slateA11',
});

export const Separator = css({
  fontSize: '$fontSizeDefault',
  fontFamily: '$cinzelFont',
  textDecoration: 'none',
  color: '$slateA11',
  border: `5px double`,
  borderColor: '$slateA6',
  borderRadius: '50%',
  margin: '0 $spaceSM',
  padding: '.4rem .7rem',
});
