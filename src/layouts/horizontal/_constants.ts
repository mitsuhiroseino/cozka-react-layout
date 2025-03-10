import { CSSProperties } from 'react';
import _unit from '../_unit';
import { HorizontalHAlign, HorizontalVAlign } from './types';

/**
 * 横位置のためのスタイル
 */
export const HORIZONTAL_ALIGN: {
  [hAlign in HorizontalHAlign]?: CSSProperties;
} = {
  left: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  right: {
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

/**
 * 縦位置のためのスタイル
 */
export const VERTICAL_ALIGN: {
  [wrapChildren in 'true' | 'false']: {
    [vAlign in HorizontalVAlign]?: CSSProperties;
  };
} = {
  false: {
    top: {
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
    },
    middle: {
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    bottom: {
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
    top: {
      alignContent: 'flex-start',
      flexWrap: 'wrap',
    },
    middle: {
      alignContent: 'center',
      flexWrap: 'wrap',
    },
    bottom: {
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
