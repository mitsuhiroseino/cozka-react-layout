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
    hAlign: 'left',
    vAlign: 'top',
  },
  getContainerStyle: (props) => {
    const { orientation, ...rest } = props;

    return _getGridContainerForItemsStyle(orientation, rest);
  },

  getChildStyle: (props) => {
    const { hAlign, hSize, hAdjust, vAlign, vSize, vAdjust } = props;

    return {
      ..._getGridChildAxisStyle('items', 'width', hAlign, hSize, hAdjust),
      ..._getGridChildAxisStyle('items', 'height', vAlign, vSize, vAdjust),
    };
  },
};
export default layout;
