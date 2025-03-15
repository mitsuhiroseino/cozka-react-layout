# @cozka/react-layout

`@cozka/react-layout` は、React コンポーネントにレイアウト機能を追加する HOC (Higher-Order Component) を提供するライブラリです。子要素の配置方法を制御し、統一されたレイアウトを適用できます。

**[English README is available here](./README.md)**

## インストール

```sh
npm install @cozka/react-layout
```

## 使い方

```tsx
import withLayout from '@cozka/react-layout';

const LayoutBox = withLayout('div');

export default function App() {
  return (
    <LayoutBox layout="stack" orientation="horizontal" scroll>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </LayoutBox>
  );
}
```

## API

### `withLayout(Component, options?)`

#### 引数

- `Component`: レイアウトを適用する対象の React コンポーネント。
- `options`: `WithLayoutOptions` 型のオプション（省略可）。

#### `WithLayoutOptions`

| プロパティ        | 型                                                               | 説明                                                                                        |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `styleProp?`      | `'style'` \| `'css'` \| `'sx'` \| `string`                       | レイアウト用スタイルを適用するプロパティ（デフォルト: `style`）                             |
| `styleApplyMode?` | `'merge'` \| `'append'`                                          | `styleProp` に既存のスタイルがある場合の適用方法（デフォルト: `merge`）                     |
| `displayName?`    | `string`                                                         | 作成するコンポーネントの`displayName`（デフォルト: `withLayout(${Component.displayName})`） |
| `jsxRuntime?`     | `(type: ElementType, props: unknown, key?: Key) => ReactElement` | jsxを返す関数（デフォルト: `jsx`）                                                          |

#### 戻り値

レイアウト機能が追加された新しいコンポーネントを返します。

## `LayoutProps`

戻り値のコンポーネントに渡せるプロパティです。`layout` の値に応じて適用可能なプロパティが変化します。

### 共通プロパティ

| プロパティ   | 型                                                                        | 説明                                                           |
| ------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `layout`     | `'absolute'` \|`'brick'` \|`'center'` \|`'fill'` \|`'matrix'` \|`'stack'` | レイアウトの種類。値によって設定可能なプロパティが変化します。 |
| `scroll?`    | `boolean`                                                                 | スクロールの有無（デフォルト: `false`）                        |
| `childStyle` | `CSSProperties`                                                           | 子要素に適用するスタイル                                       |
| `children`   | `ReactNode`                                                               | 子要素。                                                       |

### 各レイアウトのプロパティ

#### `absolute` （子要素を絶対位置で配置）

| プロパティ | 型           | 説明         |
| ---------- | ------------ | ------------ |
| `layout`   | `'absolute'` |              |
| `vSize?`   | `number`     | 子要素の高さ |
| `hSize?`   | `number`     | 子要素の幅   |

#### `brick` （子要素を親要素の領域内に格子状に並べる）

