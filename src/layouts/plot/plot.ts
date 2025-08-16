import { Layout } from '../types';
import { PlotLayoutProps } from './types';

/**
 * plotレイアウト
 *
 * - 子要素のtop,left,bottom,rightに従い配置する
 */
const layout: Layout<PlotLayoutProps> = {
  name: 'plot',
  getContainerStyle: () => {
    return {
      display: 'block',
      position: 'relative',
    };
  },
  getChildStyle: (props) => {
    const { hSize, vSize } = props;
    return {
      position: 'absolute',
      width: hSize,
      height: vSize,
    };
  },
};
export default layout;
