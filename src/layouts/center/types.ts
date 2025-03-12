import {
  AdjustProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type CenterLayoutProps = LayoutPropsBase<'center'> &
  AdjustProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
