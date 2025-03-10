import { CSSProperties } from 'react';
import _unit from '../_unit';
import { Orientation } from '../types';
import { LiguidVAlign, LiquidLayoutProps } from './types';

export const ORIENTATION: {
  [orientation in Orientation]: (props: LiquidLayoutProps) => CSSProperties;
} = {
  horizontal: (props) => {
    const { mainMinSize } = props;
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: `repeat(auto-fit, minmax(${_unit(mainMinSize ?? '100%')}, 1fr))`,
    };
  },
  vertical: (props) => {
    const { mainMinSize } = props;
    return {
      gridAutoFlow: 'column',
      gridTemplateRows: `repeat(auto-fit, minmax(${_unit(mainMinSize ?? '100%')}, 1fr))`,
    };
  },
};

/**
 * 配置
 */
export const ALIGN: {
  [orientation in Orientation]: {
    [vAlign in LiguidVAlign]?: CSSProperties;
  };
} = {
  horizontal: {
    top: {
      gridAutoFlow: 'row',
      alignContent: 'flex-start',
    },
    middle: {
      gridAutoFlow: 'row',
      alignContent: 'center',
    },
    bottom: {
      gridAutoFlow: 'row',
      alignContent: 'flex-end',
    },
    'space-between': {
      gridAutoFlow: 'row',
      alignContent: 'space-between',
    },
    'space-around': {
      gridAutoFlow: 'row',
      alignContent: 'space-around',
    },
    'space-evenly': {
      gridAutoFlow: 'row',
      alignContent: 'space-evenly',
    },
  },
  vertical: {
    top: {
      gridAutoFlow: 'column',
      alignContent: 'flex-start',
    },
    middle: {
      gridAutoFlow: 'column',
      alignContent: 'center',
    },
    bottom: {
      gridAutoFlow: 'column',
      alignContent: 'flex-end',
    },
    'space-between': {
      gridAutoFlow: 'column',
      alignContent: 'space-between',
    },
    'space-around': {
      gridAutoFlow: 'column',
      alignContent: 'space-around',
    },
    'space-evenly': {
      gridAutoFlow: 'column',
      alignContent: 'space-evenly',
    },
  },
};
