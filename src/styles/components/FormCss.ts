import { css } from '../stiches.config';

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
