import { green, pink, red, teal } from '@radix-ui/colors';
import { ContainerCss } from '../components/ContainerCss';
import { css } from '../stiches.config';

export const Root = css({
  background: '$backgroundDefault',
  '@sm': {
    pdy: '$space24',
  },

  '@lg': {
    pdy: '$space64',
  },
});

export const Container = css({
  ...ContainerCss,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Header = css({
  '@sm': {
    marginBottom: '$space16',
  },
  '@lg': {
    marginBottom: '$space32',
  },
  '&>h1': {
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

export const Title = css({
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: '$poppinsFont',
  color: '$mauve11',

  '@sm': {
    fontSize: '$fontSize14',
    lineHeight: '$lineHeight18',
  },
  '@lg': {
    fontSize: '$fontSize18',
    lineHeight: '$lineHeight22',
  },
});

export const SubTitle = css({
  color: '$mauve11',
  fontFamily: '$poppinsFont',
  textAlign: 'center',
  fontSize: '$fontSize12',
  lineHeight: '$lineHeight16',
  marginTop: '$space4',
  marginBottom: '$space16',
  textDecoration: 'none',
});

export const Form = css({
  flex: 1,
  display: 'flex',
  maxWidth: 500,
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const FormControl = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',

  '@sm': {
    flexDirection: 'column',
  },

  '@lg': {
    flexDirection: 'row',
    gap: 10,
  },
});

export const FormGroup = css({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'left',
  marginBottom: 10,
});

export const Label = css({
  color: '$mauve12',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize14',
  marginBottom: '$space4',
});

export const FormHelperText = css({
  color: '$mauve10',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize12',
});

export const FormHelperError = css({
  color: '$red11',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize12',
});

export const Button = css({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$pink3',
  padding: '.75rem $space16',
  borderRadius: 4,
  border: `1px solid transparent`,

  color: '$pink11',
  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'All .5s ease-in-out',

  '&:focus': { boxShadow: `0 0 0 2px ${pink.pink7}` },
  '&:hover': {
    background: '$pink4',
  },

  '&[disabled]': {
    cursor: 'not-allowed',
  },

  '&>svg': {
    marginRight: '.75rem',
    fontSize: '$fontSize16',
    lineHeight: '$lineHeight18',
  },
});

export const StatusButton = css({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$mauve11',
  background: 'transparent',

  padding: '.75rem $space16',
  borderRadius: 4,
  border: `1px solid $mauve7`,
  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
  '&:hover': {
    background: '$mauve4',
  },

  fontFamily: '$poppinsFont',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'All .5s ease-in-out',

  variants: {
    selected: {
      true: {
        color: '$teal11',
        border: `2px solid $teal7`,
        '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
        '&:hover': {
          background: '$teal4',
          border: `2px solid $teal8`,
        },
      },
    },
  },
});
