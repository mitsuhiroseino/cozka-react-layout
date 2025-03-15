import _getGridChildSizeStyle from '../_getGridChildSizeStyle';
import _getGridContainerStyle from '../_getGridContainerStyle';
import _getMainAxisStyle from '../_getMainAxisStyle';
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

    return _getGridContainerStyle(orientation, rest);
  },
  getChildStyle: (props) => {
    const { orientation, vAlign, hAlign, vSize, hSize } = props;

    return _getGridChildSizeStyle(orientation, {
      vAlign,
      hAlign,
      vSize,
      hSize,
    });
  },
};
export default layout;
