import { createStitches } from '@stitches/react';
import {
  skyA,
  skyDarkA,
  pinkA,
  pinkDarkA,
  redA,
  redDarkA,
  yellowA,
  yellowDarkA,
  greenA,
  greenDarkA,
  slateA,
  slateDarkA,
  tealA,
  blueA,
  tealDarkA,
  blueDarkA,
} from '@radix-ui/colors';

const { css, globalCss, keyframes, theme, createTheme, getCssText, config, styled } = createStitches({
  theme: {
    colors: {
      ...pinkA,
      ...skyA,
      ...greenA,
      ...slateA,
      ...redA,
      ...yellowA,
      ...tealA,
      ...blueA,
      background: '#fff',
    },
    space: {
      spaceXS: '0.25rem', // 4px
      spaceSM: '0.5rem', // 8px
      spaceDefault: '1rem', // 16px
      spaceMD: '1.5rem', // 24px
      spaceLG: '2rem', // 32px
      spaceXL: '4rem', // 64px
    },
    fontSizes: {
      fontSize2XS: '0.625rem', // 10px
      fontSizeXS: '0.75rem', // 12px
      fontSizeSM: '0.875rem', // 14px
      fontSizeDefault: '1rem', // 16px
      fontSizeMD: '1.125rem', // 18px
      fontSizeLG: '1.5rem', // 24px
      fontSizeXL: '2.25rem', // 36px
      fontSize2XL: '2.5rem', // 40px
      fontSize3XL: '3rem', // 48px
      fontSize4XL: '3.75rem', // 60px
      fontSize5XL: '4.75rem', // 76px
      fontSize6XL: '6rem', // 96px
    },
    fonts: {
      cinzelFont: "'Cinzel Decorative', cursive",
      poppinsFont: "'Poppins', sans-serif",
    },
    fontWeights: {},
    lineHeights: {
      lineHeight2XS: '0.875rem', // 14px
      lineHeightXS: '1rem', // 16px
      lineHeightSM: '1.125rem', // 18px
      lineHeightDefault: '1.25rem', // 20px
      lineHeightMD: '1.375rem', // 22px
      lineHeightLG: '1.75rem', // 28px
      lineHeightXL: '2.5rem', // 40px
      lineHeight2XL: '2.75rem', // 44px
      lineHeight3XL: '3.25rem', // 52px
      lineHeight4XL: '4rem', // 64px
      lineHeight5XL: '5rem', // 80px
      lineHeight6XL: '6.25rem', // 100px
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
  media: {
    sm: '(min-width: 0px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});

const darkTheme = createTheme({
  colors: {
    ...pinkDarkA,
    ...skyDarkA,
    ...greenDarkA,
    ...slateDarkA,
    ...redDarkA,
    ...yellowDarkA,
    ...greenDarkA,
    ...tealDarkA,
    ...blueDarkA,
    background: '#121212',
  },
  space: {},
  fontSizes: {},
  fonts: {},
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
  sizes: {},
  borderWidths: {},
  borderStyles: {},
  radii: {},
  shadows: {},
  zIndices: {},
  transitions: {},
});

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  h1: {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeightXL',
  },
  h2: {
    fontSize: '$fontSizeLG',
    lineHeight: '$lineHeightLG',
  },
  h3: {
    fontSize: '$fontSizeMD',
    lineHeight: '$lineHeightMD',
  },
  h4: {
    fontSize: '$fontSizeDefault',
    lineHeight: '$lineHeighDefault',
  },
  h5: {
    fontSize: '$fontSizeSM',
    lineHeight: '$lineHeightSM',
  },
  h6: {
    fontSize: '$fontSizeXS',
    lineHeight: '$lineHeightXS',
  },
});

export { styled, css, globalCss, keyframes, theme, darkTheme, createTheme, getCssText, config, globalStyles };
