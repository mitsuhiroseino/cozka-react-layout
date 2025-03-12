import {
  AdjustProps,
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
 *   - `hAdjust`
 * - orientation=`vertical`の場合、下記のプロパティは無効
 *   - `vAdjust`
 */
export type SolidLayoutProps = LayoutPropsBase<'solid'> &
  AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
