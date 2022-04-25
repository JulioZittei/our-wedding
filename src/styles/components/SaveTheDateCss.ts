import { css } from '../stiches.config';
import { tealA } from '@radix-ui/colors';
import { slateA } from '@radix-ui/colors';

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
    justifyContent: 'space-evenly',
    gap: '$spaceDefault',
  },
  '@md': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$spaceLG',
  },
});

export const Title = css({
  '&>time': {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: '$poppinsFont',
    color: '$slateA11',
    lineHeight: '2rem',

    '@sm': {
      fontSize: '$fontSizeDefault',
    },
    '@md': {
      fontSize: '$fontSizeMD',
    },
    '@lg': {
      fontSize: '$fontSizeMD',
    },
  },
});

export const SubTitle = css({
  color: '$slateA11',
  fontFamily: '$poppinsFont',
  textAlign: 'center',
  fontSize: '$fontSizeXS',
  lineHeight: '$lineHeightXS',
  marginBottom: '$spaceDefault',
});

export const Card = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const LinkButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  background: '$tealA9',
  padding: '.75rem $spaceDefault',
  borderRadius: 4,
  border: `1px solid ${tealA.tealA6}`,

  color: '#fff',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  fontSize: '$fontSizeSM',
  lineHeight: '$lineHeightSM',
  boxShadow: `0 0 0 2px ${slateA.slateA7}`,

  transition: 'All .2s ease-in-out',

  '&>svg': {
    marginRight: '.75rem',
    fontSize: '$fontSizeDefault',
    lineHeight: '$lineHeightDefault',
  },

  '&:hover': {
    background: '$tealA10',
    border: `1px solid ${tealA.tealA7}`,
  },

  '@sm': {
    marginTop: '$spaceXS',
  },
  '@md': {
    marginTop: '$spaceSM',
  },
  '@lg': {
    marginTop: '$spaceSM',
  },
});
