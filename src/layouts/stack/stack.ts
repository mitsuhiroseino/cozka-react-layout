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
    vAlign: 'top',
    hAlign: 'left',
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
    return _getFlexContainerStyle(
      orientation,
      vAlign,
      hAlign,
      vSpacing,
      hSpacing,
    );
  },
  getChildStyle: (props) => {
    const { orientation, vAlign, vSize, vAdjust, hAlign, hSize, hAdjust } =
      props;

    if (orientation === 'vertical') {
      // 縦並びの時
      return {
        ..._getFlexMainAxisStyle('height', vAlign, vSize, vAdjust),
        ..._getFlexClossAxisStyle('width', hAlign, hSize, hAdjust),
      };
    } else {
      // 横並びの時
      return {
        ..._getFlexClossAxisStyle('height', vAlign, vSize, vAdjust),
        ..._getFlexMainAxisStyle('width', hAlign, hSize, hAdjust),
      };
    }
  },
};
export default layout;
