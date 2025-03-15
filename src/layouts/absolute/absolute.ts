import { Layout } from '../types';
import { AbsoluteLayoutProps } from './types';

/**
 * absoluteレイアウト
 *
 * - 子要素のtop,left,bottom,rightに従い配置する
 */
const layout: Layout<AbsoluteLayoutProps> = {
  name: 'absolute',
  getContainerStyle: () => {
    return {
      display: 'block',
      position: 'relative',
    };
  },
  getChildStyle: (props) => {
    const { vSize, hSize } = props;
    return {
      position: 'absolute',
      height: vSize,
      width: hSize,
    };
  },
};
export default layout;
