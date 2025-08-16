import _getGridChildAxisStyle from '../_getGridChildAxisStyle';
import _getGridContainerForContentStyle from '../_getGridContainerForContentStyle';
import { Layout } from '../types';
import { BrickLayoutProps } from './types';

/**
 * brickレイアウト
 *
 * - 子要素を格子状に並べる
 * - 子要素が親要素の横幅に収まる様に要素数を調整し表示する
 */
const layout: Layout<BrickLayoutProps> = {
  name: 'brick',
  defaultProps: {
    orientation: 'horizontal',
    hAlign: 'left',
    vAlign: 'top',
  },
  getContainerStyle: (props) => {
    const { orientation, ...rest } = props;

    return _getGridContainerForContentStyle(orientation, rest);
  },
  getChildStyle: (props) => {
    const { hAlign, hSize, hAdjust, vAlign, vSize, vAdjust } = props;

    return {
      ..._getGridChildAxisStyle('content', 'width', hAlign, hSize, hAdjust),
      ..._getGridChildAxisStyle('content', 'height', vAlign, vSize, vAdjust),
    };
  },
};
export default layout;
