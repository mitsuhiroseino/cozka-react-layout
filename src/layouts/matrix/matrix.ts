import _unit from '../_unit';
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
      hCount,
      vCount,
      hTemplate,
      vTemplate,
      spacing,
      hSpacing = spacing,
      vSpacing = spacing,
      vSize,
      hSize,
    } = props;
    const gridTemplateColumns = _toGridTemplate(hTemplate, hSize, hCount);
    const gridTemplateRows = _toGridTemplate(vTemplate, vSize, vCount);

    return {
      display: 'grid',
      gridAutoFlow: orientation === 'vertical' ? 'column' : 'row',
      gridTemplateColumns,
      gridTemplateRows,
      columnGap: hSpacing,
      rowGap: vSpacing,
    };
  },
  getChildStyle: (props) => {
    const { hSize, vSize } = props;
    return {
      height: vSize,
      width: hSize,
    };
  },
};
export default layout;

function _toGridTemplate(
  gridSetting: string | {} | (string | number)[],
  size: string | number,
  count: number,
) {
  let template;
  if (Array.isArray(gridSetting)) {
    template = gridSetting.map(_unit).join(' ');
  } else if (gridSetting) {
    template = gridSetting;
  } else if (size != null) {
    if (count != null) {
      // 子要素数とサイズが指定されている場合、指定されたサイズの子要素を指定された数だけ配置
      template = `repeat(${count}, ${_unit(size)})`;
    } else {
      // サイズのみが指定されている場合、子要素数は自動で決定
      template = `repeat(auto-fit, ${_unit(size)})`;
    }
  } else if (count != null) {
    // 子要素数のみが指定されている場合、親要素を満たすサイズで配置
    template = `repeat(${count}, 1fr)`;
  }
  return template;
}
