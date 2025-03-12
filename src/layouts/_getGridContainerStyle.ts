import { CSSProperties } from 'react';
import _unit from './_unit';
import { ChildSize, HAlign, Orientation, Spacing, VAlign } from './types';

type Options = {
  /**
   * 横位置
   */
  hAlign?: HAlign | false;

  /**
   * 縦位置
   */
  vAlign?: VAlign | false;

  /**
   * 子要素の高さ
   */
  childHeight?: ChildSize;

  /**
   * 子要素の幅
   */
  childWidth?: ChildSize;

  /**
   * 横余白
   */
  hSpacing?: Spacing;

  /**
   * 縦余白
   */
  vSpacing?: Spacing;

  /**
   * 上書きするスタイル
   */
  style?: CSSProperties;

  /**
   * グリッドトラックを親要素の幅が許す限り作成する
   */
  fill?: boolean;

  /**
   * 子要素のサイズを固定する
   */
  fixed?: boolean;
};

/**
 * display=gridのコンテナーのスタイル
 * @param orientation
 * @param options
 * @returns
 */
export default function _getGridContainerStyle(
  orientation: Orientation,
  options: Options = {},
) {
  const {
    vAlign,
    hAlign,
    vSpacing,
    hSpacing,
    childHeight,
    childWidth,
    style: override,
    fill,
    fixed,
  } = options;
  let style: CSSProperties = {
    display: 'grid',
    ...ORIENTATION[orientation](childHeight, childWidth, fill, fixed),
  };

  if (vAlign) {
    style = { ...style, ...VALIGN[vAlign] };
  }
  if (hAlign) {
    style = { ...style, ...HALIGN[hAlign] };
  }
  if (vSpacing != null) {
    style.rowGap = vSpacing;
  }
  if (hSpacing != null) {
    style.columnGap = hSpacing;
  }
  if (override) {
    style = { ...style, ...override };
  }

  return style;
}

/**
 * 向きに関するスタイル
 */
const ORIENTATION: {
  [orientation in Orientation]: (
    height: ChildSize,
    width: ChildSize,
    fill: boolean,
    fixed: boolean,
  ) => CSSProperties;
} = {
  horizontal: (childHeight, childWidth, fill, fixed) => {
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: _getGridTemplate(childWidth, fill, fixed),
    };
  },
  vertical: (childHeight, childWidth, fill, fixed) => {
    return {
      gridAutoFlow: 'column',
      gridTemplateRows: _getGridTemplate(childHeight, fill, fixed),
    };
  },
};

function _getGridTemplate(
  childSize: string | number,
  fill: boolean,
  fixed: boolean,
) {
  const mode = fill ? 'auto-fill' : 'auto-fit';
  const size = fixed
    ? _unit(childSize ?? 'minmax(max-content, max-content)')
    : `minmax(${_unit(childSize ?? '0')}, 1fr)`;
  return `repeat(${mode}, ${size})`;
}

/**
 * 「横位置」のためのスタイル
 */
const HALIGN: {
  [hAlign in HAlign]?: CSSProperties;
} = {
  left: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
  'space-between': {
    justifyContent: 'space-between',
  },
  'space-around': {
    justifyContent: 'space-around',
  },
  'space-evenly': {
    justifyContent: 'space-evenly',
  },
};

/**
 * 「縦位置」のためのスタイル
 */
const VALIGN: {
  [vAlign in VAlign]?: CSSProperties;
} = {
  top: {
    alignContent: 'flex-start',
  },
  middle: {
    alignContent: 'center',
  },
  bottom: {
    alignContent: 'flex-end',
  },
  'space-between': {
    alignContent: 'space-between',
  },
  'space-around': {
    alignContent: 'space-around',
  },
  'space-evenly': {
    alignContent: 'space-evenly',
  },
};
