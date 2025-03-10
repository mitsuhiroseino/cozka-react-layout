import { CSSProperties } from 'react';
import _getClossAxisStyle from './_getClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { ChildSizeProps, Orientation, OrientationProps } from './types';

/**
 * 向きに関するスタイル
 */
export const ORIENTATION: {
  [orientation in Orientation]?: CSSProperties;
} = {
  horizontal: {
    flexDirection: 'column',
  },
  vertical: {
    flexDirection: 'row',
  },
};

/**
 * 子要素の縦幅のスタイル取得関数
 */
export const CHILD_HEIGHT_SIZING: (
  props: OrientationProps & ChildSizeProps,
) => CSSProperties = ({ orientation, childHeight, childHeightSizing }) => {
  if (orientation === 'vertical') {
    // 縦並びの時の高さ
    return _getMainAxisStyle('height', childHeight, childHeightSizing);
  } else {
    // 横並びの時の高さ
    return _getClossAxisStyle('height', childHeight, childHeightSizing);
  }
};

/**
 * 子要素の横幅のスタイル取得関数
 */
export const CHILD_WIDTH_SIZING: (
  props: OrientationProps & ChildSizeProps,
) => CSSProperties = ({ orientation, childWidth, childWidthSizing }) => {
  if (orientation === 'vertical') {
    // 縦並びの時の幅
    return _getClossAxisStyle('width', childWidth, childWidthSizing);
  } else {
    // 横並びの時の幅
    return _getMainAxisStyle('width', childWidth, childWidthSizing);
  }
};
