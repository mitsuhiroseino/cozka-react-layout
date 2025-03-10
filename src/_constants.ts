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
  childHeight: 1,
  childHeightSizing: 1,
  childMinHeight: 1,
  childMinWidth: 1,
  children: 1,
  childStyle: 1,
  childWidth: 1,
  childWidthSizing: 1,
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
  wrapChildren: 1,
};
