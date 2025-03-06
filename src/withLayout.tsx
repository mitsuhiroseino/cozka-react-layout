import proxyStyle from '@gusok/react-style-proxy';
import transformContent from '@gusok/react-utils/transformContent';
import { cloneElement, createElement, ElementType, forwardRef } from 'react';
import { LAYOUT_PROPS_KEYS } from './_constants';
import * as LAYOUTS from './layouts';
import { Layout, LayoutProps } from './layouts';
import { WidthLayoutOptions } from './types';

/**
 * コンテナーのレイアウト機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function withLayout<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WidthLayoutOptions = {},
) {
  const name =
    typeof Component === 'string'
      ? Component
      : (Component.displayName ?? 'unknown');
  const { displayName = `withLayout(${name})`, ...opts } = options;
  /**
   * レイアウト機能を追加したコンテナー
   */
  const Layout = forwardRef<T, P & LayoutProps>((props, ref) => {
    const { layout, scroll, children, ...rest } = props;
    // restからlayout用のプロパティを削除
    for (const key in LAYOUT_PROPS_KEYS) {
      delete rest[key];
    }
    // layoutを取得
    const { getContainerStyle, getChildStyle, defaultProps } = LAYOUTS[
      layout || 'horizontal'
    ] as Layout;
    const argProps = { ...props };
    if (defaultProps) {
      for (const key in defaultProps) {
        if (argProps[key] === undefined) {
          argProps[key] = defaultProps[key];
        }
      }
    }
    // コンテナーのスタイル
    const containerStyle = getContainerStyle
      ? getContainerStyle(argProps)
      : null;
    if (scroll) {
      containerStyle.overflow = 'auto';
    }
    const containerProps = proxyStyle(rest, containerStyle, opts);
    // 子要素のスタイル
    const childStyle = getChildStyle ? getChildStyle(argProps) : null;
    const styledChildren =
      childStyle == null
        ? children
        : transformContent(children, (child) => {
            if (typeof child === 'string' || typeof child === 'number') {
              return child;
            } else {
              return cloneElement(
                child,
                proxyStyle(child.props, childStyle, opts),
              );
            }
          });

    return createElement(
      Component,
      { ref, ...(containerProps as P) },
      styledChildren,
    );
  });
  Layout.displayName = displayName;
  return Layout;
}
