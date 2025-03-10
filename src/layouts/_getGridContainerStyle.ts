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
    hAlign,
    hSpacing,
    vAlign,
    vSpacing,
    childHeight,
    childWidth,
    style: override,
  } = options;
  let style: CSSProperties = {
    display: 'grid',
    ...ORIENTATION[orientation](childHeight, childWidth),
  };
  if (hAlign) {
    style = { ...style, ...HALIGN[orientation][hAlign] };
  }
  if (hSpacing != null) {
    style.columnGap = hSpacing;
  }
  if (vAlign) {
    style = { ...style, ...VALIGN[orientation][vAlign] };
  }
  if (vSpacing != null) {
    style.rowGap = vSpacing;
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
  ) => CSSProperties;
} = {
  horizontal: (childHeight, childWidth) => {
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: `repeat(auto-fit, minmax(${_unit(childWidth ?? '0')}, 1fr))`,
    };
  },
  vertical: (childHeight, childWidth) => {
    return {
      gridAutoFlow: 'column',
      gridTemplateRows: `repeat(auto-fit, minmax(${_unit(childHeight ?? '0')}, 1fr))`,
    };
  },
};

/**
 * 「横向き＆横位置」のためのスタイル
 */
const HORIZONTAL_HALIGN: {
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
 * 「縦向き＆横位置」のためのスタイル
 */
const VERTICAL_HALIGN: {
  [hAlign in HAlign]?: CSSProperties;
} = {
  left: {
    alignContent: 'flex-start',
  },
  center: {
    alignContent: 'center',
  },
  right: {
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

/**
 * 横位置のスタイル
 */
const HALIGN: {
  [orientation in Orientation]: {
    [hAlign in HAlign]?: CSSProperties;
  };
} = {
  horizontal: HORIZONTAL_HALIGN,
  vertical: VERTICAL_HALIGN,
};

/**
 * 「横向き＆縦位置」のためのスタイル
 */
const HORIZONTAL_VALIGN: {
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

/**
 * 「縦向き＆縦位置」のためのスタイル
 */
const VERTICAL_VALIGN: {
  [vAlign in VAlign]?: CSSProperties;
} = {
  top: {
    justifyContent: 'flex-start',
  },
  middle: {
    justifyContent: 'center',
  },
  bottom: {
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
 * 縦位置のスタイル
 */
const VALIGN: {
  [orientation in Orientation]: {
    [vAlign in VAlign]?: CSSProperties;
  };
} = {
  horizontal: HORIZONTAL_VALIGN,
  vertical: VERTICAL_VALIGN,
};
