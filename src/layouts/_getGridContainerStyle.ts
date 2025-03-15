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
    vAlign,
    hAlign,
    spacing,
    vSpacing = spacing,
    hSpacing = spacing,
    style: override,
  } = options;
  let style: CSSProperties = {
    display: 'grid',
    ...ORIENTATION[orientation](options),
  };

  if (vAlign) {
    style = { ...style, ...VALIGN[vAlign] };
  }
  if (hAlign) {
    style = { ...style, ...HALIGN[hAlign] };
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
  [orientation in Orientation]: (options: Options) => CSSProperties;
} = {
  horizontal: ({ childWidth, hAlign, hCount }) => {
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: _getGridTemplate(childWidth, hAlign, hCount),
    };
  },
  vertical: ({ childHeight, vAlign, vCount }) => {
    return {
      gridAutoFlow: 'column',
      gridTemplateRows: _getGridTemplate(childHeight, vAlign, vCount),
    };
  },
};

function _getGridTemplate(
  childSize: string | number,
  align: HAlign | VAlign,
  count: number,
) {
  if (align === 'fit') {
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
