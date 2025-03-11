import { CSSProperties, ReactNode } from 'react';
import { AbsoluteLayoutProps } from './absolute';
import { CenterLayoutProps } from './center';
import { FillLayoutProps } from './fill';
import { LiquidLayoutProps } from './liquid';
import { MatrixLayoutProps } from './matrix';
import { SolidLayoutProps } from './solid';
import { StackLayoutProps } from './stack';

/**
 * レイアウト種別
 */
export type LayoutType =
  | 'absolute'
  | 'center'
  | 'fill'
  | 'liquid'
  | 'matrix'
  | 'solid'
  | 'stack';

/**
 * 各レイアウトのプロパティ
 */
export type LayoutProps =
  | AbsoluteLayoutProps
  | CenterLayoutProps
  | FillLayoutProps
  | LiquidLayoutProps
  | MatrixLayoutProps
  | SolidLayoutProps
  | StackLayoutProps;

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

  /**
   * 子要素のスタイル
   */
  childStyle?: CSSProperties;
};

/**
 * 子要素を並べる方向
 */
export type OrientationProps = {
  /**
   * 並べる方向
   */
  orientation?: Orientation;
};

/**
 * 子要素の位置
 */
export type AlignProps = {
  /**
   * 子要素の横位置
   */
  hAlign?: HAlign;

  /**
   * 子要素の縦位置
   */
  vAlign?: VAlign;
};

/**
 * 子要素のサイズ
 */
export type ChildSizeProps = {
  /**
   * 子要素の高さ
   */
  childHeight?: ChildSize;

  /**
   * 子要素の高さ
   */
  childWidth?: ChildSize;

  /**
   * 子要素の高さの調整
   * デフォルトは`none`
   */
  childHeightSizing?: ChildSizing;

  /**
   * 子要素の幅の調整
   * デフォルトは`none`
   */
  childWidthSizing?: ChildSizing;
};

/**
 * 子要素グループ
 */
export type ChildrenProps = {
  /**
   * 子要素が親要素の領域を超えたら折り返す
   */
  wrapChildren?: boolean;
};

/**
 * 要素間の余白
 */
export type SpacingProps = {
  /**
   * 余白
   */
  spacing?: Spacing;

  /**
   * 横方向の余白
   */
  hSpacing?: Spacing;

  /**
   * 縦方向の余白
   */
  vSpacing?: Spacing;
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

/**
 * 横位置
 */
export type HAlign = 'left' | 'center' | 'right' | SpaceAlign;

/**
 * 縦位置
 */
export type VAlign = 'top' | 'middle' | 'bottom' | SpaceAlign;

/**
 * 均等割りにした際の余白の割り振り
 */
export type SpaceAlign = 'space-between' | 'space-around' | 'space-evenly';

/**
 * 並べる方向
 */
export type Orientation = 'horizontal' | 'vertical';

/**
 * 子要素の高さ or 幅
 */
export type ChildSize = CSSProperties['flexBasis'];

export type Spacing = CSSProperties['gap'];

/**
 * 親要素のサイズに子要素のサイズを合わせる方法
 *
 * - `none`
 *   - 足りないとき: そのまま
 *   - 超えるとき: そのまま
 * - `fit`
 *   - 足りないとき: 伸ばす
 *   - 超えるとき: 縮める
 * - `expand`
 *   - 足りないとき: 伸ばす
 *   - 超えるとき: そのまま
 * - `narrow`
 *   - 足りないとき: そのまま
 *   - 超えるとき: 縮める
 */
export type ChildSizing = 'none' | 'fit' | 'expand' | 'narrow';
