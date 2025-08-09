import { CSSProperties } from 'react';
import { HAlign, Orientation, Spacing, VAlign } from './types';

/**
 * display=flexのコンテナーのスタイルを取得
 * @param orientation
 * @param vAlign
 * @param hAlign
 * @param vSpacing
 * @param hSpacing
 * @returns
 */
export default function _getFlexContainerStyle(
  orientation: Orientation,
  vAlign: VAlign,
  hAlign: HAlign,
  vSpacing: Spacing,
  hSpacing: Spacing,
) {
  let containerStyle: CSSProperties = {
    display: 'flex',
    ...ORIENTATION[orientation],
  };

  if (vAlign) {
    containerStyle = { ...containerStyle, ...VALIGN[orientation][vAlign] };
  }
  if (hAlign) {
    containerStyle = { ...containerStyle, ...HALIGN[orientation][hAlign] };
  }
  if (vSpacing != null) {
    containerStyle.rowGap = vSpacing;
  }
  if (hSpacing != null) {
    containerStyle.columnGap = hSpacing;
  }

  return containerStyle;
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
