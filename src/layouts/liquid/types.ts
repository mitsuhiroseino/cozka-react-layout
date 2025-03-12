import {
  AdjustProps,
  AlignProps,
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
 *   - `hAdjust`
 *   - `childWidth`
 * - orientation=`vertical`の場合、下記のプロパティは無効
 *   - `vAlign`
 *   - `vAdjust`
 *   - `childHeight`
 */
export type LiquidLayoutProps = LayoutPropsBase<'liquid'> &
  AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
