import { CSSProperties } from 'react';
import {
  AlignHorizontal,
  AlignVertical,
  ChildSpacing,
  Orientation,
} from './types';

/**
 * display=flexのコンテナーのスタイルを取得
 * @param orientation
 * @param alignHorizontal
 * @param alignVertical
 * @param spacingHorizontal
 * @param spacingVertical
 * @returns
 */
export default function _getFlexContainerStyle(
  orientation: Orientation,
  alignHorizontal: AlignHorizontal,
  alignVertical: AlignVertical,
  spacingHorizontal: ChildSpacing,
  spacingVertical: ChildSpacing,
) {
  let containerStyle: CSSProperties = {
    display: 'flex',
    ...ORIENTATION[orientation],
  };

  if (alignHorizontal) {
    containerStyle = {
      ...containerStyle,
      ...HALIGN[orientation][alignHorizontal],
    };
  }
  if (alignVertical) {
    containerStyle = {
      ...containerStyle,
      ...VALIGN[orientation][alignVertical],
    };
  }
  if (spacingHorizontal != null) {
    containerStyle.columnGap = spacingHorizontal;
  }
  if (spacingVertical != null) {
    containerStyle.rowGap = spacingVertical;
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
    [alignHorizontal in AlignHorizontal]?: CSSProperties;
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
    [alignVertical in AlignVertical]?: CSSProperties;
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
