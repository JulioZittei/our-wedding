import { css } from '../stiches.config';
import { slateA } from '@radix-ui/colors';

export const Root = css({
  position: 'relative',
  display: 'flex',

  '@sm': {
    aspectRatio: 1.75,
  },

  '@md': {
    aspectRatio: 1.75,
  },

  '@lg': {
    aspectRatio: 2.75,
  },
});

export const Image = css({
  width: '100%',
  filter: 'blur(.125rem)',
});

export const Content = css({
  position: 'absolute',
  width: '100%',
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Header = css({
  position: 'relative',
  maxWidth: '900px',
  margin: '0 auto',
  display: 'flex',
  border: '10px double #fff',
  borderRadius: '4px',
  opacity: 0.8,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@sm': {
    padding: '$spaceSM $spaceDefault',
  },
  '@md': {
    padding: '$spaceDefault $spaceLG',
  },
  '@lg': {
    padding: '$spaceLG $spaceXL',
  },
});

export const Title = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: '$cinzelFont',
  color: '#fff',

  '&>svg:first-child': {
    marginRight: '$spaceDefault',
  },
  '&>svg:last-child': {
    marginLeft: '$spaceDefault',
  },

  '@sm': {
    fontSize: '$fontSizeLG',
    lineHeight: '$lineHeightXL',
  },
  '@md': {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeight2XL',
  },
  '@lg': {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeight2XL',
  },
});
