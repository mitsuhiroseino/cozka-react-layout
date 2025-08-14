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
    vAlign: 'top',
    hAlign: 'left',
  },
  getContainerStyle: (props) => {
    const { orientation, ...rest } = props;

    return _getGridContainerForContentStyle(orientation, rest);
  },
  getChildStyle: (props) => {
    const { orientation, vAlign, vSize, vAdjust, hAlign, hSize, hAdjust } =
      props;

    return {
      ..._getGridChildAxisStyle(orientation, 'height', vAlign, vSize, vAdjust),
      ..._getGridChildAxisStyle(orientation, 'width', hAlign, hSize, hAdjust),
    };
  },
};
export default layout;
