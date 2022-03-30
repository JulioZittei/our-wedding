import { createStitches } from '@stitches/core';
import { skyA, pinkA, redA, yellowA, greenA, slateA } from '@radix-ui/colors';

const { css, globalCss, keyframes, theme, createTheme, getCssText } = createStitches({
  theme: {
    colors: {
      ...pinkA,
      ...skyA,
      ...greenA,
      ...slateA,
      ...redA,
      ...yellowA,
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
  },
});

const darkTheme = createTheme({
  colors: {},
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

export { css, globalCss, keyframes, theme, darkTheme, createTheme, getCssText };
