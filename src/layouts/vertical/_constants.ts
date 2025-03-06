import { CSSProperties } from 'react';
import _unit from '../_unit';
import { VerticalHAlign, VerticalLayoutProps, VerticalVAlign } from './types';

/**
 * 横位置のためのスタイル
 */
export const HORIZONTAL_ALIGN: {
  [wrapChildren in 'false' | 'true']: {
    [hAlign in VerticalHAlign]?: CSSProperties;
  };
} = {
  false: {
    left: {
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
    },
    center: {
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    right: {
      alignItems: 'flex-end',
      flexWrap: 'nowrap',
    },
    stretch: {
      alignItems: 'stretch',
      flexWrap: 'nowrap',
    },
    fit: {
      alignItems: 'stretch',
      flexWrap: 'nowrap',
    },
    'space-between': {
      alignItems: 'space-between',
      flexWrap: 'nowrap',
    },
    'space-around': {
      alignItems: 'space-around',
      flexWrap: 'nowrap',
    },
    'space-evenly': {
      alignItems: 'space-evenly',
      flexWrap: 'nowrap',
    },
  },
  true: {
    left: {
      alignContent: 'flex-start',
      flexWrap: 'wrap',
    },
    center: {
      alignContent: 'center',
      flexWrap: 'wrap',
    },
    right: {
      alignContent: 'flex-end',
      flexWrap: 'wrap',
    },
    stretch: {
      alignContent: 'stretch',
      flexWrap: 'wrap',
    },
    fit: {
      alignContent: 'stretch',
      flexWrap: 'wrap',
    },
    'space-between': {
      alignContent: 'space-between',
      flexWrap: 'wrap',
    },
    'space-around': {
      alignContent: 'space-around',
      flexWrap: 'wrap',
    },
    'space-evenly': {
      alignContent: 'space-evenly',
      flexWrap: 'wrap',
    },
  },
};

/**
 * 縦位置のためのスタイル
 */
export const VERTICAL_ALIGN: {
  [vAlign in VerticalVAlign]?: CSSProperties;
} = {
  top: {
    justifyContent: 'flex-start',
  },
  middle: {
    justifyContent: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  stretch: {
    justifyContent: 'stretch',
  },
  fit: {
    justifyContent: 'stretch',
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
};

/**
 * 子要素の横位置のためのスタイル
 */
export const CHILD_HORIZONTAL_ALIGN: {
  [hAlign in VerticalHAlign]?: (props: VerticalLayoutProps) => CSSProperties;
} = {
  stretch: ({ childWidth }) => ({ minWidth: childWidth }),
  fit: () => ({ minWidth: 0 }),
};

/**
 * 子要素の横位置のためのスタイルのデフォルト
 */
export const DEFAULT_CHILD_HORIZONTAL_ALIGN: (
  props: VerticalLayoutProps,
) => CSSProperties = ({ childWidth }) => ({ width: childWidth });

/**
 * 子要素の縦位置のためのスタイル
 */
export const CHILD_VERTICAL_ALIGN: {
  [vAlign in VerticalVAlign]?: (props: VerticalLayoutProps) => CSSProperties;
} = {
  stretch: (props) => ({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: _getFlexBasis(props),
  }),
  fit: (props) => {
    const { wrapChildren } = props;
    let flexShrink;
    if (wrapChildren) {
      // 1だと1列に収まるようにshrinkさせてしまうので0にする
      flexShrink = 0;
    } else {
      flexShrink = 1;
    }
    return {
      flexGrow: 1,
      flexShrink,
      flexBasis: _getFlexBasis(props),
    };
  },
};

/**
 * 子要素の縦位置のためのスタイルのデフォルト
 */
export const DEFAULT_CHILD_VERTICAL_ALIGN: (
  props: VerticalLayoutProps,
) => CSSProperties = ({ childHeight }) => ({ minHeight: childHeight });

function _getFlexBasis({ evenSize, childWidth }: VerticalLayoutProps) {
  if (evenSize) {
    // 均等
    return 0;
  } else if (childWidth != null) {
    // 指定の高さ
    return _unit(childWidth);
  } else {
    // 要素毎の高さ
    return 'auto';
  }
}
