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
 *   - `hAlign='stretch'`
 * - orientation=`vertical`の場合、下記のプロパティは無効
 *   - `vAlign='stretch'`
 */
export type SolidLayoutProps = LayoutPropsBase<'solid'> &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
