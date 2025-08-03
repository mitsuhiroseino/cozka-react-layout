import {
  AlignProps,
  ChildCountProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

/**
 * brickのプロパティ
 */
export type BrickLayoutProps = LayoutPropsBase<'brick'> &
  AlignProps &
  ChildCountProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
