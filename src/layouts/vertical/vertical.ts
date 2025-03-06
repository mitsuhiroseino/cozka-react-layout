import { Layout } from '../types';
import {
  CHILD_HORIZONTAL_ALIGN,
  CHILD_VERTICAL_ALIGN,
  DEFAULT_CHILD_HORIZONTAL_ALIGN,
  DEFAULT_CHILD_VERTICAL_ALIGN,
  HORIZONTAL_ALIGN,
  VERTICAL_ALIGN,
} from './_constants';
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
    const { hAlign, vAlign } = props;
    const horizontalAlign =
      CHILD_HORIZONTAL_ALIGN[hAlign] || DEFAULT_CHILD_HORIZONTAL_ALIGN;
    const verticalAlign =
      CHILD_VERTICAL_ALIGN[vAlign] || DEFAULT_CHILD_VERTICAL_ALIGN;

    return {
      ...horizontalAlign(props),
      ...verticalAlign(props),
    };
  },
};
export default layout;
