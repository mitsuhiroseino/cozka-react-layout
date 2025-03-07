import { Layout } from '../types';
import { ORIENTATION } from './_constants';
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
      gap: spacing,
      columnGap: hSpacing,
      rowGap: vSpacing,
      ...ORIENTATION[orientation],
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
