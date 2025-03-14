import { CSSProperties } from 'react';
import _getClossAxisStyle from './_getFlexClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { ChildSize, HAlign, Orientation, SizeAdjust } from './types';

export default function _getFlexChildWidthStyle(
  orientation: Orientation,
  hAlign: HAlign,
  hAdjust: SizeAdjust,
  childWidth: ChildSize,
): CSSProperties {
  if (orientation === 'vertical') {
    // 縦並びの時の幅
    return _getClossAxisStyle('width', hAdjust, childWidth);
  } else {
    // 横並びの時の幅
    return _getMainAxisStyle('width', hAlign, hAdjust, childWidth);
  }
}
