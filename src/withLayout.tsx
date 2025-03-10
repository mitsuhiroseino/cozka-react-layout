import proxyStyle from '@cozka/react-style-proxy';
import createReactElement from '@cozka/react-utils/createReactElement';
import ensureComponent from '@cozka/react-utils/ensureComponent';
import transformContent from '@cozka/react-utils/transformContent';
import { cloneElement, ElementType, forwardRef } from 'react';
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
  const Comp = ensureComponent(Component);
  const name = Comp.displayName ?? 'unknown';
  const {
    displayName = `withLayout(${name})`,
    jsxRuntime = createReactElement,
    ...opts
  } = options;
  /**
   * レイアウト機能を追加したコンテナー
   */
  const Layout = forwardRef<T, P & LayoutProps>((props, ref) => {
    const { layout, scroll, childStyle, children, ...rest } = props;
    // restからlayout用のプロパティを削除
    for (const key in LAYOUT_PROPS_KEYS) {
      delete rest[key];
    }
    // layoutを取得
    const { getContainerStyle, getChildStyle, defaultProps } = (LAYOUTS[
      layout
    ] || LAYOUTS.horizontal) as Layout;
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
    let childElStyle = getChildStyle ? getChildStyle(argProps) : null;
    if (childStyle) {
      childElStyle = { ...childElStyle, ...childStyle };
    }
    const styledChildren =
      childElStyle == null
        ? children
        : transformContent(children, (child) => {
            if (typeof child === 'string' || typeof child === 'number') {
              return child;
            } else {
              return cloneElement(
                child,
                proxyStyle(child.props, childElStyle, opts),
              );
            }
          });

    return jsxRuntime(Component, {
      ref,
      children: styledChildren,
      ...(containerProps as P),
    });
  });
  Layout.displayName = displayName;
  return Layout;
}
