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
      hSpacing = spacing,
      vSpacing = spacing,
    } = props;
    return {
      display: 'grid',
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...(orientation === 'vertical'
        ? {
            gridAutoFlow: 'row',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
          }
        : {
            gridAutoFlow: 'column',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '1fr',
          }),
    };
  },
  getChildStyle: () => {
    return {
      minHeight: 0,
      minWidth: 0,
    };
  },
};
export default layout;
