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
 * - orientation=`vertical`の場合、下記のプロパティは無効
 *   - `vAlign`
 *   - `childHeight`
 *   - `childHeightSizing`
 */
export type LiquidLayoutProps = LayoutPropsBase<'liquid'> &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
