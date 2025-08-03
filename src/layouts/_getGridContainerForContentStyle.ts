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
    style,
  } = options;
  let containerStyle: CSSProperties = {
    display: 'grid',
    ...ORIENTATION[orientation](options),
  };

  if (vAlign) {
    containerStyle = { ...containerStyle, ...VALIGN[vAlign] };
  }
  if (hAlign) {
    containerStyle = { ...containerStyle, ...HALIGN[hAlign] };
  }
  if (vSpacing != null) {
    containerStyle.rowGap = vSpacing;
  }
  if (hSpacing != null) {
    containerStyle.columnGap = hSpacing;
  }
  if (style) {
    containerStyle = { ...containerStyle, ...style };
  }

  return containerStyle;
}

/**
 * 向きに関するスタイル
 */
const ORIENTATION: {
  [orientation in Orientation]: (options: Options) => CSSProperties;
} = {
  horizontal: ({ hSize, hAlign, hCount }) => {
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: _getGridTemplate(hSize, hAlign, hCount),
    };
  },
  vertical: ({ vSize, vAlign, vCount }) => {
    return {
      gridAutoFlow: 'column',
      gridTemplateRows: _getGridTemplate(vSize, vAlign, vCount),
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
function _getGridTemplate(
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
      return `repeat(auto-fit, minmax(${_unit(childSize)}, 1fr))`;
    } else {
      return 'repeat(auto-fit, minmax(0, 1fr))';
    }
  } else {
    // fit以外の場合
    if (count != null && childSize != null) {
      return `repeat(${count}, ${_unit(childSize)})`;
    } else if (count != null) {
      return `repeat(${count}, max-content)`;
    } else if (childSize != null) {
      return `repeat(auto-fit, ${_unit(childSize)})`;
    } else {
      return 'repeat(auto-fit, minmax(max-content, 100%))';
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
