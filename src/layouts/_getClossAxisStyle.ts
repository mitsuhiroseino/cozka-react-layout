import { CSSProperties } from 'react';
import _unit from './_unit';
import { ChildSize, SizeAdjust } from './types';

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
 * @param adjust サイズの調整方法
 * @param size サイズ
 * @returns スタイル
 */
export default function _getClossAxisStyle(
  type: 'height' | 'width',
  adjust: SizeAdjust = 'none',
  size: ChildSize,
): CSSProperties {
  const minSize = MIN_SIZE[type];
  const maxSize = MAX_SIZE[type];
  if (adjust === 'fit') {
    // 伸縮する
    return {
      [type]: '100%',
      [minSize]: 0,
      [maxSize]: '100%',
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
