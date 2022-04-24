import { css } from '../stiches.config';
import { slateA } from '@radix-ui/colors';

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
  fontFamily: '$cinzelFont',
  textDecoration: 'none',
  '-webkit-text-fill-color': 'transparent',
  background: 'linear-gradient(120deg, $tealA11, $greenA8)',
  backgroundClip: 'text',

  fontSize: '$fontSizeLG',
  lineHeight: '$lineHeightLG',
});

export const LastName = css({
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  color: '$slateA11',

  fontSize: '$fontSizeXS',
});

export const Separator = css({
  fontFamily: '$cinzelFont',
  textDecoration: 'none',
  color: '$slateA11',
  border: `5px double`,
  borderColor: '$slateA6',
  borderRadius: '50%',
  margin: '0 1rem',

  fontSize: '$fontSizeDefault',
  padding: '.4rem .7rem',
});
