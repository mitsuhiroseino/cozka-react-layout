import { StyleProxyOptions } from '@gusok/react-style-proxy';

export { LayoutProps } from './layouts/types';

export type WidthLayoutOptions = StyleProxyOptions & {
  /**
   * コンポーネントに設定するdisplayName
   */
  displayName?: string;
};
