import { css } from '../stiches.config';
import { pink } from '@radix-ui/colors';
import { ContainerCss } from './ContainerCss';

export const Root = css({
  background: '$teal2',
  '@lg': {
    borderTopLeftRadius: '100%',
    borderTopRightRadius: '100%',
  },
});

export const Container = css({
  ...ContainerCss,
  maxWidth: 500,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@sm': {
    paddingTop: '$space24',
  },
  '@lg': {
    paddingTop: '$space64',
  },
});

export const Header = css({
  '@sm': {
    marginBottom: '$space8',
  },
  '@lg': {
    marginBottom: '$space16',
  },
  '&>h2': {
    position: 'relative',
    color: '$mauve11',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: '$poppinsFont',
    fontWeight: 'bold',

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

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',

  '@sm': {
    gap: '$space12',
    marginTop: '$space8',
  },
  '@lg': {
    gap: '$space16',
    marginTop: '$space16',
  },
});

export const Title = css({
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: '$poppinsFont',
  color: '$pink11',
  lineHeight: '2rem',

  '@sm': {
    fontSize: '$fontSize16',
  },
  '@lg': {
    fontSize: '$fontSize18',
  },
});

export const SubTitle = css({
  color: '$mauve12',
  fontFamily: '$poppinsFont',
  textAlign: 'center',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',
  textDecoration: 'none',
});

export const Card = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const LinkButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$pink3',
  padding: '.75rem $space16',
  borderRadius: 4,
  border: `1px solid transparent`,

  color: '$pink11',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'all .5s ease-in-out',

  '&:focus': { boxShadow: `0 0 0 2px ${pink.pink7}` },
  '&:hover': {
    background: '$pink4',
  },

  '@sm': {
    marginTop: '$space4',
  },
  '@lg': {
    marginTop: '$space8',
  },

  '&>svg': {
    marginRight: '$space8',
    fontSize: '$fontSize16',
    lineHeight: '$lineHeight20',
  },
});
