import { css } from '../stiches.config';

export const Root = css({
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
    height: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    background: 'linear-gradient(120deg, $tealA11, $greenA8)',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  },
  '&:focus:after': { opacity: 1 },
  '&:hover:after': {
    opacity: 1,
  },

  fontSize: '$fontSizeSM',
  lineHeight: '$lineHeightSM',
});
