import { Layout } from '../types';
import { FitLayoutProps } from './types';

/**
 * fitレイアウト
 *
 * - 子要素を親と同じ大きさで配置する
 */
const layout: Layout<FitLayoutProps> = {
  name: 'fit',
  getContainerStyle: () => {
    return {
      display: 'grid',
    };
  },
  getChildStyle: () => {
    return {
      height: '100%',
      width: '100%',
    };
  },
};
export default layout;
