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
 * 主軸方向のスタイル
 * @param axis 高さ or 幅
 * @param align 位置
 * @param size サイズ
 * @param adjust サイズの調整
 * @returns スタイル
 */
export default function _getFlexMainAxisStyle(
  axis: 'height' | 'width',
  align: AlignVertical | AlignHorizontal,
  size: ChildSize,
  adjust: LayoutAdjust,
): CSSProperties {
  const { min } = MIN_MAX_PROPS[axis];
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
    style.flexBasis = unit(size);
  }

  return style;
}
