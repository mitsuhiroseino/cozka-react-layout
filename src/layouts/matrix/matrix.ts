import unit from '@cozka/react-utils/unit';
import { Layout } from '../types';
import { MatrixLayoutProps } from './types';

/**
 * matrixレイアウト
 *
 * - 下記のいくつかを指定して子要素を格子状に配置する
 *   - 縦の子要素数
 *   - 横の子要素数
 *   - 子要素のサイズ
 */
const layout: Layout<MatrixLayoutProps> = {
  name: 'matrix',
  defaultProps: {
    orientation: 'horizontal',
  },
  getContainerStyle: (props) => {
    const {
      orientation,
      countHorizontal,
      countVertical,
      templateHorizontal,
      templateVertical,
      spacingAll,
      spacingHorizontal = spacingAll,
      spacingVertical = spacingAll,
      sizeHorizontal,
      sizeVertical,
    } = props;

    return {
      display: 'grid',
      gridAutoFlow: orientation === 'horizontal' ? 'row' : 'column',
      gridTemplateColumns: _getGridTemplate(
        templateHorizontal,
        sizeHorizontal,
        countHorizontal,
      ),
      gridTemplateRows: _getGridTemplate(
        templateVertical,
        sizeVertical,
        countVertical,
      ),
      columnGap: spacingHorizontal,
      rowGap: spacingVertical,
    };
  },
  getChildStyle: (props) => {
    const { sizeHorizontal, sizeVertical } = props;
    return {
      width: sizeHorizontal,
      height: sizeVertical,
    };
  },
};
export default layout;

/**
 * gridTemplateColumns / gridTemplateRowsを生成する
 * @param gridSetting 任意のグリッドテンプレート設定
 * @param size 子要素のサイズ
 * @param count 子要素数
 * @returns
 */
function _getGridTemplate(
  gridSetting: string | {} | (string | number)[],
  size: string | number,
  count: number,
) {
  let template;
  if (Array.isArray(gridSetting)) {
    // 配列の場合、各要素に単位を付与して結合
    template = gridSetting.map((value) => unit(value)).join(' ');
  } else if (gridSetting) {
    // 文字列またはオブジェクトの場合、そのまま使用
    template = gridSetting;
  } else if (size != null) {
    // サイズが指定されている場合
    if (count != null) {
      // 子要素数とサイズが指定されている場合、指定されたサイズの子要素を指定された数だけ配置
      template = `repeat(${count}, ${unit(size)})`;
    } else {
      // サイズのみが指定されている場合、子要素数は自動で決定
      template = `repeat(auto-fit, ${unit(size)})`;
    }
  } else if (count != null) {
    // 子要素数のみが指定されている場合、親要素を満たすサイズで配置
    template = `repeat(${count}, 1fr)`;
  }
  return template;
}
