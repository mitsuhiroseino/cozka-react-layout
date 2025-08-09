import { LayoutPropsBase, OrientationProps, SpacingProps } from '../types';

export type ConformLayoutProps = LayoutPropsBase<'conform'> &
  OrientationProps &
  SpacingProps;
