import { CSSProperties } from 'react';
import _unit from './_unit';
import {
  AlignProps,
  ChildSizeProps,
  HAlign,
  Orientation,
  SpacingProps,
  VAlign,
} from './types';

type Options = AlignProps &
  ChildSizeProps &
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
  horizontal: ({ childWidth, hAlign }) => {
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: _getGridTemplate(childWidth, hAlign),
    };
  },
  vertical: ({ childHeight, vAlign }) => {
    return {
      gridAutoFlow: 'column',
      gridTemplateRows: _getGridTemplate(childHeight, vAlign),
    };
  },
};

function _getGridTemplate(childSize: string | number, align: HAlign | VAlign) {
  const size =
    align === 'fit'
      ? `minmax(${_unit(childSize ?? '0')}, 1fr)`
      : _unit(childSize ?? 'minmax(max-content, 100%)');
  return `repeat(auto-fit, ${size})`;
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
