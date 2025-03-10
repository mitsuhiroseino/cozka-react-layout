import { CSSProperties } from 'react';
import _getClossAxisStyle from './_getClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { ChildSize, ChildSizing, Orientation } from './types';

export default function _getFlexChildWidthStyle(
  orientation: Orientation,
  childWidth: ChildSize,
  childWidthSizing: ChildSizing,
  wrapChildren?: boolean,
): CSSProperties {
  if (orientation === 'vertical') {
    // 縦並びの時の幅
    return _getClossAxisStyle('width', childWidth, childWidthSizing);
  } else {
    // 横並びの時の幅
    return _getMainAxisStyle(
      'width',
      childWidth,
      childWidthSizing,
      wrapChildren,
    );
  }
}
