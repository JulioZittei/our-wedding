import { css } from '../stiches.config';

export const Root = css({
  // background: '$skyA5',
  background: '$background',
});

export const Container = css({
  maxWidth: 900,
  margin: '0 auto',
  padding: '2rem .5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
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

export const Content = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Wrapper = css({
  width: '100%',
  display: 'flex',

  '@sm': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '@md': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Title = css({
  textTransform: 'uppercase',
  fontFamily: '$poppinsFont',
  color: '$slateA11',
  lineHeight: '2rem',

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

export const SubTitle = css({
  color: '$slateA11',
  fontFamily: '$poppinsFont',
  textAlign: 'center',
  marginBottom: '2rem',

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

export const Card = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
});

export const LinkButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  background: '$tealA3',
  padding: '.75rem 1rem',
  borderRadius: 4,
  border: '1px solid #6FB9AC',
  marginTop: '1rem',

  '&:hover': {
    background: '$tealA4',
  },

  color: '$tealA11',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',

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
