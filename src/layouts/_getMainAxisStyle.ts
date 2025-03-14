import { CSSProperties } from 'react';
import _unit from './_unit';
import { ChildSize, HAlign, SizeAdjust, VAlign } from './types';

const MIN_SIZE = {
  height: 'minHeight',
  width: 'minWidth',
};

/**
 * 主軸方向のスタイル
 * @param type 高さ or 幅
 * @param adjust サイズの調整方法
 * @param size サイズ
 * @returns スタイル
 */
export default function _getMainAxisStyle(
  type: 'height' | 'width',
  align: VAlign | HAlign,
  size: ChildSize,
  adjust: SizeAdjust = 'none',
): CSSProperties {
  const minSize = MIN_SIZE[type];
  let style;
  if (align === 'fit') {
    style = {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      [minSize]: 0,
    };
  } else if (adjust === 'expand') {
    style = {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 'auto',
      [minSize]: 0,
    };
  } else if (adjust === 'narrow') {
    style = {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      [minSize]: 0,
    };
  } else {
    // 指定なし
    style = {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      [minSize]: 0,
    };
  }

  if (size != null && size !== '') {
    style.flexBasis = _unit(size);
  }

  return style;
}
