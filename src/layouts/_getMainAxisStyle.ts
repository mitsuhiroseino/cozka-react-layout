import { CSSProperties } from 'react';
import { ChildSize, SizeAdjust } from './types';

const MIN_SIZE = {
  height: 'minHeight',
  width: 'minWidth',
};

/**
 * 主軸方向のスタイル
 * @param type 高さ or 幅
 * @param adjust サイズの調整方法
 * @param size サイズ
 * @param wrapChildren 折り返しの有無
 * @returns スタイル
 */
export default function _getMainAxisStyle(
  type: 'height' | 'width',
  adjust: SizeAdjust = 'none',
  size: ChildSize,
  wrapChildren?: boolean,
): CSSProperties {
  const minSize = MIN_SIZE[type];
  if (adjust === 'fit') {
    return {
      flexGrow: 1,
      flexShrink: wrapChildren ? 0 : 1, // 1だと1列に収まるようにshrinkさせてしまうので、折り返しがあるときは0にする
      flexBasis: size ?? 0,
      [minSize]: 0,
    };
  } else if (adjust === 'expand') {
    return {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: size ?? 0,
      [minSize]: 0,
    };
  } else if (adjust === 'narrow') {
    return {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: size ?? 0,
      [minSize]: 0,
    };
  } else if (size != null && size !== '') {
    // 指定の幅
    return {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: size,
      [minSize]: 0,
    };
  } else {
    // 指定なし
    return {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 0,
      [minSize]: 0,
    };
  }
}
