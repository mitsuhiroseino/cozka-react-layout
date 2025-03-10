import { ORIENTATION } from '../_constants';
import _getFlexChildHeightStyle from '../_getFlexChildHeightStyle';
import _getFlexChildWidthStyle from '../_getFlexChildWidthStyle';
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
      hSpacing = spacing,
      vSpacing = spacing,
    } = props;
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing,
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...ORIENTATION[orientation],
    };
  },
  getChildStyle: (props) => {
    const {
      orientation,
      childHeight,
      childHeightSizing,
      childWidth,
      childWidthSizing,
    } = props;
    return {
      ..._getFlexChildHeightStyle(orientation, childHeight, childHeightSizing),
      ..._getFlexChildWidthStyle(orientation, childWidth, childWidthSizing),
    };
  },
};
export default layout;
