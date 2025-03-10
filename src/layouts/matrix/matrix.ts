import _unit from '../_unit';
import { Layout } from '../types';
import { MatrixLayoutProps } from './types';

/**
 * matrixレイアウト
 *
 * - 子要素を格子状に配置する
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
      childHeight,
      childWidth,
    } = props;
    const gridTemplateColumns = _toGridTemplate(hTemplate, childWidth, hCount);
    const gridTemplateRows = _toGridTemplate(vTemplate, childHeight, vCount);

    return {
      display: 'grid',
      gridAutoFlow: orientation === 'vertical' ? 'column' : 'row',
      gridTemplateColumns,
      gridTemplateRows,
      columnGap: hSpacing,
      rowGap: vSpacing,
    };
  },
  getChildStyle: () => {
    return {
      height: '100%',
      width: '100%',
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
    template = gridSetting.join(' ');
  } else if (gridSetting) {
    template = gridSetting;
  } else if (size != null) {
    if (count != null) {
      template = `repeat(${count}, ${_unit(size)})`;
    } else {
      template = `repeat(auto-fit, ${_unit(size)})`;
    }
  } else if (count != null) {
    template = `repeat(${count}, 1fr)`;
  }
  return template;
}
