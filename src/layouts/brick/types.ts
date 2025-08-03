import {
  AdjustProps,
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
  AdjustProps &
  AlignProps &
  ChildCountProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
