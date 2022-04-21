import { css } from '../stiches.config';

export const Root = css({
  background: '$tealA5',
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

export const Container = css({
  maxWidth: 900,
  margin: '0 auto',
  padding: '2rem .5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Wrapper = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '@sm': {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '1rem',
  },
  '@md': {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '1rem',
  },
  '@lg': {
    justifyContent: 'space-between',
  },
});

export const TimeBox = css({
  display: 'flex',
  maxWidth: '125px',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'stretch',
  background: '$background',
  borderRadius: '4px',
  boxShadow: '2px 2px 10px -5px #05294d',

  '@sm': {
    padding: '2rem .5rem',
  },
  '@md': {
    padding: '2rem 1rem',
  },
  '@lg': {
    padding: '2rem',
  },
});

export const Label = css({
  flex: 1,
  width: '100%',
  color: '$tealA11',
  textAlign: 'center',
  fontFamily: '$poppinsFont',

  '@sm': {
    fontSize: '$fontSizeLG',
  },
  '@md': {
    fontSize: '$fontSizeXL',
  },
  '@lg': {
    fontSize: '$fontSize2XL',
  },
});

export const Data = css({
  flex: 1,
  width: '100%',
  color: '$tealA8',
  textAlign: 'center',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSizeDefault',
  fontWeight: 700,

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

export const FullDate = css({
  textAlign: 'center',
  fontFamily: '$poppinsFont',
  fontWeight: 400,
  border: '10px double #fff',
  borderRadius: '4px',

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
