import { AbsoluteLayoutProps } from './layouts/absolute';
import { CenterLayoutProps } from './layouts/center';
import { FitLayoutProps } from './layouts/fit';
import { HorizontalLayoutProps } from './layouts/horizontal';
import { LiquidLayoutProps } from './layouts/liquid';
import { MatrixLayoutProps } from './layouts/matrix';
import { SolidLayoutProps } from './layouts/solid';
import { VerticalLayoutProps } from './layouts/vertical';

export const LAYOUT_PROPS_KEYS: {
  [K in keyof Required<
    AbsoluteLayoutProps &
      CenterLayoutProps &
      FitLayoutProps &
      HorizontalLayoutProps &
      LiquidLayoutProps &
      MatrixLayoutProps &
      SolidLayoutProps &
      VerticalLayoutProps
  >]: number;
} = {
  layout: 1,
  scroll: 1,
  children: 1,
  childHeight: 1,
  childWidth: 1,
  spacing: 1,
  hSpacing: 1,
  vSpacing: 1,
  vAlign: 1,
  hAlign: 1,
  wrapChildren: 1,
  evenSize: 1,
  childMinWidth: 1,
  hCount: 1,
  vCount: 1,
  hTemplate: 1,
  vTemplate: 1,
};
