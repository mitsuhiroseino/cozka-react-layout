import {
  AlignProps,
  ChildSize,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

/**
 * liquidのプロパティ
 *
 * - orientation=`horizontal` or 未指定の場合、下記のプロパティは無効
 *   - `hAlign`
 *   - `childWidth`
 *   - `childWidthSizing`
 *   - `childMinHeight`
 * - orientation=`vertical`の場合、下記のプロパティは無効
 *   - `vAlign`
 *   - `childHeight`
 *   - `childHeightSizing`
 *   - `childMinWidth`
 */
export type LiquidLayoutProps = LayoutPropsBase<'liquid'> &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps & {
    /**
     * 子要素の最小の高さ
     */
    childMinHeight?: ChildSize;

    /**
     * 子要素の最小の幅
     */
    childMinWidth?: ChildSize;
  };
