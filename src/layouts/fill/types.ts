import { LayoutPropsBase, OrientationProps, SpacingProps } from '../types';

export type FillLayoutProps = LayoutPropsBase<'fill'> &
  OrientationProps &
  SpacingProps;
