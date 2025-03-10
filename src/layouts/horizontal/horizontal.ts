import _getClossAxisStyle from '../_getClossAxisStyle';
import _getMainAxisStyle from '../_getMainAxisStyle';
import { Layout } from '../types';
import { HORIZONTAL_ALIGN, VERTICAL_ALIGN } from './_constants';
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
    return {
      display: 'flex',
      flexDirection: 'row',
      gap: spacing,
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...HORIZONTAL_ALIGN[hAlign],
      ...VERTICAL_ALIGN[`${wrapChildren}`][vAlign],
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
      ..._getClossAxisStyle('height', childHeight, childHeightSizing),
      ..._getMainAxisStyle('width', childWidth, childWidthSizing, wrapChildren),
    };
  },
};
export default layout;
