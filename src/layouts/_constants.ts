import { BalanceLayoutProps } from './balance';
import { BrickLayoutProps } from './brick';
import { ConformLayoutProps } from './conform';
import { MatrixLayoutProps } from './matrix';
import { PlotLayoutProps } from './plot';
import { StackLayoutProps } from './stack';

export const LAYOUT_PROPS_KEYS: {
  [K in keyof Required<
    BalanceLayoutProps &
      BrickLayoutProps &
      ConformLayoutProps &
      MatrixLayoutProps &
      PlotLayoutProps &
      StackLayoutProps
  >]: number;
} = {
  layout: 1,
  orientation: 1,
  children: 1,
  childStyle: 1,
  scroll: 1,
  spacing: 1,
  hAlign: 1,
  hSize: 1,
  hAdjust: 1,
  hCount: 1,
  hSpacing: 1,
  hTemplate: 1,
  vAlign: 1,
  vSize: 1,
  vAdjust: 1,
  vCount: 1,
  vSpacing: 1,
  vTemplate: 1,
};

export const MIN_MAX_PROPS = {
  height: {
    min: 'minHeight',
    max: 'maxHeight',
  },
  width: {
    min: 'minWidth',
    max: 'maxWidth',
  },
};
