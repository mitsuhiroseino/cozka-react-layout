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
            gridTemplateRows: 'auto',
            gridTemplateColumns: '1fr',
          }
        : {
            gridAutoFlow: 'column',
            gridTemplateRows: '1fr',
            gridTemplateColumns: 'auto',
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
