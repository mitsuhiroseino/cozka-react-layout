import {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

/**
 * stackのプロパティ
 */
export type StackLayoutProps = LayoutPropsBase<'stack'> &
  AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
