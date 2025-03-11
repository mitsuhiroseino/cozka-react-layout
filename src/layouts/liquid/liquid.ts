import _getGridChildSizeStyle from '../_getGridChildSizeStyle';
import _getGridContainerStyle from '../_getGridContainerStyle';
import { Layout } from '../types';
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
      childHeight,
      childWidth,
    } = props;
    let options;
    if (orientation === 'vertical') {
      options = {
        hAlign,
        style: {
          alignContent: 'stretch',
        },
      };
    } else {
      options = {
        vAlign,
        style: {
          justifyContent: 'stretch',
        },
      };
    }

    return _getGridContainerStyle(orientation, {
      ...options,
      hSpacing,
      vSpacing,
      childHeight,
      childWidth,
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

    return _getGridChildSizeStyle(
      orientation,
      childHeight,
      childHeightSizing,
      childWidth,
      childWidthSizing,
    );
  },
};
export default layout;
