import { CSSProperties } from 'react';
import _getFlexClossAxisStyle from './_getFlexClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { ChildSize, Orientation, SizeAdjust, VAlign } from './types';

export default function _getFlexChildHeightStyle(
  orientation: Orientation,
  vAlign: VAlign,
  vSize: ChildSize,
  vAdjust: SizeAdjust,
): CSSProperties {
  if (orientation === 'vertical') {
    // 縦並びの時の高さ
    return _getMainAxisStyle('height', vAlign, vSize, vAdjust);
  } else {
    // 横並びの時の高さ
    return _getFlexClossAxisStyle('height', vAlign, vSize, vAdjust);
  }
}
