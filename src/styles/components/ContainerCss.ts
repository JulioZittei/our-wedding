import { css } from '../stiches.config';

export const ContainerCss = css({
  display: 'flex',
  maxWidth: 992,
  margin: '0 auto',
  pdx: '$space24',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    alignItems: {
      baseline: {
        alignItems: 'baseline',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      'flex-end': {
        alignItems: 'flex-end',
      },
      'flex-start': {
        alignItems: 'flex-start',
      },
      inherit: {
        alignItems: 'inherit',
      },
      initial: {
        alignItems: 'initial',
      },
      normal: {
        alignItems: 'normal',
      },
      revert: {
        alignItems: 'revert',
      },
      'self-end': {
        alignItems: 'self-end',
      },
      'self-start': {
        alignItems: 'self-start',
      },
      start: {
        alignItems: 'start',
      },
      stretch: {
        alignItems: 'stretch',
      },
      unset: {
        alignItems: 'unset',
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      'flex-end': {
        justifyContent: 'flex-end',
      },
      'flex-start': {
        justifyContent: 'flex-start',
      },
      inherit: {
        justifyContent: 'inherit',
      },
      initial: {
        justifyContent: 'initial',
      },
      left: {
        justifyContent: 'left',
      },
      normal: {
        justifyContent: 'normal',
      },
      revert: {
        justifyContent: 'revert',
      },
      right: {
        justifyContent: 'right',
      },
      'space-around': {
        justifyContent: 'space-around',
      },
      'space-between': {
        justifyContent: 'space-between',
      },
      'space-evenly': {
        justifyContent: 'space-evenly',
      },
      start: {
        justifyContent: 'start',
      },
      stretch: {
        justifyContent: 'stretch',
      },
      unset: {
        justifyContent: 'unset',
      },
    },
  },
});
