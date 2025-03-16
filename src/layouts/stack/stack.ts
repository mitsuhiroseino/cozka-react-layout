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
    } = props;
    return _getFlexContainerStyle(orientation, {
      vAlign,
      hAlign,
      vSpacing,
      hSpacing,
    });
  },
  getChildStyle: (props) => {
    const { orientation, vAlign, hAlign, vAdjust, hAdjust, vSize, hSize } =
      props;

    return {
      ..._getFlexChildHeightStyle(orientation, vAlign, vSize, vAdjust),
      ..._getFlexChildWidthStyle(orientation, hAlign, hSize, hAdjust),
    };
  },
};
export default layout;
