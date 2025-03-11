import {
  AlignProps,
  ChildrenProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

/**
 * stackのプロパティ
 */
export type StackLayoutProps = LayoutPropsBase<'stack'> &
  AlignProps &
  ChildrenProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
