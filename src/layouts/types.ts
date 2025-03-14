import { CSSProperties, ReactNode } from 'react';
import { AbsoluteLayoutProps } from './absolute';
import { BrickLayoutProps } from './brick';
import { CenterLayoutProps } from './center';
import { FillLayoutProps } from './fill';
import { MatrixLayoutProps } from './matrix';
import { StackLayoutProps } from './stack';

/**
 * レイアウト種別
 */
export type LayoutType =
  | 'absolute'
  | 'brick'
  | 'center'
  | 'fill'
  | 'matrix'
  | 'stack';

/**
 * 各レイアウトのプロパティ
 */
export type LayoutProps =
  | AbsoluteLayoutProps
  | BrickLayoutProps
  | CenterLayoutProps
  | FillLayoutProps
  | MatrixLayoutProps
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
   * 子要素のスタイル
   */
  childStyle?: CSSProperties;

  /**
   * 子要素
   */
  children?: ReactNode;
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
   * 子要素の縦位置
   */
  vAlign?: VAlign;

  /**
   * 子要素の横位置
   */
  hAlign?: HAlign;
};

/**
 * 子要素のサイズ調整
 */
export type AdjustProps = {
  /**
   * 子要素全体の高さの調整
   * デフォルトは`none`
   */
  vAdjust?: SizeAdjust;

  /**
   * 子要素全体の幅の調整
   * デフォルトは`none`
   */
  hAdjust?: SizeAdjust;
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
   * 縦方向の余白
   */
  vSpacing?: Spacing;

  /**
   * 横方向の余白
   */
  hSpacing?: Spacing;
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
export type HAlign = 'left' | 'center' | 'right' | CommonAlign;

/**
 * 縦位置
 */
export type VAlign = 'top' | 'middle' | 'bottom' | CommonAlign;

/**
 * 縦横共通の位置
 */
export type CommonAlign =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'fit';

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
 * - `expand`
 *   - 足りないとき: 伸ばす
 *   - 超えるとき: そのまま
 * - `narrow`
 *   - 足りないとき: そのまま
 *   - 超えるとき: 縮める
 */
export type SizeAdjust = 'none' | 'expand' | 'narrow';
