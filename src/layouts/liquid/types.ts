import {
  ChildCrossSizeProps,
  ChildSize,
  LayoutPropsBase,
  OrientationProps,
  SpaceAlign,
  SpacingProps,
  VAlign,
} from '../types';

export type LiquidLayoutProps = LayoutPropsBase<'liquid'> &
  ChildCrossSizeProps &
  OrientationProps &
  SpacingProps & {
    /**
     * 主軸方向の子要素の最小サイズ
     */
    mainMinSize?: ChildSize;

    /**
     * 子要素の位置
     */
    align?: LiguidVAlign;
  };

export type LiguidVAlign = VAlign | SpaceAlign;
