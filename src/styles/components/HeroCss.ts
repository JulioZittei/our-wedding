import { css } from '../stiches.config';

export const Root = css({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',

  '@sm': {
    aspectRatio: 1.75,
  },

  '@lg': {
    aspectRatio: 2.75,
  },
});

export const Image = css({
  width: '100%',
});

export const Content = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export const Container = css({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: ' 1fr 1fr',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',
  pdx: '$space24',
  pdy: '$space24',
  height: '100%',
  maxWidth: 992,
});

export const Header = css({
  userSelect: 'none',
  gridColumn: 2,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: '$teal5',
  borderRadius: 4,
  padding: '$space8',
  opacity: 1,
});

export const Title = css({
  fontFamily: '$poppinsFont',
  fontWeight: '$fontWeightNormal',
  color: '$teal11',

  '@sm': {
    fontSize: '$fontSize24',
    lineHeight: '$lineHeight28',
  },
  '@lg': {
    fontSize: '$fontSize48',
    lineHeight: '$lineHeight52',
  },
});

export const SubTitle = css({
  fontFamily: '$poppinsFont',
  fontWeight: '$fontWeightNormal',
  color: '$slate12',

  '@sm': {
    fontSize: '$fontSize18',
    lineHeight: '$lineHeight22',
  },
  '@lg': {
    fontSize: '$fontSize40',
    lineHeight: '$lineHeight44',
  },
});
