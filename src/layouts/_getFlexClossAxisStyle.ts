import { CSSProperties } from 'react';
import _unit from './_unit';
import { ChildSize, HAlign, SizeAdjust, VAlign } from './types';

const MIN_SIZE = {
  height: 'minHeight',
  width: 'minWidth',
};

const MAX_SIZE = {
  height: 'maxHeight',
  width: 'maxWidth',
};

/**
 * 交差軸方向のスタイル
 * @param type 高さ or 幅
 * @param align 位置
 * @param size サイズ
 * @param adjust サイズの調整
 * @returns スタイル
 */
export default function _getFlexClossAxisStyle(
  type: 'height' | 'width',
  align: VAlign | HAlign,
  size: ChildSize,
  adjust: SizeAdjust = 'none',
): CSSProperties {
  const minSize = MIN_SIZE[type];
  const maxSize = MAX_SIZE[type];
  if (align === 'fit') {
    return {
      [type]: 'auto',
      [minSize]: '100%',
    };
  } else if (adjust === 'expand') {
    // 伸ばす
    return {
      [type]: size,
      [minSize]: '100%',
    };
  } else if (adjust === 'narrow') {
    // 縮める
    if (size == null) {
      return {
        [minSize]: 0,
        [maxSize]: '100%',
      };
    } else {
      return {
        [type]: `min(${_unit(size)}, 100%)`,
        [minSize]: 0,
      };
    }
  } else if (size != null && size !== '') {
    // 指定のサイズ
    return {
      [type]: size,
      [minSize]: 0,
    };
  } else {
    // 指定なし
    return {
      [minSize]: 0,
    };
  }
}
