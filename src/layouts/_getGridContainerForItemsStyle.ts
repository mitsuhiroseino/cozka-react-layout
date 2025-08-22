import { CSSProperties } from 'react';
import {
  AlignHorizontal,
  AlignProps,
  AlignVertical,
  ChildCountProps,
  ChildSizeProps,
  GridTemplateProps,
  Orientation,
  SpacingProps,
} from './types';

type Options = AlignProps &
  ChildCountProps &
  ChildSizeProps &
  GridTemplateProps &
  SpacingProps;

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
    alignHorizontal,
    alignVertical,
    spacingAll,
    spacingHorizontal = spacingAll,
    spacingVertical = spacingAll,
  } = options;
  let containerStyle: CSSProperties = {
    display: 'grid',
    ...ORIENTATION[orientation](options),
  };

  if (alignHorizontal) {
    containerStyle = {
      ...containerStyle,
      ...HALIGN[alignHorizontal],
    };
  }
  if (alignVertical) {
    containerStyle = {
      ...containerStyle,
      ...VALIGN[alignVertical],
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
  [alignHorizontal in AlignHorizontal]?: CSSProperties;
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
  [alignVertical in AlignVertical]: CSSProperties;
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
