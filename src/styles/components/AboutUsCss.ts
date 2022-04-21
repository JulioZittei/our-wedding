import { css } from '../stiches.config';

export const Root = css({});

export const Container = css({
  maxWidth: 900,
  margin: '0 auto',
  padding: '2rem .5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Content = css({
  flex: 1,
  width: '100%',

  '@sm': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '@md': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

export const Box = css({
  flex: 1,
  maxWidth: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
});

export const Wrapper = css({
  flex: 1,
});

export const ImageCircle = css({
  padding: '.25rem',
  background: 'linear-gradient(120deg, $tealA11, $greenA8)',
  borderRadius: '100%',
});

export const ImageLayer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '.25rem',
  background: '$background',
  borderRadius: '100%',
});

export const Image = css({
  borderRadius: '100%',
});

export const Header = css({
  position: 'relative',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: '$poppinsFont',
  fontWeight: 400,

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: -4,
    left: 0,
    right: 0,
    height: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    background: 'linear-gradient(120deg, $tealA11, $greenA8)',
  },

  '@sm': {
    fontSize: '$fontSizeDefault',
    marginBottom: '2rem',
  },
  '@md': {
    fontSize: '$fontSizeMD',
  },
  '@lg': {
    fontSize: '$fontSizeLG',
  },
});

export const Title = css({
  textAlign: 'center',
  fontFamily: '$cinzelFont',
  margin: '1rem 0',

  '@sm': {
    fontSize: '$fontSizeSM',
  },
  '@md': {
    fontSize: '$fontSizeDefault',
  },
  '@lg': {
    fontSize: '$fontSizeMD',
  },
});

export const Paragraph = css({
  textAlign: 'center',
  fontFamily: '$poppinsFont',

  '@sm': {
    fontSize: '$fontSizeXS',
  },
  '@md': {
    fontSize: '$fontSizeSM',
  },
  '@lg': {
    fontSize: 'fontSizeDefault',
  },
});
