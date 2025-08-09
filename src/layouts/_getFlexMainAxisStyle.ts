import { CSSProperties } from 'react';
import _getMinMaxPropNames from './_getMinMaxPropNames';
import _unit from './_unit';
import { ChildSize, HAlign, SizeAdjust, VAlign } from './types';

/**
 * 主軸方向のスタイル
 * @param axis 高さ or 幅
 * @param align 位置
 * @param size サイズ
 * @param adjust サイズの調整
 * @returns スタイル
 */
export default function _getFlexMainAxisStyle(
  axis: 'height' | 'width',
  align: VAlign | HAlign,
  size: ChildSize,
  adjust: SizeAdjust,
): CSSProperties {
  const { min } = _getMinMaxPropNames(axis);
  let style;
  if (align === 'fit') {
    style = {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      [min]: 0,
    };
  } else if (adjust === 'expand') {
    style = {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 'auto',
      [min]: 0,
    };
  } else if (adjust === 'narrow') {
    style = {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      [min]: 0,
    };
  } else {
    // 指定なし
    style = {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      [min]: 0,
    };
  }

  if (size != null && size !== '') {
    style.flexBasis = _unit(size);
  }

  return style;
}
