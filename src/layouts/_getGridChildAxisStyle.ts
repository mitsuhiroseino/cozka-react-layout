import { CSSProperties } from 'react';
import { MIN_MAX_PROPS } from './_constants';
import _unit from './_unit';
import { ChildSize, HAlign, Orientation, SizeAdjust, VAlign } from './types';

/**
 * display='grid'の時の子要素軸のスタイル
 * @param type 種別
 * @param axis 高さ or 幅
 * @param align 位置
 * @param size サイズ
 * @param adjust サイズ調整
 * @returns スタイル
 */
export default function _getGridChildAxisStyle(
  type: 'content' | 'items',
  axis: 'height' | 'width',
  align: HAlign | VAlign,
  size: ChildSize,
  adjust: SizeAdjust,
): CSSProperties {
  const { min, max } = MIN_MAX_PROPS[axis];

  const style: CSSProperties = {};
  if (align === 'fit') {
    // 親のサイズに合わせる
    style[axis] = 'auto';
    style[min] = 0;
  } else if (size != null && size !== '') {
    // 指定のサイズ
    style[axis] = size;
    style[min] = 0;
  } else {
    // 指定なし
    style[min] = 0;
  }

  if (type === 'content') {
    if (adjust === 'narrow') {
      // 子要素のサイズよりも親要素のサイズが小さくなったら親のサイズに合わせる
      style[min] = '100%';
      style[max] = style[axis];
      style[axis] = '100%';
    } else if (adjust === 'expand') {
      // 子要素のサイズよりも親要素のサイズが大きくなったら親のサイズに合わせる
      style[min] = style[axis];
      style[max] = '100%';
      style[axis] = '100%';
    }
  } else {
    if (adjust === 'narrow') {
      // 子要素のサイズよりも親要素のサイズが小さくなったら親のサイズに合わせる
      style[max] = style[axis];
      style[axis] = '100%';
    } else if (adjust === 'expand') {
      // 子要素のサイズよりも親要素のサイズが大きくなったら親のサイズに合わせる
      style[min] = style[axis];
      style[axis] = '100%';
    }
  }

  return style;
}
