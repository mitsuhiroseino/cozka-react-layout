import {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type BalanceLayoutProps = LayoutPropsBase<'balance'> &
  AdjustProps &
  AlignProps &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
