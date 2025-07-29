import _getGridChildSizeStyle from '../_getGridChildSizeStyle';
import _getGridContainerStyle from '../_getGridContainerStyle';
import { Layout } from '../types';
import { BalanceLayoutProps } from './types';

/**
 * balanceレイアウト
 *
 * - 子要素を均等に配置する
 */
const layout: Layout<BalanceLayoutProps> = {
  name: 'balance',
  defaultProps: {
    orientation: 'horizontal',
  },
  getContainerStyle: (props) => {
    const { orientation, ...rest } = props;

    return _getGridContainerStyle(orientation, {
      ...rest,
      placeItems: 'center',
    });
  },

  getChildStyle: (props) => {
    const { orientation, vSize, hSize } = props;

    return _getGridChildSizeStyle(orientation, {
      vSize,
      hSize,
    });
  },
};
export default layout;
