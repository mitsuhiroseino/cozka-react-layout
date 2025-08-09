import { CSSProperties } from 'react';
import _unit from './_unit';
import {
  AdjustProps,
  AlignProps,
  ChildCountProps,
  ChildSizeProps,
  GridTemplateProps,
  HAlign,
  Orientation,
  SizeAdjust,
  SpacingProps,
  VAlign,
} from './types';

type Options = AdjustProps &
  AlignProps &
  ChildCountProps &
  ChildSizeProps &
  GridTemplateProps &
  SpacingProps;

/**
 * display=gridでcontentを軸にしてレイアウトする為のコンテナーのスタイルを取得
 * @param orientation
 * @param options
 * @returns
 */
export default function _getGridContainerForContentStyle(
  orientation: Orientation,
  options: Options = {},
) {
  const {
    vAlign,
    hAlign,
    spacing,
    vSpacing = spacing,
    hSpacing = spacing,
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

  return containerStyle;
}

/**
 * 向きに関するスタイル
 */
const ORIENTATION: {
  [orientation in Orientation]: (options: Options) => CSSProperties;
} = {
  horizontal: ({ hSize, hAlign, hCount, vSize, vAdjust }) => {
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: _getGridMainAxisTemplate(hSize, hAlign, hCount),
      gridTemplateRows: _getGridClossAxisTemplate(vSize, vAdjust),
    };
  },
  vertical: ({ vSize, vAlign, vCount, hSize, hAdjust }) => {
    return {
      gridAutoFlow: 'column',
      gridTemplateColumns: _getGridClossAxisTemplate(hSize, hAdjust),
      gridTemplateRows: _getGridMainAxisTemplate(vSize, vAlign, vCount),
    };
  },
};

/**
 * orientation方向の子要素のサイズを指定するためのテンプレート
 * @param childSize 子要素のサイズ
 * @param align 子要素の配置
 * @param count 子要素の数
 * @returns
 */
function _getGridMainAxisTemplate(
  childSize: string | number,
  align: HAlign | VAlign,
  count: number,
) {
  if (align === 'fit') {
    // fitの場合
    if (count != null && childSize != null) {
      return `repeat(${count}, minmax(${_unit(childSize)}, 1fr))`;
    } else if (count != null) {
      return `repeat(${count}, 1fr)`;
    } else if (childSize != null) {
      return `repeat(auto-fill, minmax(${_unit(childSize)}, 1fr))`;
    } else {
      return 'repeat(auto-fill, minmax(0, 1fr))';
    }
  } else {
    // fit以外の場合
    if (count != null && childSize != null) {
      return `repeat(${count}, ${_unit(childSize)})`;
    } else if (count != null) {
      return `repeat(${count}, max-content)`;
    } else if (childSize != null) {
      return `repeat(auto-fill, ${_unit(childSize)})`;
    } else {
      return 'repeat(auto-fill, minmax(max-content, 100%))';
    }
  }
}

/**
 * 交差軸方向
 * @param childSize
 * @param align
 * @param count
 * @returns
 */
function _getGridClossAxisTemplate(
  childSize: string | number,
  adjust: SizeAdjust,
) {
  if (adjust === 'expand') {
    if (childSize != null) {
      return `repeat(auto-fit, minmax(${_unit(childSize)}, 1fr))`;
    } else {
      return `repeat(auto-fit, minmax(auto, 1fr))`;
    }
  } else if (adjust === 'narrow') {
    if (childSize != null) {
      return `repeat(auto-fit, minmax(0px, ${_unit(childSize)}))`;
    } else {
      return `repeat(auto-fit, minmax(0px, auto))`;
    }
  }
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
  fit: {
    justifyContent: 'stretch',
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
  fit: {
    alignContent: 'stretch',
  },
};
