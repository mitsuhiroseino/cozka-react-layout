import { CSSProperties } from 'react';
import { HAlign, Orientation, Spacing, VAlign } from './types';

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
 * display=flexのコンテナーのスタイル
 * @param orientation
 * @param options
 * @returns
 */
export default function _getFlexContainerStyle(
  orientation: Orientation,
  options: Options = {},
) {
  const { vAlign, hAlign, vSpacing, hSpacing, style: override } = options;
  let style: CSSProperties = { display: 'flex', ...ORIENTATION[orientation] };

  if (vAlign) {
    style = { ...style, ...VALIGN[orientation][vAlign] };
  }
  if (hAlign) {
    style = { ...style, ...HALIGN[orientation][hAlign] };
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
  [orientation in Orientation]?: CSSProperties;
} = {
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
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
  fit: {
    justifyContent: 'flex-start',
  },
};

/**
 * 「縦向き＆横位置」のためのスタイル
 */
const VERTICAL_HALIGN: {
  [hAlign in HAlign]?: CSSProperties;
} = {
  left: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  'space-between': {
    alignItems: 'space-between',
  },
  'space-around': {
    alignItems: 'space-around',
  },
  'space-evenly': {
    alignItems: 'space-evenly',
  },
  fit: {
    alignItems: 'stretch',
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
 * 「横向き＆縦位置＆折り返し無し」のためのスタイル
 */
const HORIZONTAL_VALIGN: {
  [vAlign in VAlign]?: CSSProperties;
} = {
  top: {
    alignItems: 'flex-start',
  },
  middle: {
    alignItems: 'center',
  },
  bottom: {
    alignItems: 'flex-end',
  },
  'space-between': {
    alignItems: 'space-between',
  },
  'space-around': {
    alignItems: 'space-around',
  },
  'space-evenly': {
    alignItems: 'space-evenly',
  },
  fit: {
    alignItems: 'stretch',
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
  fit: {
    justifyContent: 'flex-start',
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
