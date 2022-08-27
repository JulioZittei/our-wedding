import { css } from '../stiches.config';
import { blackA } from '@radix-ui/colors';

export const SelectTrigger = css({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  fontFamily: '$poppinsFont',
  lineHeight: 1,
  boxSizing: 'border-box',
  width: '100%',
  height: 48,
  gap: 5,
  backgroundColor: '',
  color: '$mauve11',
  border: '1px solid $mauve7',
  '&:hover': { backgroundColor: '$mauve3' },
  '&:focus': { borderColor: '$teal7' },
});

export const SelectContent = css({
  overflow: 'hidden',
  backgroundColor: '$mauve3',
  borderRadius: 6,
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const SelectViewport = css({
  padding: 5,
});

export const SelectItem = css({
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$mauve11',
  fontFamily: '$poppinsFont',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$teal9',
    color: '$teal1',
  },
});

export const SelectItemText = css({
  fontFamily: '$poppinsFont',
});

export const SelectItemIndicator = css({
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ScrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$teal11',
  cursor: 'default',
};
