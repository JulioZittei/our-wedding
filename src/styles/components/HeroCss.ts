import { css } from '../stiches.config';

export const Root = css({
  position: 'relative',
  display: 'flex',

  '@sm': {
    aspectRatio: 16 / 9,
  },
});

export const Image = css({
  width: '100%',
});

export const Content = css({
  position: 'absolute',
  width: '100%',
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Header = css({
  position: 'relative',
  maxWidth: '900px',
  margin: '0 auto',
  display: 'flex',
  border: '10px double #fff',
  borderRadius: '4px',
  opacity: 0.8,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@sm': {
    padding: '.5rem',
  },
  '@md': {
    padding: '1rem',
  },
  '@lg': {
    padding: '2rem',
  },
});

export const Title = css({
  fontFamily: '$cinzelFont',
  color: '#fff',

  '@sm': {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeight2XL',
  },
  '@md': {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeight2XL',
  },
  '@lg': {
    fontSize: '$fontSize2XL',
    lineHeight: '$lineHeight3XL',
  },
});

export const SubTitle = css({
  fontFamily: '$cinzelFont',
  color: '#fff',

  '@sm': {
    fontSize: '$fontSizeLG',
    lineHeight: '$lineHeightLG',
  },
  '@md': {
    fontSize: '$fontSizeLG',
    lineHeight: '$lineHeightLG',
  },
  '@lg': {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeightXL',
  },
});
