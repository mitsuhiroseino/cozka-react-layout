import { CSSProperties } from 'react';
import _getClossAxisStyle from './_getClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { ChildSize, Orientation, SizeAdjust } from './types';

export default function _getFlexChildHeightStyle(
  orientation: Orientation,
  vAdjust: SizeAdjust,
  childHeight: ChildSize,
  wrapChildren?: boolean,
): CSSProperties {
  if (orientation === 'vertical') {
    // 縦並びの時の高さ
    return _getMainAxisStyle('height', vAdjust, childHeight, wrapChildren);
  } else {
    // 横並びの時の高さ
    return _getClossAxisStyle('height', vAdjust, childHeight);
  }
}
