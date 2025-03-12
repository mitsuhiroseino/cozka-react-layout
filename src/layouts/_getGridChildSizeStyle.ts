import { CSSProperties } from 'react';
import _getClossAxisStyle from './_getClossAxisStyle';
import { ChildSize, Orientation, SizeAdjust } from './types';

export default function _getGridChildSizeStyle(
  orientation: Orientation,
  vAdjust: SizeAdjust,
  hAdjust: SizeAdjust,
  childHeight: ChildSize,
  childWidth: ChildSize,
): CSSProperties {
  if (orientation === 'vertical') {
    return _getClossAxisStyle('width', hAdjust, childWidth);
  } else {
    return _getClossAxisStyle('height', vAdjust, childHeight);
  }
}
