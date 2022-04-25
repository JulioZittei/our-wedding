import { css } from '../stiches.config';

export const Root = css({
  background: '$background',
});

export const Container = css({
  maxWidth: 900,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@sm': {
    padding: '$spaceMD $spaceMD',
  },
  '@md': {
    padding: '$spaceXL $spaceMD',
  },
  '@lg': {
    padding: '$spaceXL $spaceMD',
  },
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
  padding: '$spaceXS',
  background: 'linear-gradient(120deg, $tealA11, $greenA8)',
  borderRadius: '100%',
});

export const ImageLayer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$spaceXS',
  background: '$background',
  borderRadius: '100%',
});

export const Image = css({
  borderRadius: '100%',
});

export const Header = css({
  '@sm': {
    marginBottom: '$spaceDefault',
  },
  '@md': {
    marginBottom: '$spaceLG',
  },
  '@lg': {
    marginBottom: '$spaceLG',
  },

  '&>h2': {
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: '$poppinsFont',
    fontWeight: 'bold',

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
      fontSize: '$fontSizeMD',
      lineHeight: '$lineHeightMD',
    },
    '@md': {
      fontSize: '$fontSizeLG',
      lineHeight: '$lineHeightLG',
    },
    '@lg': {
      fontSize: '$fontSizeLG',
      lineHeight: '$lineHeightLG',
    },
  },
});

export const Title = css({
  textAlign: 'center',
  fontFamily: '$cinzelFont',

  '@sm': {
    fontSize: '$fontSizeDefault',
    lineHeight: '$lineHeightDefault',
    margin: '$spaceSM 0',
  },
  '@md': {
    fontSize: '$fontSizeMD',
    lineHeight: '$lineHeightMD',
    margin: '$spaceDefault 0',
  },
  '@lg': {
    fontSize: '$fontSizeMD',
    lineHeight: '$lineHeightMD',
    margin: '$spaceDefault 0',
  },
});

export const Paragraph = css({
  textAlign: 'center',
  fontFamily: '$poppinsFont',

  fontSize: '$fontSizeSM',
  lineHeight: '$lineHeightSM',
});
