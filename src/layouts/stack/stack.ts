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
    } = props;
    return _getFlexContainerStyle(
      orientation,
      hAlign,
      vAlign,
      hSpacing,
      vSpacing,
    );
  },
  getChildStyle: (props) => {
    const { orientation, hAlign, hSize, hAdjust, vAlign, vSize, vAdjust } =
      props;

    if (orientation === 'horizontal') {
      // 横並びの時
      return {
        ..._getFlexMainAxisStyle('width', hAlign, hSize, hAdjust),
        ..._getFlexClossAxisStyle('height', vAlign, vSize, vAdjust),
      };
    } else {
      // 縦並びの時
      return {
        ..._getFlexClossAxisStyle('width', hAlign, hSize, hAdjust),
        ..._getFlexMainAxisStyle('height', vAlign, vSize, vAdjust),
      };
    }
  },
};
export default layout;
