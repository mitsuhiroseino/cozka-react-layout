import { LayoutPropsBase } from '../types';

export type FitLayoutProps = LayoutPropsBase<'fit'> & {
  /**
   * 子要素を並べる方向
   */
  orientation?: 'horizontal' | 'vertical';
};
