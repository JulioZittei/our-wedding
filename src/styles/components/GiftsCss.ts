import { css } from '../stiches.config';
import { teal } from '@radix-ui/colors';
import { slateA } from '@radix-ui/colors';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  background: '$backgroundDefault',
});

export const Container = css({
  ...ContainerCss,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@sm': {
    padding: '$space24',
  },
  '@lg': {
    padding: '$space64 $space24',
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
    justifyContent: 'space-evenly',
    gap: '$space12',
    marginTop: '$space16',
  },
  '@lg': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$space16',
    marginTop: '$space32',
  },
});

export const Title = css({
  textAlign: 'center',
  fontFamily: '$poppinsFont',
  color: '$teal11',
  marginTop: '$space8',

  '@sm': {
    fontSize: '$fontSize16',
    lineHeight: '$lineHeight20',
  },
  '@lg': {
    fontSize: '$fontSize18',
    lineHeight: '$lineHeight22',
  },
});

export const SubTitle = css({
  color: '$pink11',
  fontFamily: '$poppinsFont',
  textAlign: 'center',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',
});

export const Card = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  // background: '$slate3',
  // boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  // borderRadius: 4,
  // padding: '$space16',
  maxWidth: 200,
  width: '100%',

  '&>svg': {
    fontSize: '7.5rem',
    color: '$teal11',
  },

  '@lg': {
    padding: '$space16',
  },
});

export const LinkButton = css({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$teal5',
  padding: '.75rem $space16',
  borderRadius: 4,
  border: `1px solid transparent`,
  marginTop: '$space4',

  color: '$teal11',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'All .5s ease-in-out',

  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': {
    background: '$teal6',
    border: `1px solid $teal7`,
  },

  '&>svg': {
    marginRight: '.75rem',
    fontSize: '$fontSize16',
    lineHeight: '$lineHeight18',
  },
});
