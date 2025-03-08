import { Layout } from '../types';
import { CenterLayoutProps } from './types';

/**
 * centerレイアウト
 *
 * - 子要素を上下中央に配置する
 */
const layout: Layout<CenterLayoutProps> = {
  name: 'center',
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
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing,
      columnGap: hSpacing,
      rowGap: vSpacing,
    };
  },
  getChildStyle: (props) => {
    const { childHeight, childWidth } = props;
    return {
      flex: '0 0 auto',
      height: childHeight,
      width: childWidth,
    };
  },
};
export default layout;
