import {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
  WrapProps,
} from '../types';

/**
 * stackのプロパティ
 */
export type StackLayoutProps = LayoutPropsBase<'stack'> &
  AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps &
  WrapProps;
