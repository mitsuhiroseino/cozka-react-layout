import { CSSProperties } from 'react';
import {
  AdjustProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type MatrixLayoutProps = LayoutPropsBase<'matrix'> &
  AdjustProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps & {
    /**
     * 横方向の要素数
     */
    hCount?: number;

    /**
     * 縦方向の要素数
     */
    vCount?: number;

    /**
     * 横方向の設定
     * このプロパティが設定されている場合、hCount,childWidthは無効
     */
    hTemplate?: Template | (string | number)[];

    /**
     * 縦方向の設定
     * このプロパティが設定されている場合、vCount,childHeightは無効
     */
    vTemplate?: Template | (string | number)[];
  };

type Template = CSSProperties['gridTemplateColumns'] &
  CSSProperties['gridTemplateRows'];
