import _getClossAxisStyle from '../_getClossAxisStyle';
import _unit from '../_unit';
import { Layout } from '../types';
import { HORIZONTAL_ALIGN, ORIENTATION, VERTICAL_ALIGN } from './_constants';
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
      orientation,
      hAlign,
      vAlign,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
    } = props;
    return {
      display: 'grid',
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...ORIENTATION[orientation](props),
      ...HORIZONTAL_ALIGN[orientation][hAlign],
      ...VERTICAL_ALIGN[orientation][vAlign],
    };
  },
  getChildStyle: (props) => {
    const { orientation, crossSize, crossSizing } = props;
    if (orientation === 'vertical') {
      return _getClossAxisStyle('width', crossSize, crossSizing);
    } else {
      return _getClossAxisStyle('height', crossSize, crossSizing);
    }
  },
};
export default layout;
