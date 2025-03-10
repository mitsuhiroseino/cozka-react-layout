import _getClossAxisStyle from '../_getClossAxisStyle';
import { Layout } from '../types';
import { ALIGN, ORIENTATION } from './_constants';
import { LiquidLayoutProps } from './types';

/**
 * liquidレイアウト
 *
 * - 子要素が親要素の横幅を満たすように伸縮する
 */
const layout: Layout<LiquidLayoutProps> = {
  name: 'liquid',
  defaultProps: {
    orientation: 'horizontal',
    align: 'top',
  },
  getContainerStyle: (props) => {
    const {
      orientation,
      align,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
    } = props;

    return {
      display: 'grid',
      justifyContent: 'stretch',
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...ORIENTATION[orientation](props),
      ...ALIGN[orientation][align],
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
