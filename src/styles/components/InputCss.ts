import { css } from '../stiches.config';

export const Input = css({
  height: 48,
  pdx: 10,
  marginBottom: 10,

  fontFamily: '$poppinsFont',
  color: '$mauve11',

  outline: 'none',
  appearance: 'none',
  border: '1px solid $mauve7',
  borderRadius: 4,
  background: '$mauve1',

  '&:focus': {
    borderColor: '$teal7',
  },
});
