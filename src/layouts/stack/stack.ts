import _getFlexClossAxisStyle from '../_getFlexClossAxisStyle';
import _getFlexContainerStyle from '../_getFlexContainerStyle';
import _getFlexMainAxisStyle from '../_getFlexMainAxisStyle';
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
    alignHorizontal: 'left',
    alignVertical: 'top',
  },
  getContainerStyle: (props) => {
    const {
      orientation,
      alignHorizontal,
      alignVertical,
      spacingAll,
      spacingHorizontal = spacingAll,
      spacingVertical = spacingAll,
    } = props;
    return _getFlexContainerStyle(
      orientation,
      alignHorizontal,
      alignVertical,
      spacingHorizontal,
      spacingVertical,
    );
  },
  getChildStyle: (props) => {
    const {
      orientation,
      alignHorizontal,
      sizeHorizontal,
      adjustHorizontal,
      alignVertical,
      sizeVertical,
      adjustVertical,
    } = props;

    if (orientation === 'horizontal') {
      // 横並びの時
      return {
        ..._getFlexMainAxisStyle(
          'width',
          alignHorizontal,
          sizeHorizontal,
          adjustHorizontal,
        ),
        ..._getFlexClossAxisStyle(
          'height',
          alignVertical,
          sizeVertical,
          adjustVertical,
        ),
      };
    } else {
      // 縦並びの時
      return {
        ..._getFlexClossAxisStyle(
          'width',
          alignHorizontal,
          sizeHorizontal,
          adjustHorizontal,
        ),
        ..._getFlexMainAxisStyle(
          'height',
          alignVertical,
          sizeVertical,
          adjustVertical,
        ),
      };
    }
  },
};
export default layout;
