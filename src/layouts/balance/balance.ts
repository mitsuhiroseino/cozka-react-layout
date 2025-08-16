import _getGridChildAxisStyle from '../_getGridChildAxisStyle';
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
    alignHorizontal: 'left',
    alignVertical: 'top',
  },
  getContainerStyle: (props) => {
    const { orientation, ...rest } = props;

    return _getGridContainerForItemsStyle(orientation, rest);
  },

  getChildStyle: (props) => {
    const {
      alignHorizontal,
      sizeHorizontal,
      adjustHorizontal,
      alignVertical,
      sizeVertical,
      adjustVertical,
    } = props;

    return {
      ..._getGridChildAxisStyle(
        'items',
        'width',
        alignHorizontal,
        sizeHorizontal,
        adjustHorizontal,
      ),
      ..._getGridChildAxisStyle(
        'items',
        'height',
        alignVertical,
        sizeVertical,
        adjustVertical,
      ),
    };
  },
};
export default layout;
