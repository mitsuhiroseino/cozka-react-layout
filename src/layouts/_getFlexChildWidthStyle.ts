import { CSSProperties } from 'react';
import _getClossAxisStyle from './_getClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { ChildSize, Orientation, SizeAdjust } from './types';

export default function _getFlexChildWidthStyle(
  orientation: Orientation,
  hAlign: SizeAdjust,
  childWidth: ChildSize,
  wrapChildren?: boolean,
): CSSProperties {
  if (orientation === 'vertical') {
    // 縦並びの時の幅
    return _getClossAxisStyle('width', hAlign, childWidth);
  } else {
    // 横並びの時の幅
    return _getMainAxisStyle('width', hAlign, childWidth, wrapChildren);
  }
}
