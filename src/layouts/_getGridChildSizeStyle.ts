import { CSSProperties } from 'react';
import _getGridClossAxisStyle from './_getGridClossAxisStyle';
import { AlignProps, ChildSizeProps, Orientation } from './types';

type Options = ChildSizeProps & AlignProps;

export default function _getGridChildSizeStyle(
  orientation: Orientation,
  options: Options = {},
): CSSProperties {
  const { childHeight, childWidth, vAlign, hAlign } = options;
  if (orientation === 'vertical') {
    return _getGridClossAxisStyle('width', childWidth, hAlign);
  } else {
    return _getGridClossAxisStyle('height', childHeight, vAlign);
  }
}
