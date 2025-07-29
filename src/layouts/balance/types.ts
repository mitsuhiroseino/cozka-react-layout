import {
  AdjustProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type BalanceLayoutProps = LayoutPropsBase<'balance'> &
  AdjustProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
