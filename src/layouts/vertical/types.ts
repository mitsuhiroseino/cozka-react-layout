import {
  ChildSizeProps,
  HAlign,
  LayoutPropsBase,
  SpaceAlign,
  SpacingProps,
  VAlign,
} from '../types';

/**
 * verticalのプロパティ
 */
export type VerticalLayoutProps = LayoutPropsBase<'vertical'> &
  ChildSizeProps &
  SpacingProps & {
    /**
     * 子要素の横位置
     */
    hAlign?: VerticalHAlign;

    /**
     * 子要素の縦位置
     */
    vAlign?: VerticalVAlign;

    /**
     * 子要素が親要素の領域を超えたら折り返す
     */
    wrapChildren?: boolean;

    /**
     * vAlign=`stretch`の時に子要素の幅を全て同じにする
     */
    evenSize?: boolean;
  };

/**
 * 縦並びの横位置の値
 */
export type VerticalHAlign = HAlign | SpaceAlign;

/**
 * 縦並びの縦位置の値
 */
export type VerticalVAlign = VAlign | SpaceAlign;
