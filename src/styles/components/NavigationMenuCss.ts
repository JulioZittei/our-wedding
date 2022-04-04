import { css } from '../stiches.config';

export const NavMenu = css({
  borderBottom: '1px solid $slateA6',
  borderTop: '1px solid $slateA6',
});

export const NavMenuContainer = css({
  maxWidth: 900,
  margin: '0 auto',
});

export const NavMenuList = css({
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
});

export const NavMenuItem = css({});

export const NavMenuLink = css({
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontFamily: '$poppinsFont',
  fontWeight: 400,
  padding: '0.75rem 1rem',
  outline: 'none',
  userSelect: 'none',
  color: '$slateA11',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    background: 'linear-gradient(90deg, $pinkA11, $skyA11)',
    opacity: 0,
    transition: 'opacity 0.8s ease-in-out',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px '$slateA7'` },
  '&:hover:after': {
    opacity: 1,
  },

  '@sm': {
    fontSize: '$fontSizeSM',
    lineHeight: '$lineHeightSM',
  },
  '@md': {
    fontSize: '$fontSizeMD',
    lineHeight: '$lineHeightMD',
  },
  '@lg': {
    fontSize: '$fontSizeDefault',
    lineHeight: '$lineHeightDefault',
  },
});
