import { CSSProperties } from 'react';
import _getGridClossAxisStyle from './_getGridClossAxisStyle';
import { AdjustProps, AlignProps, ChildSizeProps, Orientation } from './types';

type Options = ChildSizeProps & AdjustProps & AlignProps;

export default function _getGridChildSizeStyle(
  orientation: Orientation,
  options: Options = {},
): CSSProperties {
  const { vSize, hSize, vAlign, hAlign, hAdjust, vAdjust } = options;
  return {
    ..._getGridClossAxisStyle('height', vAlign, vAdjust, vSize),
    ..._getGridClossAxisStyle('width', hAlign, hAdjust, hSize),
  };
}
