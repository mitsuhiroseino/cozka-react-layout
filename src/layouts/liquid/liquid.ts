import _getClossAxisStyle from '../_getClossAxisStyle';
import _getGridContainerStyle from '../_getGridContainerStyle';
import { HAlign, Layout, VAlign } from '../types';
import { LiquidLayoutProps } from './types';

/**
 * liquidレイアウト
 *
 * - 子要素が親要素の横幅を満たすように伸縮する
 */
const layout: Layout<LiquidLayoutProps> = {
  name: 'liquid',
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
      childMinHeight,
      childMinWidth,
    } = props;
    return _getGridContainerStyle(orientation, {
      hAlign: (orientation === 'vertical' || hAlign) as HAlign | false,
      vAlign: (orientation === 'horizontal' || vAlign) as VAlign | false,
      hSpacing,
      vSpacing,
      childHeight: childMinHeight,
      childWidth: childMinWidth,
      style: { justifyContent: 'stretch' },
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
