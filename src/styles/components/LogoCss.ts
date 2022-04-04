import { css } from '../stiches.config';

export const Container = css({
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
  '-webkit-text-fill-color': 'transparent',
  textDecoration: 'none',
  background: 'linear-gradient(90deg, $pinkA11, $skyA11)',
  backgroundClip: 'text',

  fontSize: '$fontSize2XL',
  lineHeight: '$lineHeight2XL',
});

export const LastName = css({
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  color: '$slateA11',

  fontSize: '$fontSizeDefault',
});

export const Separator = css({
  fontFamily: '$primaryFont',
  textDecoration: 'none',
  color: '$slateA11',
  padding: '.5rem 1rem',
  border: '5px double $slateA6',
  borderRadius: '50%',
  margin: '0 1rem',

  fontSize: '$fontSizeXL',
});
