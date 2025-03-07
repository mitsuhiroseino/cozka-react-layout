import { CSSProperties } from 'react';
import _unit from '../_unit';
import {
  HorizontalHAlign,
  HorizontalLayoutProps,
  HorizontalVAlign,
} from './types';

/**
 * 横位置のためのスタイル
 */
export const HORIZONTAL_ALIGN: {
  [hAlign in HorizontalHAlign]?: CSSProperties;
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
  fit: {
    justifyContent: 'stretch',
  },
  expand: {
    justifyContent: 'flex-start',
  },
  narrow: {
    justifyContent: 'flex-start',
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
 * 縦位置のためのスタイル
 */
export const VERTICAL_ALIGN: {
  [wrapChildren in 'true' | 'false']: {
    [vAlign in HorizontalVAlign]?: CSSProperties;
  };
} = {
  false: {
    top: {
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
    },
    middle: {
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    bottom: {
      alignItems: 'flex-end',
      flexWrap: 'nowrap',
    },
    fit: {
      alignItems: 'stretch',
      flexWrap: 'nowrap',
    },
    expand: {
      alignItems: 'stretch',
      flexWrap: 'nowrap',
    },
    narrow: {
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
    top: {
      alignContent: 'flex-start',
      flexWrap: 'wrap',
    },
    middle: {
      alignContent: 'center',
      flexWrap: 'wrap',
    },
    bottom: {
      alignContent: 'flex-end',
      flexWrap: 'wrap',
    },
    fit: {
      alignContent: 'stretch',
      flexWrap: 'wrap',
    },
    expand: {
      alignContent: 'stretch',
      flexWrap: 'wrap',
    },
    narrow: {
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
 * 子要素の横位置のためのスタイル
 */
export const CHILD_HORIZONTAL_ALIGN: {
  [hAlign in HorizontalHAlign]?: (
    props: HorizontalLayoutProps,
  ) => CSSProperties;
} = {
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
      minWidth: 0,
    };
  },
  expand: (props) => ({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: _getFlexBasis(props),
    minWidth: 0,
  }),
  narrow: (props) => ({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: _getFlexBasis(props),
    minWidth: 0,
  }),
};

/**
 * 子要素の横位置のためのスタイルのデフォルト
 */
export const DEFAULT_CHILD_HORIZONTAL_ALIGN: (
  props: HorizontalLayoutProps,
) => CSSProperties = ({ childWidth }) => ({
  minWidth: childWidth,
});

/**
 * 子要素の縦位置のためのスタイル
 */
export const CHILD_VERTICAL_ALIGN: {
  [vAlign in HorizontalVAlign]?: (
    props: HorizontalLayoutProps,
  ) => CSSProperties;
} = {
  fit: () => ({
    minHeight: 0,
  }),
  expand: ({ childHeight }) => ({
    minHeight: childHeight,
  }),
  narrow: () => ({
    minHeight: 0,
  }),
};

/**
 * 子要素の縦位置のためのスタイルのデフォルト
 */
export const DEFAULT_CHILD_VERTICAL_ALIGN: (
  props: HorizontalLayoutProps,
) => CSSProperties = ({ childHeight }) => ({
  height: childHeight,
});

function _getFlexBasis({ evenSize, childWidth }: HorizontalLayoutProps) {
  if (evenSize) {
    // 均等
    return 0;
  } else if (childWidth != null) {
    // 指定の幅
    return _unit(childWidth);
  } else {
    // 要素毎の幅
    return 'auto';
  }
}
