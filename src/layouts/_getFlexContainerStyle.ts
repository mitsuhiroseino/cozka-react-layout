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
   * 子要素の折り返し
   */
  wrapChildren?: boolean;

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
  const {
    vAlign,
    hAlign,
    vSpacing,
    hSpacing,
    wrapChildren = false,
    style: override,
  } = options;
  let style: CSSProperties = { display: 'flex', ...ORIENTATION[orientation] };

  if (vAlign) {
    style = { ...style, ...VALIGN[orientation][`${wrapChildren}`][vAlign] };
  }
  if (hAlign) {
    style = { ...style, ...HALIGN[orientation][`${wrapChildren}`][hAlign] };
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
};

/**
 * 「縦向き＆横位置＆折り返し無し」のためのスタイル
 */
const VERTICAL_HALIGN_NOWRAP: {
  [hAlign in HAlign]?: CSSProperties;
} = {
  left: {
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
  },
  center: {
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  right: {
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
  },
  'space-between': {
    alignItems: 'space-between',
    flexWrap: 'nowrap',
  },
  'space-around': {
    alignItems: 'space-around',
    flexWrap: 'nowrap',
  },
  'space-evenly': {
    alignItems: 'space-evenly',
    flexWrap: 'nowrap',
  },
};

/**
 * 「縦向き＆横位置＆折り返しあり」のためのスタイル
 */
const VERTICAL_HALIGN_WRAP: {
  [hAlign in HAlign]?: CSSProperties;
} = {
  left: {
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  center: {
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  right: {
    alignContent: 'flex-end',
    flexWrap: 'wrap',
  },
  'space-between': {
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },
  'space-around': {
    alignContent: 'space-around',
    flexWrap: 'wrap',
  },
  'space-evenly': {
    alignContent: 'space-evenly',
    flexWrap: 'wrap',
  },
};

/**
 * 横位置のスタイル
 */
const HALIGN: {
  [orientation in Orientation]: {
    [wrapChildren in 'true' | 'false']: {
      [hAlign in HAlign]?: CSSProperties;
    };
  };
} = {
  horizontal: {
    true: HORIZONTAL_HALIGN,
    false: HORIZONTAL_HALIGN,
  },
  vertical: {
    true: VERTICAL_HALIGN_WRAP,
    false: VERTICAL_HALIGN_NOWRAP,
  },
};

/**
 * 「横向き＆縦位置＆折り返し無し」のためのスタイル
 */
const HORIZONTAL_VALIGN_NOWRAP: {
  [vAlign in VAlign]?: CSSProperties;
} = {
  top: {
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
  },
  middle: {
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  bottom: {
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
  },
  'space-between': {
    alignItems: 'space-between',
    flexWrap: 'nowrap',
  },
  'space-around': {
    alignItems: 'space-around',
    flexWrap: 'nowrap',
  },
  'space-evenly': {
    alignItems: 'space-evenly',
    flexWrap: 'nowrap',
  },
};

/**
 * 「横向き＆縦位置＆折り返し有り」のためのスタイル
 */
const HORIZONTAL_VALIGN_WRAP: {
  [vAlign in VAlign]?: CSSProperties;
} = {
  top: {
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  middle: {
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  bottom: {
    alignContent: 'flex-end',
    flexWrap: 'wrap',
  },
  'space-between': {
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },
  'space-around': {
    alignContent: 'space-around',
    flexWrap: 'wrap',
  },
  'space-evenly': {
    alignContent: 'space-evenly',
    flexWrap: 'wrap',
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
    [wrapChildren in 'true' | 'false']: {
      [vAlign in VAlign]?: CSSProperties;
    };
  };
} = {
  horizontal: {
    true: HORIZONTAL_VALIGN_WRAP,
    false: HORIZONTAL_VALIGN_NOWRAP,
  },
  vertical: {
    true: VERTICAL_VALIGN,
    false: VERTICAL_VALIGN,
  },
};
