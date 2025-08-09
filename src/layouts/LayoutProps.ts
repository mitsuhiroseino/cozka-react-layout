import { BalanceLayoutProps } from './balance';
import { BrickLayoutProps } from './brick';
import { ConformLayoutProps } from './conform';
import { MatrixLayoutProps } from './matrix';
import { PlotLayoutProps } from './plot';
import { StackLayoutProps } from './stack';

/**
 * 全レイアウトのプロパティ
 */
type LayoutProps =
  | PlotLayoutProps
  | BalanceLayoutProps
  | BrickLayoutProps
  | ConformLayoutProps
  | MatrixLayoutProps
  | StackLayoutProps;

export default LayoutProps;
