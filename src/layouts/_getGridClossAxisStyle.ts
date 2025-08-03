import { CSSProperties } from 'react';
import _unit from './_unit';
import { ChildSize, HAlign, SizeAdjust, VAlign } from './types';

/**
 * 交差軸方向のスタイル
 * @param type 高さ or 幅
 * @param align 位置
 * @param adjust サイズ調整
 * @param size サイズ
 * @returns スタイル
 */
export default function _getGridClossAxisStyle(
  type: 'height' | 'width',
  align: HAlign | VAlign,
  adjust: SizeAdjust,
  size: ChildSize,
): CSSProperties {
  const { min, max } =
    type === 'height'
      ? {
          min: 'minHeight',
          max: 'maxHeight',
        }
      : {
          min: 'minWidth',
          max: 'maxWidth',
        };

  const style: CSSProperties = {};
  if (align === 'fit') {
    // 親のサイズに合わせる
    style[type] = 'auto';
    style[min] = 0;
  } else if (size != null && size !== '') {
    // 指定のサイズ
    style[type] = size;
    style[min] = 0;
  } else {
    // 指定なし
    style[min] = 0;
  }

  if (adjust === 'narrow') {
    // 子要素のサイズよりも親要素のサイズが小さくなったら親のサイズに合わせる
    style[max] = style[type];
    style[type] = '100%';
  } else if (adjust === 'expand') {
    // 子要素のサイズよりも親要素のサイズが大きくなったら親のサイズに合わせる
    style[min] = '100%';
  }

  return style;
}
