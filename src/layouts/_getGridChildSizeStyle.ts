import { CSSProperties } from 'react';
import _getGridClossAxisStyle from './_getGridClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { AlignProps, ChildSizeProps, Orientation } from './types';

type Options = ChildSizeProps & AlignProps;

export default function _getGridChildSizeStyle(
  orientation: Orientation,
  options: Options = {},
): CSSProperties {
  const { childHeight, childWidth, vAlign, hAlign } = options;
  return {
    ..._getGridClossAxisStyle('height', vAlign, childHeight),
    ..._getGridClossAxisStyle('width', hAlign, childWidth),
  };
}
