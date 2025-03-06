import { LayoutPropsBase } from '../types';

export type FitLayoutProps = LayoutPropsBase<'fit'> & {
  /**
   * 子要素が複数あった場合に並べる方向
   */
  orientation?: 'horizontal' | 'vertical';
};
