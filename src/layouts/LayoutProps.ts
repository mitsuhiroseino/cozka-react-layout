import { AbsoluteLayoutProps } from './absolute';
import { BalanceLayoutProps } from './balance';
import { BrickLayoutProps } from './brick';
import { FillLayoutProps } from './fill';
import { MatrixLayoutProps } from './matrix';
import { StackLayoutProps } from './stack';

/**
 * 全レイアウトのプロパティ
 */
type LayoutProps =
  | AbsoluteLayoutProps
  | BalanceLayoutProps
  | BrickLayoutProps
  | FillLayoutProps
  | MatrixLayoutProps
  | StackLayoutProps;

export default LayoutProps;
