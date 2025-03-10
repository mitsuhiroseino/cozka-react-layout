import _getClossAxisStyle from '../_getClossAxisStyle';
import _getMainAxisStyle from '../_getMainAxisStyle';
import { Layout } from '../types';
import { HORIZONTAL_ALIGN, VERTICAL_ALIGN } from './_constants';
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
      wrapChildren = false,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
    } = props;
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing,
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...HORIZONTAL_ALIGN[`${wrapChildren}`][hAlign],
      ...VERTICAL_ALIGN[vAlign],
    };
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
