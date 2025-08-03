import { CSSProperties } from 'react';
import _getGridClossAxisStyle from './_getGridClossAxisStyle';
import { AlignProps, ChildSizeProps, Orientation } from './types';

type Options = ChildSizeProps & AlignProps;

export default function _getGridChildSizeForItemsStyle(
  orientation: Orientation,
  options: Options = {},
): CSSProperties {
  const { vSize, hSize, vAlign, hAlign } = options;
  const style: CSSProperties = {
    height: vSize,
    width: hSize,
  };
  if (vAlign === 'fit') {
    style.height = 'auto';
    style.minHeight = 0;
  }
  if (hAlign === 'fit') {
    style.width = 'auto';
    style.minWidth = 0;
  }
  return style;
}
