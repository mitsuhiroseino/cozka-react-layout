import _getClossAxisStyle from '../_getClossAxisStyle';
import _getGridContainerStyle from '../_getGridContainerStyle';
import { Layout } from '../types';
import { SolidLayoutProps } from './types';

/**
 * solidレイアウト
 *
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
      hAlign,
      vAlign,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
      childHeight,
      childWidth,
    } = props;
    return _getGridContainerStyle(orientation, {
      hAlign,
      vAlign,
      hSpacing,
      vSpacing,
      childHeight: childHeight,
      childWidth: childWidth,
    });
  },
  getChildStyle: (props) => {
    const {
      orientation,
      childHeight,
      childHeightSizing,
      childWidth,
      childWidthSizing,
    } = props;
    if (orientation === 'vertical') {
      return _getClossAxisStyle('width', childWidth, childWidthSizing);
    } else {
      return _getClossAxisStyle('height', childHeight, childHeightSizing);
    }
  },
};
export default layout;
