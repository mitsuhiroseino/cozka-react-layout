import {
  AlignProps,
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
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
