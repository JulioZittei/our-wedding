import { createStitches } from '@stitches/core';
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
} from '@radix-ui/colors';

const { css, globalCss, keyframes, theme, createTheme, getCssText, config } = createStitches({
  theme: {
    colors: {
      ...pinkA,
      ...skyA,
      ...greenA,
      ...slateA,
      ...redA,
      ...yellowA,
      headerBackground: '#fff',
    },
    space: {},
    fontSizes: {
      fontSize2XS: '0.625rem',
      fontSizeXS: '0.75rem',
      fontSizeSM: '0.825rem',
      fontSizeDefault: '1rem',
      fontSizeMD: '1.25rem',
      fontSizeLG: '1.5rem',
      fontSizeXL: '2rem',
      fontSize2XL: '2.5rem',
      fontSize3XL: '3rem',
      fontSize4XL: '3.75rem',
      fontSize5XL: '4.75rem',
      fontSize6XL: '6rem',
    },
    fonts: {
      cinzelFont: "'Cinzel Decorative', cursive",
      poppinsFont: "'Poppins', sans-serif",
    },
    fontWeights: {},
    lineHeights: {
      lineHeight2XS: '0.875rem',
      lineHeightXS: '1rem',
      lineHeightSM: '1.075rem',
      lineHeightDefault: '1.25rem',
      lineHeightMD: '1.50rem',
      lineHeightLG: '1.75rem',
      lineHeightXL: '2.25rem',
      lineHeight2XL: '2.75rem',
      lineHeight3XL: '3.25rem',
      lineHeight4XL: '4rem',
      lineHeight5XL: '5rem',
      lineHeight6XL: '6.25rem',
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
    sm: '(min-width: 640px)',
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
    headerBackground: '#121212',
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
});

export { css, globalCss, keyframes, theme, darkTheme, createTheme, getCssText, config, globalStyles };