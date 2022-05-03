import { css } from '../stiches.config';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  background: '$teal5',
});

export const Container = css({
  ...ContainerCss,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@sm': {
    pdy: '$space24',
  },
  '@lg': {
    pdy: '$space64',
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
    gap: '$space16',
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
  background: '$slate3',
  borderRadius: 4,
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',

  '@sm': {
    padding: '$space32 $space8',
  },
  '@lg': {
    padding: '$space32',
  },
});

export const Date = css({
  flex: 1,
  width: '100%',
  color: '$teal11',
  textAlign: 'center',
  fontFamily: '$poppinsFont',

  '@sm': {
    fontSize: '$fontSize24',
    lineHeight: '$lineHeight28',
  },
  '@lg': {
    fontSize: '$fontSize36',
    lineHeight: '$lineHeight40',
  },
});

export const Label = css({
  flex: 1,
  width: '100%',
  color: '$teal8',
  textAlign: 'center',
  fontFamily: '$poppinsFont',

  '@sm': {
    fontSize: '$fontSize16',
    lineHeight: '$lineHeight20',
  },
  '@lg': {
    fontSize: '$fontSize18',
    lineHeight: '$lineHeight22',
  },
});
