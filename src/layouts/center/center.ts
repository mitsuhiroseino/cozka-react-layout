import _getFlexChildHeightStyle from '../_getFlexChildHeightStyle';
import _getFlexChildWidthStyle from '../_getFlexChildWidthStyle';
import _getFlexContainerStyle from '../_getFlexContainerStyle';
import { Layout } from '../types';
import { CenterLayoutProps } from './types';

/**
 * centerレイアウト
 *
 * - 子要素を上下中央に配置する
 */
const layout: Layout<CenterLayoutProps> = {
  name: 'center',
  defaultProps: {
    orientation: 'horizontal',
  },
  getContainerStyle: (props) => {
    const {
      orientation,
      spacing,
      vSpacing = spacing,
      hSpacing = spacing,
    } = props;
    return _getFlexContainerStyle(orientation, {
      vAlign: 'middle',
      hAlign: 'center',
      vSpacing,
      hSpacing,
    });
  },
  getChildStyle: (props) => {
    const { orientation, vAdjust, hAdjust, vSize, hSize } = props;
    return {
      ..._getFlexChildHeightStyle(orientation, 'middle', vSize, vAdjust),
      ..._getFlexChildWidthStyle(orientation, 'center', hSize, hAdjust),
    };
  },
};
export default layout;
