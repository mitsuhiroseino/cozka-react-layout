import {
  ChildSizeProps,
  HAlign,
  LayoutPropsBase,
  SizingAlign,
  SpaceAlign,
  SpacingProps,
  VAlign,
} from '../types';

/**
 * solidのプロパティ
 */
export type SolidLayoutProps = LayoutPropsBase<'solid'> &
  ChildSizeProps &
  SpacingProps & {
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
export type SolidVAlign = VAlign | SpaceAlign | SizingAlign;
