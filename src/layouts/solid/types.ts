import {
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

/**
 * solidのプロパティ
 *
 * - orientation=`horizontal` or 未指定の場合、下記のプロパティは無効
 *   - `childWidthSizing`
 * - orientation=`vertical`の場合、下記のプロパティは無効
 *   - `childHeightSizing`
 */
export type SolidLayoutProps = LayoutPropsBase<'solid'> &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
