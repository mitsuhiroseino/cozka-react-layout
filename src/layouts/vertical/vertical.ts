import _getClossAxisStyle from '../_getClossAxisStyle';
import _getFlexContainerStyle from '../_getFlexContainerStyle';
import _getMainAxisStyle from '../_getMainAxisStyle';
import { Layout } from '../types';
import { VerticalLayoutProps } from './types';

/**
 * verticalレイアウト
 *
 * - 子要素を縦並びで配置する
 */
const layout: Layout<VerticalLayoutProps> = {
  name: 'vertical',
  defaultProps: {
    hAlign: 'left',
    vAlign: 'top',
  },
  getContainerStyle: (props) => {
    const {
      hAlign,
      vAlign,
      wrapChildren,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
    } = props;
    return _getFlexContainerStyle('vertical', {
      hAlign,
      vAlign,
      wrapChildren,
      hSpacing,
      vSpacing,
    });
  },
  getChildStyle: (props) => {
    const {
      childHeight,
      childHeightSizing,
      childWidth,
      childWidthSizing,
      wrapChildren,
    } = props;

    return {
      ..._getMainAxisStyle(
        'height',
        childHeight,
        childHeightSizing,
        wrapChildren,
      ),
      ..._getClossAxisStyle('width', childWidth, childWidthSizing),
    };
  },
};
export default layout;
