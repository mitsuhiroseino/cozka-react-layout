import _unit from '../_unit';
import { Layout } from '../types';
import {
  CHILD_VERTICAL_ALIGN,
  DEFAULT_CHILD_VERTICAL_ALIGN,
  HORIZONTAL_ALIGN,
} from './_constants';
import { SolidLayoutProps } from './types';

/**
 * solidレイアウト
 *
 * - 子要素が親要素の横幅に収まる様に要素数を調整し表示する
 */
const layout: Layout<SolidLayoutProps> = {
  name: 'solid',
  defaultProps: {
    hAlign: 'left',
    vAlign: 'top',
  },
  getContainerStyle: (props) => {
    const {
      hAlign,
      vAlign,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
      childWidth,
    } = props;
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, ${_unit(childWidth ?? '100%')})`,
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...HORIZONTAL_ALIGN[hAlign],
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
