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
  fontFamily: '$cinzelFont',
  '-webkit-text-fill-color': 'transparent',
  textDecoration: 'none',
  background: 'linear-gradient(90deg, $pinkA11, $skyA11)',
  backgroundClip: 'text',

  '@sm': {
    fontSize: '$fontSizeLG',
    lineHeight: '$lineHeightLG',
  },
  '@md': {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeightXL',
  },
  '@lg': {
    fontSize: '$fontSize2XL',
    lineHeight: '$lineHeight2XL',
  },
});

export const LastName = css({
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  color: '$slateA11',

  '@sm': {
    fontSize: '$fontSizeXS',
  },
  '@md': {
    fontSize: '$fontSizeSM',
  },
  '@lg': {
    fontSize: '$fontSizeDefault',
  },
});

export const Separator = css({
  fontFamily: '$cinzelFont',
  textDecoration: 'none',
  color: '$slateA11',
  border: '5px double $slateA6',
  borderRadius: '50%',
  margin: '0 1rem',

  '@sm': {
    fontSize: '$fontSizeDefault',
    padding: '.4rem .7rem',
  },
  '@md': {
    fontSize: '$fontSizeLG',
    padding: '.5rem .8rem',
  },
  '@lg': {
    fontSize: '$fontSizeXL',
    padding: '.5rem 1rem',
  },
});
