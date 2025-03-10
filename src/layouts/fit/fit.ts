import { Layout } from '../types';
import { FitLayoutProps } from './types';

/**
 * fitレイアウト
 *
 * - 子要素を親と同じ大きさで配置する
 */
const layout: Layout<FitLayoutProps> = {
  name: 'fit',
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
