import { CSSProperties } from 'react';
import { SolidHAlign, SolidLayoutProps, SolidVAlign } from './types';

/**
 * 横位置のためのスタイル
 */
export const HORIZONTAL_ALIGN: {
  [hAlign in SolidHAlign]?: CSSProperties;
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
  [vAlign in SolidVAlign]?: CSSProperties;
} = {
  top: {
    alignContent: 'flex-start',
  },
  middle: {
    alignContent: 'center',
  },
  bottom: {
    alignContent: 'flex-end',
  },
  stretch: {
    alignContent: 'stretch',
  },
  fit: {
    alignContent: 'stretch',
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
};

/**
 * 子要素の縦位置のためのスタイル
 */
export const CHILD_VERTICAL_ALIGN: {
  [vAlign in SolidVAlign]?: (props: SolidLayoutProps) => CSSProperties;
} = {
  stretch: (props) => {
    const { childHeight, childWidth } = props;
    return {
      minHeight: childHeight,
      width: childWidth,
    };
  },
  fit: (props) => {
    const { childWidth } = props;
    return {
      height: 'auto',
      width: childWidth,
    };
  },
};

/**
 * 子要素の縦位置のためのスタイルのデフォルト
 */
export const DEFAULT_CHILD_VERTICAL_ALIGN: (
  props: SolidLayoutProps,
) => CSSProperties = (props) => {
  const { childHeight, childWidth } = props;
  return {
    height: childHeight,
    width: childWidth,
  };
};
