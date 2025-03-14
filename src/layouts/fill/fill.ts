import { Layout } from '../types';
import { FillLayoutProps } from './types';

/**
 * fillレイアウト
 *
 * - 子要素で親要素を満たす
 */
const layout: Layout<FillLayoutProps> = {
  name: 'fill',
  defaultProps: {
    orientation: 'horizontal',
  },
  getContainerStyle: (props) => {
    const {
      orientation,
      spacing,
      vSpacing = spacing,
      hSpacing = spacing,
    } = props;
    return {
      display: 'grid',
      rowGap: vSpacing,
      columnGap: hSpacing,
      ...(orientation === 'vertical'
        ? {
            gridAutoFlow: 'row',
            gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))',
            gridTemplateColumns: 'auto',
          }
        : {
            gridAutoFlow: 'column',
            gridTemplateRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
          }),
    };
  },
  getChildStyle: () => {
    return {
      height: 'auto',
      width: 'auto',
      minHeight: 0,
      minWidth: 0,
    };
  },
};
export default layout;
