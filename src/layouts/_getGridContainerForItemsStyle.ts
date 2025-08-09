import { CSSProperties } from 'react';
import _unit from './_unit';
import {
  AlignProps,
  ChildCountProps,
  ChildSizeProps,
  GridTemplateProps,
  HAlign,
  Orientation,
  SpacingProps,
  VAlign,
} from './types';

type Options = AlignProps &
  ChildCountProps &
  ChildSizeProps &
  GridTemplateProps &
  SpacingProps & {
    /**
     * 上書きするスタイル
     */
    style?: CSSProperties;
  };

/**
 * display=gridでitemsを軸にしてレイアウトする為のコンテナーのスタイルを取得
 * @param orientation
 * @param options
 * @returns
 */
export default function _getGridContainerForItemsStyle(
  orientation: Orientation,
  options: Options = {},
) {
  const {
    vAlign,
    hAlign,
    spacing,
    vSpacing = spacing,
    hSpacing = spacing,
    style,
  } = options;
  let containerStyle: CSSProperties = {
    display: 'grid',
    ...ORIENTATION[orientation](options),
  };

  if (vAlign) {
    containerStyle = {
      ...containerStyle,
      ...VALIGN[vAlign],
    };
  }
  if (hAlign) {
    containerStyle = {
      ...containerStyle,
      ...HALIGN[hAlign],
    };
  }
  if (vSpacing != null) {
    containerStyle.rowGap = vSpacing;
  }
  if (hSpacing != null) {
    containerStyle.columnGap = hSpacing;
  }
  if (style) {
    containerStyle = {
      ...containerStyle,
      ...style,
    };
  }

  return containerStyle;
}

/**
 * 向きに関するスタイル
 */
const ORIENTATION: {
  [orientation in Orientation]: (options: Options) => CSSProperties;
} = {
  horizontal: () => {
    return {
      gridAutoFlow: 'column',
    };
  },
  vertical: () => {
    return {
      gridAutoFlow: 'row',
    };
  },
};

/**
 * 「横位置」のためのスタイル
 */
const HALIGN: {
  [hAlign in HAlign]?: CSSProperties;
} = {
  left: {
    justifyItems: 'flex-start',
  },
  center: {
    justifyItems: 'center',
  },
  right: {
    justifyItems: 'flex-end',
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
    justifyContent: 'stretch',
  },
};

/**
 * 「縦位置」のためのスタイル
 */
const VALIGN: {
  [vAlign in VAlign]: CSSProperties;
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
    alignContent: 'space-between',
  },
  'space-around': {
    alignContent: 'space-around',
  },
  'space-evenly': {
    alignContent: 'space-evenly',
  },
  fit: {
    alignItems: 'stretch',
  },
};
