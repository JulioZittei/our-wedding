import { css } from '../stiches.config';
import { tealA } from '@radix-ui/colors';

export const Root = css({
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
  marginBottom: '2rem',
  '&>h2': {
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
      fontSize: '$fontSizeMD',
    },
    '@md': {
      fontSize: '$fontSizeMD',
    },
    '@lg': {
      fontSize: '$fontSizeLG',
    },
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
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: '$poppinsFont',
  color: '$slateA11',
  lineHeight: '2rem',

  '@sm': {
    fontSize: '$fontSizeDefault',
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
  marginBottom: '1rem',

  '@sm': {
    fontSize: '$fontSizeSM',
    lineHeight: '$lineHeightSM',
  },
  '@md': {
    fontSize: '$fontSizeSM',
    lineHeight: '$lineHeightSM',
  },
  '@lg': {
    fontSize: '$fontSizeDefault',
    lineHeight: '$lineHeightDefault',
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
  border: `1px solid ${tealA.tealA6}`,
  marginTop: '1rem',

  color: '$tealA11',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',

  fontSize: '$fontSizeDefault',
  lineHeight: '$lineHeightDefault',

  transition: 'All .2s ease-in-out',

  '&>svg': {
    marginRight: '.75rem',
  },

  '&:hover': {
    background: '$tealA4',
    border: `1px solid ${tealA.tealA7}`,
  },
});
