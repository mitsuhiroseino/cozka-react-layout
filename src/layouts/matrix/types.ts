import { CSSProperties } from 'react';
import { ChildSizeProps, LayoutPropsBase, SpacingProps } from '../types';

export type MatrixLayoutProps = LayoutPropsBase<'matrix'> &
  ChildSizeProps &
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
    hTemplate?: CSSProperties['gridTemplateColumns'] | (string | number)[];

    /**
     * 縦方向の設定
     * このプロパティが設定されている場合、vCount,childHeightは無効
     */
    vTemplate?: CSSProperties['gridTemplateRows'] | (string | number)[];
  };
