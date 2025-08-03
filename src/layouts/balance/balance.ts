import _getGridChildSizeStyle from '../_getGridChildSizeStyle';
import _getGridContainerForItemsStyle from '../_getGridContainerForItemsStyle';
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

    return _getGridContainerForItemsStyle(orientation, {
      ...rest,
      layoutFrom: 'items',
    });
  },

  getChildStyle: (props) => {
    const { orientation, vAlign, hAlign, vSize, hSize } = props;

    return _getGridChildSizeStyle(orientation, {
      vAlign,
      hAlign,
      vSize,
      hSize,
    });
  },
};
export default layout;
