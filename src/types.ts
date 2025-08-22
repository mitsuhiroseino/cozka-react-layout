import { StyleProxyOptions } from '@cozka/react-style-proxy';

export type { default as LayoutProps } from './layouts/LayoutProps';

export type WidthLayoutOptions = StyleProxyOptions & {
  /**
   * コンポーネントに設定するdisplayName
   */
  displayName?: string;
};
