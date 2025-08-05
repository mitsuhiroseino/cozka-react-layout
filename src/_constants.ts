import { AbsoluteLayoutProps } from './layouts/absolute';
import { BalanceLayoutProps } from './layouts/balance';
import { BrickLayoutProps } from './layouts/brick';
import { FillLayoutProps } from './layouts/fill';
import { MatrixLayoutProps } from './layouts/matrix';
import { StackLayoutProps } from './layouts/stack';

export const LAYOUT_PROPS_KEYS: {
  [K in keyof Required<
    AbsoluteLayoutProps &
      BrickLayoutProps &
      FillLayoutProps &
      BalanceLayoutProps &
      MatrixLayoutProps &
      StackLayoutProps
  >]: number;
} = {
  vSize: 1,
  vAdjust: 1,
  children: 1,
  childStyle: 1,
  hSize: 1,
  hAdjust: 1,
  hAlign: 1,
  hCount: 1,
  hSpacing: 1,
  hTemplate: 1,
  layout: 1,
  orientation: 1,
  scroll: 1,
  spacing: 1,
  vAlign: 1,
  vCount: 1,
  vSpacing: 1,
  vTemplate: 1,
};
