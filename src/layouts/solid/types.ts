import {
  ChildCrossSizeProps,
  ChildSize,
  HAlign,
  LayoutPropsBase,
  OrientationProps,
  SpaceAlign,
  SpacingProps,
  VAlign,
} from '../types';

/**
 * solidのプロパティ
 */
export type SolidLayoutProps = LayoutPropsBase<'solid'> &
  ChildCrossSizeProps &
  OrientationProps &
  SpacingProps & {
    /**
     * 主軸方向の子要素の最小サイズ
     */
    mainSize?: ChildSize;

    /**
     * 子要素の横位置
     */
    hAlign?: SolidHAlign;

    /**
     * 子要素の縦位置
     */
    vAlign?: SolidVAlign;
  };

/**
 * 横並びの横位置の値
 */
export type SolidHAlign = HAlign | SpaceAlign;

/**
 * 横並びの縦位置の値
 */
export type SolidVAlign = VAlign | SpaceAlign;
