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
      vAlign,
      hAlign,
      spacing,
      vSpacing = spacing,
      hSpacing = spacing,
      wrapChildren,
    } = props;
    return _getFlexContainerStyle(orientation, {
      vAlign,
      hAlign,
      vSpacing,
      hSpacing,
      wrapChildren,
    });
  },
  getChildStyle: (props) => {
    const {
      orientation,
      vAdjust,
      hAdjust,
      childHeight,
      childWidth,
      wrapChildren,
    } = props;

    return {
      ..._getFlexChildHeightStyle(
        orientation,
        vAdjust,
        childHeight,
        wrapChildren,
      ),
      ..._getFlexChildWidthStyle(
        orientation,
        hAdjust,
        childWidth,
        wrapChildren,
      ),
    };
  },
};
export default layout;
