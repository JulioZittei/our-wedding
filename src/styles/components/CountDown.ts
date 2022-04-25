import { css } from '../stiches.config';

export const Root = css({
  background: '$tealA5',
});

export const Container = css({
  maxWidth: 900,
  margin: '0 auto',
  padding: ' .5rem',
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

export const Wrapper = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '@sm': {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '$spaceDefault',
  },
  '@md': {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '$spaceDefault',
  },
  '@lg': {
    justifyContent: 'space-between',
  },
});

export const TimeBox = css({
  display: 'flex',
  maxWidth: '125px',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'stretch',
  background: '$background',
  borderRadius: '4px',
  boxShadow: `2px 2px 10px -5px #1a1d1e`,
  boxShadowColor: '$slateA2',

  '@sm': {
    padding: '$spaceLG $spaceSM',
  },
  '@md': {
    padding: '$spaceLG $spaceDefault',
  },
  '@lg': {
    padding: '$spaceLG',
  },
});

export const Date = css({
  flex: 1,
  width: '100%',
  color: '$tealA11',
  textAlign: 'center',
  fontFamily: '$poppinsFont',

  '@sm': {
    fontSize: '$fontSizeLG',
    lineHeight: '$lineHeightLG',
  },
  '@md': {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeightXL',
  },
  '@lg': {
    fontSize: '$fontSizeXL',
    lineHeight: '$lineHeightXL',
  },
});

export const Label = css({
  flex: 1,
  width: '100%',
  color: '$tealA8',
  textAlign: 'center',
  fontFamily: '$poppinsFont',

  '@sm': {
    fontSize: '$fontSizeDefault',
    lineHeight: '$lineHeightDefault',
  },
  '@md': {
    fontSize: '$fontSizeMD',
    lineHeight: '$lineHeightMD',
  },
  '@lg': {
    fontSize: '$fontSizeMD',
    lineHeight: '$lineHeightMD',
  },
});
