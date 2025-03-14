import { CSSProperties } from 'react';
import _getFlexClossAxisStyle from './_getFlexClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { ChildSize, Orientation, SizeAdjust, VAlign } from './types';

export default function _getFlexChildHeightStyle(
  orientation: Orientation,
  vAlign: VAlign,
  vAdjust: SizeAdjust,
  childHeight: ChildSize,
): CSSProperties {
  if (orientation === 'vertical') {
    // 縦並びの時の高さ
    return _getMainAxisStyle('height', vAlign, vAdjust, childHeight);
  } else {
    // 横並びの時の高さ
    return _getFlexClossAxisStyle('height', vAdjust, childHeight);
  }
}
