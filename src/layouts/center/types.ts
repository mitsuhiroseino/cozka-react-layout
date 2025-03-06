import { ChildSizeProps, LayoutPropsBase } from '../types';

export type CenterLayoutProps = LayoutPropsBase<'center'> &
  ChildSizeProps & {
    /**
     * 子要素を並べる方向
     */
    orientation?: 'horizontal' | 'vertical';
  };
