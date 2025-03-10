import { CSSProperties } from 'react';
import { VerticalHAlign, VerticalVAlign } from './types';

/**
 * 横位置のためのスタイル
 */
export const HORIZONTAL_ALIGN: {
  [wrapChildren in 'false' | 'true']: {
    [hAlign in VerticalHAlign]?: CSSProperties;
  };
} = {
  false: {
    left: {
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
    },
    center: {
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    right: {
      alignItems: 'flex-end',
      flexWrap: 'nowrap',
    },
    'space-between': {
      alignItems: 'space-between',
      flexWrap: 'nowrap',
    },
    'space-around': {
      alignItems: 'space-around',
      flexWrap: 'nowrap',
    },
    'space-evenly': {
      alignItems: 'space-evenly',
      flexWrap: 'nowrap',
    },
  },
  true: {
    left: {
      alignContent: 'flex-start',
      flexWrap: 'wrap',
    },
    center: {
      alignContent: 'center',
      flexWrap: 'wrap',
    },
    right: {
      alignContent: 'flex-end',
      flexWrap: 'wrap',
    },
    'space-between': {
      alignContent: 'space-between',
      flexWrap: 'wrap',
    },
    'space-around': {
      alignContent: 'space-around',
      flexWrap: 'wrap',
    },
    'space-evenly': {
      alignContent: 'space-evenly',
      flexWrap: 'wrap',
    },
  },
};

/**
 * 縦位置のためのスタイル
 */
export const VERTICAL_ALIGN: {
  [vAlign in VerticalVAlign]?: CSSProperties;
} = {
  top: {
    justifyContent: 'flex-start',
  },
  middle: {
    justifyContent: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  'space-between': {
    justifyContent: 'space-between',
  },
  'space-around': {
    justifyContent: 'space-around',
  },
  'space-evenly': {
    justifyContent: 'space-evenly',
  },
};
