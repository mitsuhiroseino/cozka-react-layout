import _unit from '../_unit';
import { Layout } from '../types';
import {
  CHILD_VERTICAL_ALIGN,
  DEFAULT_CHILD_VERTICAL_ALIGN,
  VERTICAL_ALIGN,
} from './_constants';
import { LiquidLayoutProps } from './types';

/**
 * liquidレイアウト
 *
 * - 子要素が親要素の横幅を満たすように伸縮する
 */
const layout: Layout<LiquidLayoutProps> = {
  name: 'liquid',
  defaultProps: {
    vAlign: 'top',
  },
  getContainerStyle: (props) => {
    const {
      vAlign,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
      childMinWidth,
    } = props;

    return {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${_unit(childMinWidth ?? '100%')}, 1fr))`,
      justifyContent: 'stretch',
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...VERTICAL_ALIGN[vAlign],
    };
  },
  getChildStyle: (props) => {
    const { vAlign } = props;
    const verticalAlign =
      CHILD_VERTICAL_ALIGN[vAlign] || DEFAULT_CHILD_VERTICAL_ALIGN;

    return verticalAlign(props);
  },
};
export default layout;
