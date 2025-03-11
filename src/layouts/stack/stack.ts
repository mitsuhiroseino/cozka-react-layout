import _getFlexChildHeightStyle from '../_getFlexChildHeightStyle';
import _getFlexChildWidthStyle from '../_getFlexChildWidthStyle';
import _getFlexContainerStyle from '../_getFlexContainerStyle';
import { Layout } from '../types';
import { StackLayoutProps } from './types';

/**
 * stackレイアウト
 *
 * - 子要素を並べて配置する
 */
const layout: Layout<StackLayoutProps> = {
  name: 'stack',
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
      wrapChildren,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
    } = props;
    return _getFlexContainerStyle(orientation, {
      hAlign,
      vAlign,
      wrapChildren,
      hSpacing,
      vSpacing,
    });
  },
  getChildStyle: (props) => {
    const {
      orientation,
      childHeight,
      childHeightSizing,
      childWidth,
      childWidthSizing,
      wrapChildren,
    } = props;

    return {
      ..._getFlexChildHeightStyle(
        orientation,
        childHeight,
        childHeightSizing,
        wrapChildren,
      ),
      ..._getFlexChildWidthStyle(
        orientation,
        childWidth,
        childWidthSizing,
        wrapChildren,
      ),
    };
  },
};
export default layout;
