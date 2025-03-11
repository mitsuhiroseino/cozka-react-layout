import { CSSProperties } from 'react';
import _getClossAxisStyle from './_getClossAxisStyle';
import { ChildSize, ChildSizing, Orientation } from './types';

export default function _getGridChildSizeStyle(
  orientation: Orientation,
  childHeight: ChildSize,
  childHeightSizing: ChildSizing,
  childWidth: ChildSize,
  childWidthSizing: ChildSizing,
): CSSProperties {
  if (orientation === 'vertical') {
    return _getClossAxisStyle('width', childWidth, childWidthSizing);
  } else {
    return _getClossAxisStyle('height', childHeight, childHeightSizing);
  }
}
