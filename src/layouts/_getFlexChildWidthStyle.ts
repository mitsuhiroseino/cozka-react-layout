import { CSSProperties } from 'react';
import _getFlexClossAxisStyle from './_getFlexClossAxisStyle';
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
    return _getFlexClossAxisStyle('width', hAlign, childWidth, hAdjust);
  } else {
    // 横並びの時の幅
    return _getMainAxisStyle('width', hAlign, childWidth, hAdjust);
  }
}
