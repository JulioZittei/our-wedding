import { createStitches } from '@stitches/react';
import {
  sky,
  skyDark,
  pink,
  pinkDark,
  red,
  redDark,
  yellow,
  yellowDark,
  green,
  greenDark,
  mauve,
  mauveDark,
  teal,
  tealDark,
  blue,
  blueDark,
  amber,
  amberDark,
  blackA,
  whiteA,
} from '@radix-ui/colors';

const { css, globalCss, keyframes, theme, createTheme, getCssText, config, styled } = createStitches({
  theme: {
    colors: {
      ...pink,
      ...sky,
      ...green,
      ...mauve,
      ...red,
      ...yellow,
      ...teal,
      ...blue,
      ...amber,
      ...blackA,
      ...whiteA,
      backgroundDefault: mauve.mauve1,
    },
    space: {
      space4: '0.25rem', // 4px
      space8: '0.5rem', // 8px
      space12: '0.75rem', // 12px
      space16: '1rem', // 16px
      space24: '1.5rem', // 24px
      space32: '2rem', // 32px
      space64: '4rem', // 64px
    },
    fonts: {
      cinzelFont: "'Cinzel Decorative', cursive",
      poppinsFont: "'Poppins', 'Open Sans' , Helvetica, Arial, sans-serif",
    },
    fontSizes: {
      fontSize10: '0.625rem', // 10px
      fontSize12: '0.75rem', // 12px
      fontSize14: '0.875rem', // 14px
      fontSize15: '0.9375rem', // 15px
      fontSize16: '1rem', // 16px
      fontSize18: '1.125rem', // 18px
      fontSize20: '1.25rem', // 20px
      fontSize24: '1.5rem', // 24px
      fontSize32: '2rem', // 32px
      fontSize36: '2.25rem', // 36px
      fontSize40: '2.5rem', // 40px
      fontSize48: '3rem', // 48px
      fontSize60: '3.75rem', // 60px
      fontSize76: '4.75rem', // 76px
      fontSize96: '6rem', // 96px
    },
    fontWeights: {
      fontWeightLight: 300,
      fontWeightNormal: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    lineHeights: {
      lineHeight14: '0.875rem', // 14px
      lineHeight16: '1rem', // 16px
      lineHeight18: '1.125rem', // 18px
      lineHeight19: '1.1875rem', // 19px
      lineHeight20: '1.25rem', // 20px
      lineHeight22: '1.375rem', // 22px
      lineHeight24: '1.5rem', // 24px
      lineHeight28: '1.75rem', // 28px
      lineHeight32: '2.25rem', // 36px
      lineHeight40: '2.5rem', // 40px
      lineHeight44: '2.75rem', // 44px
      lineHeight52: '3.25rem', // 52px
      lineHeight64: '4rem', // 64px
      lineHeight80: '5rem', // 80px
      lineHeight100: '6.25rem', // 100px
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils: {
    pdx: (value: unknown) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pdy: (value: unknown) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    sm: '(max-width: 768px)',
    lg: '(min-width: 769px)',
    // md: '(max-width: 992px)',
    // lg: '(min-width: 993px)',
  },
});

const darkTheme = createTheme({
  colors: {
    ...pinkDark,
    ...skyDark,
    ...greenDark,
    ...mauveDark,
    ...redDark,
    ...yellowDark,
    ...greenDark,
    ...tealDark,
    ...blueDark,
    ...amberDark,
    backgroundDefault: mauveDark.mauve1,
  },
});

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$poppinsFont',
  },
  html: {
    scrollBehavior: 'smooth',
    scrollPaddingTop: 141,
  },
  body: {
    backgroundColor: '$backgroundDefault',
  },
});

export { styled, css, globalCss, globalStyles, keyframes, theme, darkTheme, createTheme, getCssText, config };
