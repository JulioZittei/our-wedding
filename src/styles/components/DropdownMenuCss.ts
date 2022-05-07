import { teal } from '@radix-ui/colors';
import { css, keyframes } from '../stiches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const Root = css({});

export const Trigger = css({
  cursor: 'pointer',
});

export const Content = css({
  minWidth: 220,
  width: '100%',
  backgroundColor: '$mauve3',
  borderRadius: 4,
  padding: '$space8',
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  all: 'unset',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize15',
  fontWeight: '$fontWeightNormal',
  lineHeight: '$lineHeight19',
  color: '$teal11',
  borderRadius: 4,

  display: 'flex',
  alignItems: 'center',
  padding: '$space16',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  transition: 'all .5s ease-in-out',

  '&:hover': { backgroundColor: '$teal4' },
  '&:focus': { backgroundColor: '$teal4' },

  '&>svg': {
    marginRight: '$space8',
    ':focus > &': {},
    '[data-disabled] &': { color: '$mauve8' },
  },
};

export const Item = css({ ...itemStyles });

export const Link = css({
  display: 'block',
  all: 'unset',
  userSelect: 'none',
  outline: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
});

export const Button = css({
  all: 'unset',
  userSelect: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  borderRadius: 4,
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$teal11',

  transition: 'all .5s ease-in-out',

  '&:hover': { backgroundColor: '$teal4' },
  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },

  '&>svg': {
    fontSize: '$fontSize24',
    ':focus > &': {},
    '[data-disabled] &': { color: '$mauve8' },
  },
});

export const Arrow = css({
  fill: '$mauve3',
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});
