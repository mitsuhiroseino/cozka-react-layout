import { CSSProperties } from 'react';
import { LiguidVAlign, LiquidLayoutProps } from './types';

/**
 * 縦位置のためのスタイル
 */
export const VERTICAL_ALIGN: {
  [vAlign in LiguidVAlign]?: CSSProperties;
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
  fit: {
    alignContent: 'stretch',
  },
  expand: {
    alignContent: 'stretch',
  },
  narrow: {
    alignContent: 'stretch',
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
};

/**
 * 子要素の縦位置のためのスタイル
 */
export const CHILD_VERTICAL_ALIGN: {
  [vAlign in LiguidVAlign]?: (props: LiquidLayoutProps) => CSSProperties;
} = {
  fit: () => ({
    height: 'auto',
  }),
  expand: ({ childHeight }) => ({
    minHeight: childHeight,
  }),
  narrow: ({ childHeight }) => ({
    minHeight: childHeight,
  }),
};

/**
 * 子要素の縦位置のためのスタイルのデフォルト
 */
export const DEFAULT_CHILD_VERTICAL_ALIGN: (
  props: LiquidLayoutProps,
) => CSSProperties = ({ childHeight }) => ({
  height: childHeight,
});
