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

type LayoutFrom = 'content' | 'items';

type Options = AlignProps &
  ChildCountProps &
  ChildSizeProps &
  GridTemplateProps &
  SpacingProps & {
    /**
     * 上書きするスタイル
     */
    style?: CSSProperties;

    /**
     * 何を主としてグリッドのレイアウトを行うか
     *
     * - `content`: justify-content、align-contentを基準にする(要素全体をレイアウトする方式)
     * - `items`: justify-items、align-itemsを基準にする(個々の要素をレイアウトする方式)
     *
     * @default 'content'
     */
    layoutFrom?: LayoutFrom;
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
  let gridContainerStyle: CSSProperties = {
    display: 'grid',
    ...ORIENTATION[orientation]({
      vAlign,
      hAlign,
      spacing,
      vSpacing,
      hSpacing,
      style,
    }),
  };

  if (vAlign) {
    gridContainerStyle = {
      ...gridContainerStyle,
      ...VALIGN[vAlign],
    };
  }
  if (hAlign) {
    gridContainerStyle = {
      ...gridContainerStyle,
      ...HALIGN[hAlign],
    };
  }
  if (vSpacing != null) {
    gridContainerStyle.rowGap = vSpacing;
  }
  if (hSpacing != null) {
    gridContainerStyle.columnGap = hSpacing;
  }
  if (style) {
    gridContainerStyle = { ...gridContainerStyle, ...style };
  }

  return gridContainerStyle;
}

/**
 * 向きに関するスタイル
 */
const ORIENTATION: {
  [orientation in Orientation]: (options: Options) => CSSProperties;
} = {
  horizontal: ({ hSize, hAlign, hCount, layoutFrom }) => {
    return {
      gridAutoFlow: 'column',
    };
  },
  vertical: ({ vSize, vAlign, vCount, layoutFrom }) => {
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
