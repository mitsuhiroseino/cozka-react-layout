import { CSSProperties } from 'react';
import _unit from './_unit';
import { ChildSize, HAlign, VAlign } from './types';

const MIN_SIZE = {
  height: 'minHeight',
  width: 'minWidth',
};

/**
 * 交差軸方向のスタイル
 * @param type 高さ or 幅
 * @param adjust サイズの調整方法
 * @param size サイズ
 * @returns スタイル
 */
export default function _getGridClossAxisStyle(
  type: 'height' | 'width',
  size: ChildSize,
  align: HAlign | VAlign,
): CSSProperties {
  const minSize = MIN_SIZE[type];
  if (align === 'fit') {
    return {
      [type]: 'auto',
      [minSize]: 0,
    };
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
