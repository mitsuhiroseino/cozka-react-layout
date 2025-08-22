import unit from '@cozka/react-utils/unit';
import { CSSProperties } from 'react';
import { MIN_MAX_PROPS } from './_constants';
import {
  AlignHorizontal,
  AlignVertical,
  ChildSize,
  LayoutAdjust,
} from './types';

/**
 * 交差軸方向のスタイル
 * @param axis 高さ or 幅
 * @param align 位置
 * @param size サイズ
 * @param adjust サイズの調整
 * @returns スタイル
 */
export default function _getFlexClossAxisStyle(
  axis: 'height' | 'width',
  align: AlignVertical | AlignHorizontal,
  size: ChildSize,
  adjust: LayoutAdjust,
): CSSProperties {
  const { min, max } = MIN_MAX_PROPS[axis];
  if (align === 'fit') {
    return {
      [axis]: 'auto',
      [min]: '100%',
    };
  } else if (adjust === 'expand') {
    // 伸ばす
    return {
      [axis]: size,
      [min]: '100%',
    };
  } else if (adjust === 'narrow') {
    // 縮める
    if (size == null) {
      return {
        [min]: 0,
        [max]: '100%',
      };
    } else {
      return {
        [axis]: `min(${unit(size)}, 100%)`,
        [min]: 0,
      };
    }
  } else if (size != null && size !== '') {
    // 指定のサイズ
    return {
      [axis]: size,
      [min]: 0,
    };
  } else {
    // 指定なし
    return {
      [min]: 0,
    };
  }
}
