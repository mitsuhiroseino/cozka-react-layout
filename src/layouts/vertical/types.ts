import {
  AlignProps,
  ChildSizeProps,
  LayoutPropsBase,
  SpacingProps,
} from '../types';

/**
 * verticalのプロパティ
 */
export type VerticalLayoutProps = LayoutPropsBase<'vertical'> &
  AlignProps &
  ChildSizeProps &
  SpacingProps & {
    /**
     * 子要素が親要素の領域を超えたら折り返す
     */
    wrapChildren?: boolean;
  };
