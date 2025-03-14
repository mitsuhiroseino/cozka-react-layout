import _getGridChildSizeStyle from '../_getGridChildSizeStyle';
import _getGridContainerStyle from '../_getGridContainerStyle';
import { Layout } from '../types';
import { LiquidLayoutProps } from './types';

/**
 * liquidレイアウト
 *
 * - 子要素を格子状に並べる
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
      vAlign,
      hAlign,
      spacing,
      vSpacing = spacing,
      hSpacing = spacing,
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
      vSpacing,
      hSpacing,
      childHeight,
      childWidth,
    });
  },
  getChildStyle: (props) => {
    let { orientation, vAlign, hAlign, childHeight, childWidth } = props;
    if (orientation === 'vertical') {
      hAlign = 'fit';
    } else {
      vAlign = 'fit';
    }

    return _getGridChildSizeStyle(orientation, {
      vAlign,
      hAlign,
      childHeight,
      childWidth,
    });
  },
};
export default layout;
