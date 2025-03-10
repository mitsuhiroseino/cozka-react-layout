import { CSSProperties } from 'react';
import _unit from '../_unit';
import { Orientation } from '../types';
import { SolidHAlign, SolidLayoutProps, SolidVAlign } from './types';

export const ORIENTATION: {
  [orientation in Orientation]: (props: SolidLayoutProps) => CSSProperties;
} = {
  horizontal: (props) => {
    const { mainSize } = props;
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: `repeat(auto-fill, ${_unit(mainSize ?? '100%')})`,
    };
  },
  vertical: (props) => {
    const { mainSize } = props;
    return {
      gridAutoFlow: 'column',
      gridTemplateRows: `repeat(auto-fill, ${_unit(mainSize ?? '100%')})`,
    };
  },
};

/**
 * 横位置のためのスタイル
 */
export const HORIZONTAL_ALIGN: {
  [orientation in Orientation]: {
    [hAlign in SolidHAlign]?: CSSProperties;
  };
} = {
  horizontal: {
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
  },
  vertical: {
    left: {
      alignContent: 'flex-start',
    },
    center: {
      alignContent: 'center',
    },
    right: {
      alignContent: 'flex-end',
    },
    'space-between': {
      alignContent: 'space-between',
    },
    'space-around': {
      alignContent: 'space-around',
    },
    'space-evenly': {
      alignContent: 'space-evenly',
    },
  },
};

/**
 * 縦位置のためのスタイル
 */
export const VERTICAL_ALIGN: {
  [orientation in Orientation]: { [vAlign in SolidVAlign]?: CSSProperties };
} = {
  horizontal: {
    top: {
      alignContent: 'flex-start',
    },
    middle: {
      alignContent: 'center',
    },
    bottom: {
      alignContent: 'flex-end',
    },
    'space-between': {
      alignContent: 'space-between',
    },
    'space-around': {
      alignContent: 'space-around',
    },
    'space-evenly': {
      alignContent: 'space-evenly',
    },
  },
  vertical: {
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
  },
};
