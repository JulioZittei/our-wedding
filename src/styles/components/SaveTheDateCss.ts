import { teal } from '@radix-ui/colors';
import { css } from '../stiches.config';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  background: '$background',
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

export const Header = css({
  '@sm': {
    marginBottom: '$space16',
  },
  '@lg': {
    marginBottom: '$space32',
  },
  '&>h2': {
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: '$poppinsFont',
    fontWeight: 'bold',

    '&::after': {
      content: '',
      position: 'absolute',
      bottom: -4,
      left: 0,
      right: 0,
      height: 4,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      background: 'linear-gradient(120deg, $teal11, $green8)',
    },

    '@sm': {
      fontSize: '$fontSize18',
      lineHeight: '$lineHeight22',
    },
    '@lg': {
      fontSize: '$fontSize24',
      lineHeight: '$lineHeight28',
    },
  },
});

export const Content = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Wrapper = css({
  width: '100%',
  display: 'flex',

  '@sm': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$space8',
  },
  '@lg': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Title = css({
  '&>time': {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: '$poppinsFont',
    color: '$teal11',
    lineHeight: '2rem',

    '@sm': {
      fontSize: '$fontSize16',
    },
    '@lg': {
      fontSize: '$fontSize18',
    },
  },
});

export const SubTitle = css({
  color: '$slate11',
  fontFamily: '$poppinsFont',
  textAlign: 'center',
  fontSize: '$fontSize12',
  lineHeight: '$lineHeight16',
  marginBottom: '$space16',
});

export const Card = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@sm': {
    padding: '$space8',
  },
  '@lg': {
    padding: '$space16',
  },
});

export const LinkButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  background: '$teal5',
  padding: '.75rem $space16',
  borderRadius: 4,
  border: `1px solid transparent`,

  color: '$teal11',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'all .5s ease-in-out',

  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': {
    background: '$teal6',
    border: `1px solid $teal7`,
  },

  '@sm': {
    marginTop: '$space4',
  },
  '@lg': {
    marginTop: '$space8',
  },

  '&>svg': {
    marginRight: '.75rem',
    fontSize: '$fontSize16',
    lineHeight: '$lineHeight20',
  },
});
