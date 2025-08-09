import _unit from './_unit';

const MIN_MAX = {
  height: {
    min: 'minHeight',
    max: 'maxHeight',
  },
  width: {
    min: 'minWidth',
    max: 'maxWidth',
  },
};

/**
 * 最小・最大のプロパティ名を取得
 * @param axis 高さ or 幅
 * @returns
 */
export default function _getMinMaxPropNames(axis: 'height' | 'width') {
  return MIN_MAX[axis];
}
