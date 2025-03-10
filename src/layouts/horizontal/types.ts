import {
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  SpacingProps,
} from '../types';

/**
 * horizontalのプロパティ
 */
export type HorizontalLayoutProps = LayoutPropsBase<'horizontal'> &
  AlignProps &
  ChildSizeProps &
  SpacingProps & {
    /**
     * 子要素が親要素の領域を超えたら折り返す
     */
    wrapChildren?: boolean;
  };
