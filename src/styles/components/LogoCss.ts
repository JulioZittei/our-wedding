import { teal } from '@radix-ui/colors';
import { css } from '../stiches.config';

export const Root = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  textDecoration: 'none',

  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  transition: 'all .5s ease-in-out',
  '&:focus': { boxShadow: `0 0 0 2px ${teal.teal7}` },
});

export const ContentWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const Title = css({
  fontFamily: '$cinzelFont',
  fontSize: '$fontSize24',
  lineHeight: '$lineHeight28',
  textDecoration: 'none',

  '-webkit-text-fill-color': 'transparent',
  background: 'linear-gradient(120deg, $teal11, $green8)',
  backgroundClip: 'text',
});

export const SubTitle = css({
  color: '$slate11',
  fontFamily: '$poppinsFont',
  fontSize: '$fontSize14',
  lineHeight: '$lineHeight18',
  textDecoration: 'none',

  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
});

export const Separator = css({
  fontSize: '$fontSize16',
  fontFamily: '$cinzelFont',
  textDecoration: 'none',
  color: '$slate11',
  border: `5px double`,
  borderColor: '$slate6',
  borderRadius: '50%',
  margin: '0 $space8',
  padding: '$space8 $space12',
});
