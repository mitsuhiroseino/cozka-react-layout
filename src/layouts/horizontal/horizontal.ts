import _getClossAxisStyle from '../_getClossAxisStyle';
import _getFlexContainerStyle from '../_getFlexContainerStyle';
import _getMainAxisStyle from '../_getMainAxisStyle';
import { Layout } from '../types';
import { HorizontalLayoutProps } from './types';

/**
 * horizontalレイアウト
 *
 * - 子要素を横並びで配置する
 */
const layout: Layout<HorizontalLayoutProps> = {
  name: 'horizontal',
  defaultProps: {
    hAlign: 'left',
    vAlign: 'top',
    wrapChildren: false,
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
    return _getFlexContainerStyle('horizontal', {
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
      ..._getClossAxisStyle('height', childHeight, childHeightSizing),
      ..._getMainAxisStyle('width', childWidth, childWidthSizing, wrapChildren),
    };
  },
};
export default layout;
