import {
  ChildSizeProps,
  HAlign,
  LayoutPropsBase,
  SpaceAlign,
  SpacingProps,
  VAlign,
} from '../types';

/**
 * horizontalのプロパティ
 */
export type HorizontalLayoutProps = LayoutPropsBase<'horizontal'> &
  ChildSizeProps &
  SpacingProps & {
    /**
     * 子要素の横位置
     */
    hAlign?: HorizontalHAlign;

    /**
     * 子要素の縦位置
     */
    vAlign?: HorizontalVAlign;

    /**
     * 子要素が親要素の領域を超えたら折り返す
     */
    wrapChildren?: boolean;
  };

/**
 * 横並びの横位置の値
 */
export type HorizontalHAlign = HAlign | SpaceAlign;

/**
 * 横並びの縦位置の値
 */
export type HorizontalVAlign = VAlign | SpaceAlign;
