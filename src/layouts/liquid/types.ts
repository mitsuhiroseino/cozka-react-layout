import {
  ChildSizeProps,
  LayoutPropsBase,
  SizingAlign,
  SpaceAlign,
  SpacingProps,
  VAlign,
} from '../types';

export type LiquidLayoutProps = LayoutPropsBase<'liquid'> &
  Pick<ChildSizeProps, 'childHeight'> &
  SpacingProps & {
    /**
     * 子要素の最小幅
     */
    childMinWidth?: string | number;

    /**
     * 子要素の縦位置
     */
    vAlign?: LiguidVAlign;
  };

export type LiguidVAlign = VAlign | SizingAlign | SpaceAlign;