| プロパティ    | 型                                | 説明                                           |
| ------------- | --------------------------------- | ---------------------------------------------- |
| `layout`      | `'brick'`                         |                                                |
| `orientation` | [整列方向](#整列方向)参照         | 子要素を並べる方向（デフォルト: `horizontal`） |
| `vAlign?`     | [縦位置](#縦位置)参照             | 子要素の縦方向の配置（デフォルト: `top`）      |
| `hAlign?`     | [横位置](#横位置)参照             | 水平方向の配置（デフォルト: `left`）           |
| `vAjust?`     | [サイズの調整](#サイズの調整)参照 | 垂直方向のサイズ調整                           |
| `hAdjust?`    | [サイズの調整](#サイズの調整)参照 | 水平方向のサイズ調整                           |
| `vSize?`      | `number`                          | 子要素の高さ                                   |
| `hSize?`      | `number`                          | 子要素の最小幅                                 |
| `spacing?`    | `number`                          | 子要素の余白                                   |
| `vSpacing?`   | `number`                          | 子要素の上下の余白                             |
| `hSpacing?`   | `number`                          | 子要素の左右の余白                             |

#### `center` （子要素を中央配置）

| プロパティ    | 型                                | 説明                                           |
| ------------- | --------------------------------- | ---------------------------------------------- |
| `layout`      | `'center'`                        |                                                |
| `orientation` | [整列方向](#整列方向)参照         | 子要素を並べる方向（デフォルト: `horizontal`） |
| `vAjust?`     | [サイズの調整](#サイズの調整)参照 | 垂直方向のサイズ調整                           |
| `hAdjust?`    | [サイズの調整](#サイズの調整)参照 | 水平方向のサイズ調整                           |
| `vSize?`      | `number`                          | 子要素の高さ                                   |
| `hSize?`      | `number`                          | 子要素の幅                                     |
| `spacing?`    | `number`                          | 要素間の余白                                   |
| `vSpacing?`   | `number`                          | 垂直方向の余白                                 |
| `hSpacing?`   | `number`                          | 水平方向の余白                                 |

#### `fill` （子要素を親要素の高さと幅に合わせる）

| プロパティ    | 型                        | 説明                                           |
| ------------- | ------------------------- | ---------------------------------------------- |
| `layout`      | `'fill'`                  |                                                |
| `orientation` | [整列方向](#整列方向)参照 | 子要素を並べる方向（デフォルト: `horizontal`） |
| `spacing?`    | `number`                  | 要素間の余白                                   |
| `vSpacing?`   | `number`                  | 垂直方向の余白                                 |
| `hSpacing?`   | `number`                  | 水平方向の余白                                 |

#### `matrix` （子要素を格子状に並べる）

| プロパティ   | 型                                 | 説明                                                                    |
| ------------ | ---------------------------------- | ----------------------------------------------------------------------- |
| `layout`     | `'matrix'`                         |                                                                         |
| `vSize?`     | `number`                           | 子要素の高さ                                                            |
| `hSize?`     | `number`                           | 子要素の幅                                                              |
| `spacing?`   | `number`                           | 子要素の余白                                                            |
| `vSpacing?`  | `number`                           | 子要素の上下の余白                                                      |
| `hSpacing?`  | `number`                           | 子要素の左右の余白                                                      |
| `vCount?`    | `number`                           | 子要素の縦方向の数                                                      |
| `hCount?`    | `number`                           | 子要素の横方向の数                                                      |
| `vTemplate?` | `string` \| `(string \| number)[]` | CSS の `grid-template-rows` 形式、または行ごとの高さを指定した配列      |
| `hTemplate?` | `string` \| `(string \| number)[]` | CSS の `grid-template-columns` 形式、またはカラムごとの幅を指定した配列 |

#### `stack` （子要素を一列に並べる）

| プロパティ    | 型                                | 説明                                           |
| ------------- | --------------------------------- | ---------------------------------------------- |
| `layout`      | `'stack'`                         |                                                |
| `orientation` | [整列方向](#整列方向)参照         | 子要素を並べる方向（デフォルト: `horizontal`） |
| `vAlign?`     | [縦位置](#縦位置)参照             | 子要素の縦方向の配置（デフォルト: `top`）      |
| `hAlign?`     | [横位置](#横位置)参照             | 水平方向の配置（デフォルト: `left`）           |
| `vAjust?`     | [サイズの調整](#サイズの調整)参照 | 垂直方向のサイズ調整                           |
| `hAdjust?`    | [サイズの調整](#サイズの調整)参照 | 水平方向のサイズ調整                           |
| `vSize?`      | `number`                          | 子要素の高さ                                   |
| `hSize?`      | `number`                          | 子要素の幅                                     |
| `spacing?`    | `number`                          | 要素間の余白                                   |
| `vSpacing?`   | `number`                          | 垂直方向の余白                                 |
| `hSpacing?`   | `number`                          | 水平方向の余白                                 |

## プロパティ値

### 整列方向

| 値             | 説明                   |
| -------------- | ---------------------- |
| `'horizontal'` | 子要素を横方向に並べる |
| `'vertical'`   | 子要素を縦方向に並べる |

### 縦位置

| 値                | 説明                   |
| ----------------- | ---------------------- |
| `'top'`           | 上寄せ                 |
| `'middle'`        | 中央配置               |
| `'bottom'`        | 下寄せ                 |
| `'space-between'` | 要素間の余白を均等配置 |
| `'space-around'`  | 両端に余白を追加       |
| `'space-evenly'`  | すべての余白を均等配置 |
| `'fit'`           | 親要素に合わせて伸縮   |

### 横位置

| 値                | 説明                   |
| ----------------- | ---------------------- |
| `'left'`          | 左寄せ                 |
| `'center'`        | 中央配置               |
| `'right'`         | 右寄せ                 |
| `'space-between'` | 要素間の余白を均等配置 |
| `'space-around'`  | 両端に余白を追加       |
| `'space-evenly'`  | すべての余白を均等配置 |
| `'fit'`           | 親要素に合わせて伸縮   |

### サイズの調整

| 値         | 説明                       |
| ---------- | -------------------------- |
| `'none'`   | 調整しない                 |
| `'expand'` | 親要素を満たすように広げる |
| `'narrow'` | 親要素に収まるように狭める |

## ライセンス

MIT
