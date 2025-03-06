import { CSSProperties } from 'react';

/**
 * 向きに応じたスタイル
 */
export const ORIENTATION: {
  [orientation in 'horizontal' | 'vertical']: CSSProperties;
} = {
  horizontal: {
    gridAutoFlow: 'column',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '1fr',
  },
  vertical: {
    gridAutoFlow: 'row',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
  },
};
