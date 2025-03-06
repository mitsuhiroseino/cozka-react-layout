import { CSSProperties, ReactElement, ReactNode } from 'react';
import { AbsoluteLayoutProps } from './absolute';
import { CenterLayoutProps } from './center';
import { FitLayoutProps } from './fit';
import { HorizontalLayoutProps } from './horizontal';
import { LiquidLayoutProps } from './liquid';
import { MatrixLayoutProps } from './matrix';
import { SolidLayoutProps } from './solid';
import { VerticalLayoutProps } from './vertical';

/**
 * レイアウト種別
 */
export type LayoutType =
  | 'absolute'
  | 'center'
  | 'fit'
  | 'horizontal'
  | 'liquid'
  | 'matrix'
  | 'solid'
  | 'vertical';

/**
 * 各レイアウトのプロパティ
 */
export type LayoutProps =
  | AbsoluteLayoutProps
  | CenterLayoutProps
  | FitLayoutProps
  | HorizontalLayoutProps
  | LiquidLayoutProps
  | MatrixLayoutProps
  | SolidLayoutProps
  | VerticalLayoutProps;

/**
 * レイアウトの共通プロパティ
 */
export type LayoutPropsBase<L extends LayoutType> = {
  /**
   * レイアウト種別
   */
  layout?: L;

  /**
   * スクロールの有無
   */
  scroll?: boolean;

  /**
   * 子要素
   */
  children?: ReactNode;
};

/**
 * 横位置
 */
export type HAlign = 'left' | 'center' | 'right';

/**
 * 縦位置
 */
export type VAlign = 'top' | 'middle' | 'bottom';

/**
 * 親要素のサイズに子要素のサイズを合わせる配置
 *
 * - `fit`
 *   - 足りないとき: 伸ばす
 *   - 超えるとき: 縮める
 * - `stretch`
 *   - 足りないとき: 伸ばす
 *   - 超えるとき: そのまま
 */
export type SizingAlign = 'fit' | 'stretch';

/**
 * 均等割りにした際の余白の割り振り
 */
export type SpaceAlign = 'space-between' | 'space-around' | 'space-evenly';

/**
 * 子要素のサイズ
 */
export type ChildSizeProps = {
  /**
   * 子要素の高さ
   */
  childHeight?: number | string;

  /**
   * 子要素の高さ
   */
  childWidth?: number | string;
};

/**
 * 要素間の余白
 */
export type SpacingProps = {
  /**
   * 余白
   */
  spacing?: CSSProperties['gap'];

  /**
   * 横方向の余白
   */
  hSpacing?: CSSProperties['columnGap'];

  /**
   * 縦方向の余白
   */
  vSpacing?: CSSProperties['rowGap'];
};

/**
 * レイアウト設定
 */
export type Layout<P = {}> = {
  /**
   * レイアウト名
   */
  name: string;

  /**
   * プロパティのデフォルト値
   */
  defaultProps?: Partial<P>;

  /**
   * コンテナーのスタイル
   * @param props
   * @returns
   */
  getContainerStyle?: (props: P) => CSSProperties;

  /**
   * 子要素のスタイル
   * @param props
   * @returns
   */
  getChildStyle?: (props: P) => CSSProperties;
};
