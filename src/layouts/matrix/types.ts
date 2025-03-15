import {
  ChildCountProps,
  ChildSizeProps,
  GridTemplateProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type MatrixLayoutProps = LayoutPropsBase<'matrix'> &
  ChildCountProps &
  ChildSizeProps &
  GridTemplateProps &
  OrientationProps &
  SpacingProps;
