import { CSSProperties } from 'react';
import _getGridClossAxisStyle from './_getGridClossAxisStyle';
import _getMainAxisStyle from './_getMainAxisStyle';
import { AlignProps, ChildSizeProps, Orientation } from './types';

type Options = ChildSizeProps & AlignProps;

export default function _getGridChildSizeStyle(
  orientation: Orientation,
  options: Options = {},
): CSSProperties {
  const { vSize, hSize, vAlign, hAlign } = options;
  return {
    ..._getGridClossAxisStyle('height', vAlign, vSize),
    ..._getGridClossAxisStyle('width', hAlign, hSize),
  };
}
