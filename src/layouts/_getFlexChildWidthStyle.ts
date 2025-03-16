import { CSSProperties } from 'react';
import _getFlexClossAxisStyle from './_getFlexClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { ChildSize, HAlign, Orientation, SizeAdjust } from './types';

export default function _getFlexChildWidthStyle(
  orientation: Orientation,
  hAlign: HAlign,
  hSize: ChildSize,
  hAdjust: SizeAdjust,
): CSSProperties {
  if (orientation === 'vertical') {
    // 縦並びの時の幅
    return _getFlexClossAxisStyle('width', hAlign, hSize, hAdjust);
  } else {
    // 横並びの時の幅
    return _getMainAxisStyle('width', hAlign, hSize, hAdjust);
  }
}
