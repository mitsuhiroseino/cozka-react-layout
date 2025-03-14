import _getGridChildSizeStyle from '../_getGridChildSizeStyle';
import _getGridContainerStyle from '../_getGridContainerStyle';
import { Layout } from '../types';
import { SolidLayoutProps } from './types';

/**
 * solidレイアウト
 *
 * - 子要素を格子状に並べる
 * - 子要素が親要素の横幅に収まる様に要素数を調整し表示する
 */
const layout: Layout<SolidLayoutProps> = {
  name: 'solid',
  defaultProps: {
    orientation: 'horizontal',
    hAlign: 'left',
    vAlign: 'top',
  },
  getContainerStyle: (props) => {
    const {
      orientation,
      vAlign,
      hAlign,
      spacing,
      vSpacing = spacing,
      hSpacing = spacing,
      childHeight,
      childWidth,
    } = props;

    return _getGridContainerStyle(orientation, {
      vAlign,
      hAlign,
      vSpacing,
      hSpacing,
      childHeight,
      childWidth,
      fixed: true,
    });
  },
  getChildStyle: (props) => {
    const { orientation, vAlign, hAlign, childHeight, childWidth } = props;

    return _getGridChildSizeStyle(orientation, {
      vAlign,
      hAlign,
      childHeight,
      childWidth,
    });
  },
};
export default layout;
