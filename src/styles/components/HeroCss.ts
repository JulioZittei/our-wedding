import { css } from '../stiches.config';

export const Hero = css({
  position: 'relative',
  display: 'flex',

  // '&:after': {
  //   content: '',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: '50%',
  //   width: 100,
  //   height: 100,
  //   transform: 'translateX(-50%)',
  //   backgroundImage: 'url("/images/wedding-ring.png")',
  //   backgroundColor: 'transparent',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  // },
});

export const HeroImage = css({
  width: '100%',

  '@sm': {
    height: '1000px',
  },
});

export const HeroContent = css({
  position: 'absolute',
  width: '100%',
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const HeroHeader = css({
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

export const HeroTitle = css({
  fontFamily: '$cinzelFont',
  color: '#fff',

  '@sm': {
    fontSize: '$fontSizeLG',
    lineHeight: '$lineHeightXL',
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

export const HeroSubTitle = css({
  fontFamily: '$cinzelFont',
  color: '#fff',

  '@sm': {
    fontSize: '$fontSizeDefault',
  },
  '@md': {
    fontSize: '$fontSizeLG',
  },
  '@lg': {
    fontSize: '$fontSizeXL',
  },
});
