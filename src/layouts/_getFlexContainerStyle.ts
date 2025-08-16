import { CSSProperties } from 'react';
import { HAlign, Orientation, Spacing, VAlign } from './types';

/**
 * display=flexのコンテナーのスタイルを取得
 * @param orientation
 * @param hAlign
 * @param vAlign
 * @param hSpacing
 * @param vSpacing
 * @returns
 */
export default function _getFlexContainerStyle(
  orientation: Orientation,
  hAlign: HAlign,
  vAlign: VAlign,
  hSpacing: Spacing,
  vSpacing: Spacing,
) {
  let containerStyle: CSSProperties = {
    display: 'flex',
    ...ORIENTATION[orientation],
  };

  if (hAlign) {
    containerStyle = { ...containerStyle, ...HALIGN[orientation][hAlign] };
  }
  if (vAlign) {
    containerStyle = { ...containerStyle, ...VALIGN[orientation][vAlign] };
  }
  if (hSpacing != null) {
    containerStyle.columnGap = hSpacing;
  }
  if (vSpacing != null) {
    containerStyle.rowGap = vSpacing;
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
 * 横位置のスタイル
 */
const HALIGN: {
  [orientation in Orientation]: {
    [hAlign in HAlign]?: CSSProperties;
  };
} = {
  // 「横向き＆横位置」のためのスタイル
  horizontal: {
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
  },
  // 「縦向き＆横位置」のためのスタイル
  vertical: {
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
  // 「横向き＆縦位置」のためのスタイル
  horizontal: {
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
  },
  // 「縦向き＆縦位置」のためのスタイル
  vertical: {
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
  },
};
