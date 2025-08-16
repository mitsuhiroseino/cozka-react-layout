import { CSSProperties, ReactNode } from 'react';

/**
 * レイアウト種別
 */
export type LayoutType =
  | 'balance'
  | 'brick'
  | 'conform'
  | 'matrix'
  | 'plot'
  | 'stack';

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
   * 子要素の横位置
   */
  hAlign?: HAlign;

  /**
   * 子要素の縦位置
   */
  vAlign?: VAlign;
};

/**
 * 子要素のサイズ調整
 */
export type AdjustProps = {
  /**
   * 子要素の幅の調整
   * hSizeを指定した場合に有効
   * デフォルトは`none`
   */
  hAdjust?: SizeAdjust;

  /**
   * 子要素の高さの調整
   * vSizeを指定した場合に有効
   * デフォルトは`none`
   */
  vAdjust?: SizeAdjust;
};

/**
 * 子要素のサイズ
 */
export type ChildSizeProps = {
  /**
   * 子要素の高さ
   */
  hSize?: ChildSize;

  /**
   * 子要素の高さ
   */
  vSize?: ChildSize;
};

/**
 * 子要素の数
 */
export type ChildCountProps = {
  /**
   * 横方向の要素数
   */
  hCount?: number;

  /**
   * 縦方向の要素数
   */
  vCount?: number;
};

/**
 * gridのテンプレート
 */
export type GridTemplateProps = {
  /**
   * 横方向の設定
   * このプロパティが設定されている場合、hCount,hSizeは無効
   */
  hTemplate?: GridTemplate | (string | number)[];

  /**
   * 縦方向の設定
   * このプロパティが設定されている場合、vCount,vSizeは無効
   */
  vTemplate?: GridTemplate | (string | number)[];
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
 * 親要素のサイズを基準にした子要素のサイズ調整
 *
 * - `none`
 *   - 親のサイズに足りないとき: そのまま
 *   - 親のサイズを超えるとき: そのまま
 * - `expand`
 *   - 親のサイズに足りないとき: 伸ばす
 *   - 親のサイズを超えるとき: そのまま
 * - `narrow`
 *   - 親のサイズに足りないとき: そのまま
 *   - 親のサイズを超えるとき: 縮める
 */
export type SizeAdjust = 'none' | 'expand' | 'narrow';

/**
 * 子要素の高さ or 幅
 */
export type ChildSize = CSSProperties['flexBasis'];

/**
 * 余白
 */
export type Spacing = CSSProperties['gap'];

/**
 * gridのテンプレート
 */
export type GridTemplate = CSSProperties['gridTemplateColumns'] &
  CSSProperties['gridTemplateRows'];
