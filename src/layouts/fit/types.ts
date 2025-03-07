import { LayoutPropsBase, OrientationProps, SpacingProps } from '../types';

export type FitLayoutProps = LayoutPropsBase<'fit'> &
  SpacingProps &
  OrientationProps;
