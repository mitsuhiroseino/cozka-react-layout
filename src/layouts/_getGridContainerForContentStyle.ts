import unit from '@cozka/react-utils/unit';
import { CSSProperties } from 'react';
import {
  AdjustProps,
  AlignHorizontal,
  AlignProps,
  AlignVertical,
  ChildCountProps,
  ChildSize,
  ChildSizeProps,
  GridTemplateProps,
  LayoutAdjust,
  Orientation,
  SpacingProps,
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
  horizontal: ({
    sizeHorizontal,
    alignHorizontal,
    countHorizontal,
    sizeVertical,
    adjustVertical,
  }) => {
    return {
      gridAutoFlow: 'row',
      gridTemplateColumns: _getGridMainAxisTemplate(
        sizeHorizontal,
        alignHorizontal,
        countHorizontal,
      ),
      gridAutoRows: _getGridClossAxisAuto(sizeVertical, adjustVertical),
    };
  },
  vertical: ({
    sizeVertical,
    alignVertical,
    countVertical,
    sizeHorizontal,
    adjustHorizontal,
  }) => {
    return {
      gridAutoFlow: 'column',
      gridAutoColumns: _getGridClossAxisAuto(sizeHorizontal, adjustHorizontal),
      gridTemplateRows: _getGridMainAxisTemplate(
        sizeVertical,
        alignVertical,
        countVertical,
      ),
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
  childSize: ChildSize,
  align: AlignHorizontal | AlignVertical,
  count: number,
) {
  if (align === 'fit') {
    // fitの場合
    if (count != null && childSize != null) {
      return `repeat(${count}, minmax(${unit(childSize)}, 1fr))`;
    } else if (count != null) {
      return `repeat(${count}, 1fr)`;
    } else if (childSize != null) {
      return `repeat(auto-fill, minmax(${unit(childSize)}, 1fr))`;
    } else {
      return 'repeat(auto-fill, minmax(0, 1fr))';
    }
  } else {
    // fit以外の場合
    if (count != null && childSize != null) {
      return `repeat(${count}, ${unit(childSize)})`;
    } else if (count != null) {
      return `repeat(${count}, max-content)`;
    } else if (childSize != null) {
      return `repeat(auto-fill, ${unit(childSize)})`;
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
function _getGridClossAxisAuto(childSize: ChildSize, adjust: LayoutAdjust) {
  if (adjust === 'expand') {
    if (childSize != null) {
      return `minmax(${unit(childSize)}, 100%)`;
    } else {
      return `minmax(auto, 100%)`;
    }
  } else if (adjust === 'narrow') {
    if (childSize != null) {
      return `minmax(0, ${unit(childSize)})`;
    } else {
      return `minmax(0, auto)`;
    }
  }
}

/**
 * 「横位置」のためのスタイル
 */
const HALIGN: {
  [alignHorizontal in AlignHorizontal]?: CSSProperties;
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
  [alignVertical in AlignVertical]?: CSSProperties;
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
