import {
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type BalanceLayoutProps = LayoutPropsBase<'balance'> &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
