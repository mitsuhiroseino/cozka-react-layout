# @gusok/react-layout

`@gusok/react-layout` は、React コンポーネントにレイアウト機能を追加する HOC (Higher-Order Component) を提供するライブラリです。子要素の配置方法を制御し、統一されたレイアウトを適用できます。

**[English README is available here](./README.md)**

## インストール

```sh
npm install @gusok/react-layout
```

## 使い方

```tsx
import withLayout from '@gusok/react-layout';

const LayoutBox = withLayout('div');

export default function App() {
  return (
    <LayoutBox layout="horizontal" scroll>
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

| プロパティ       | 型                                         | 説明                                                                    |
| ---------------- | ------------------------------------------ | ----------------------------------------------------------------------- |
| `styleProp`      | `'style'` \| `'css'` \| `'sx'` \| `string` | レイアウト用スタイルを適用するプロパティ（デフォルト: `style`）         |
| `styleApplyMode` | `'merge'` \| `'append'`                    | `styleProp` に既存のスタイルがある場合の適用方法（デフォルト: `merge`） |

#### 戻り値

レイアウト機能が追加された新しいコンポーネントを返します。

## `LayoutProps`

戻り値のコンポーネントに渡せるプロパティです。`layout` の値に応じて適用可能なプロパティが変化します。

### 共通プロパティ

| プロパティ | 型                                                                                                        | 説明                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `layout`   | `'absolute'` \|`'center'` \|`'fit'` \|`'horizontal'` \|`'liquid'` \|`'matrix'` \|`'solid'` \|`'vertical'` | レイアウトの種類。値によって設定可能なプロパティが変化します。 |
| `scroll?`  | `boolean`                                                                                                 | スクロールの有無（デフォルト: `false`）                        |
| `children` | `ReactNode`                                                                                               | 子要素。                                                       |

### 各レイアウトのプロパティ

#### `absolute` （子要素を絶対位置で配置）

| プロパティ     | 型           | 説明         |
| -------------- | ------------ | ------------ |
| `layout`       | `'absolute'` |              |
| `childHeight?` | `number`     | 子要素の高さ |
| `childWidth?`  | `number`     | 子要素の幅   |

#### `center` （子要素を中央配置）

| プロパティ     | 型         | 説明         |
| -------------- | ---------- | ------------ |
| `layout`       | `'center'` |              |
| `childHeight?` | `number`   | 子要素の高さ |
| `childWidth?`  | `number`   | 子要素の幅   |

#### `fit` （子要素を親要素にフィットさせる）

| プロパティ | 型      | 説明 |
| ---------- | ------- | ---- |
| `layout`   | `'fit'` |      |

#### `horizontal` （子要素を横方向に並べる）

| プロパティ      | 型                    | 説明                                                |
| --------------- | --------------------- | --------------------------------------------------- |
| `layout`        | `'horizontal'`        |                                                     |
| `childHeight?`  | `number`              | 子要素の高さ                                        |
| `childWidth?`   | `number`              | 子要素の幅                                          |
| `spacing?`      | `number`              | 要素間の余白                                        |
| `hSpacing?`     | `number`              | 水平方向の余白                                      |
| `vSpacing?`     | `number`              | 垂直方向の余白                                      |
| `hAlign?`       | [横位置](#横位置)参照 | 水平方向の配置（デフォルト: `left`）                |
| `vAlign?`       | [縦位置](#縦位置)参照 | 垂直方向の配置（デフォルト: `top`）                 |
| `wrapChildren?` | `boolean`             | 折り返しを許可（デフォルト: `false`）               |
| `evenSize?`     | `boolean`             | 子要素のサイズを均等に揃える（デフォルト: `false`） |

#### `liquid` （子要素が親要素の横幅を満たすように幅を調整し並べる）

| プロパティ       | 型                    | 説明                                      |
| ---------------- | --------------------- | ----------------------------------------- |
| `layout`         | `'liquid'`            |                                           |
| `childHeight?`   | `number`              | 子要素の高さ                              |
| `childMinWidth?` | `number`              | 子要素の最小幅                            |
| `spacing?`       | `number`              | 子要素の余白                              |
| `hSpacing?`      | `number`              | 子要素の左右の余白                        |
| `vSpacing?`      | `number`              | 子要素の上下の余白                        |
| `vAlign?`        | [縦位置](#縦位置)参照 | 子要素の縦方向の配置（デフォルト: `top`） |

#### `matrix` （子要素を格子状に並べる）

| プロパティ     | 型                                 | 説明                                                                    |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------- |
| `layout`       | `'matrix'`                         |                                                                         |
| `childHeight?` | `number`                           | 子要素の高さ                                                            |
| `childWidth?`  | `number`                           | 子要素の幅                                                              |
| `spacing?`     | `number`                           | 子要素の余白                                                            |
| `hSpacing?`    | `number`                           | 子要素の左右の余白                                                      |
| `vSpacing?`    | `number`                           | 子要素の上下の余白                                                      |
| `hCount?`      | `number`                           | 子要素の横方向の数                                                      |
| `vCount?`      | `number`                           | 子要素の縦方向の数                                                      |
| `hTemplate?`   | `string` \| `(string \| number)[]` | CSS の `grid-template-columns` 形式、またはカラムごとの幅を指定した配列 |
| `vTemplate?`   | `string` \| `(string \| number)[]` | CSS の `grid-template-rows` 形式、または行ごとの高さを指定した配列      |

#### `solid` （子要素が親要素の横幅に収まるように要素数を調整し並べる）

| プロパティ       | 型                                              | 説明                                       |
| ---------------- | ----------------------------------------------- | ------------------------------------------ |
| `layout`         | `'solid'`                                       |                                            |
| `childHeight?`   | `number`                                        | 子要素の高さ                               |
| `childMinWidth?` | `number`                                        | 子要素の最小幅                             |
| `spacing?`       | `number`                                        | 子要素の余白                               |
| `hSpacing?`      | `number`                                        | 子要素の左右の余白                         |
| `vSpacing?`      | `number`                                        | 子要素の上下の余白                         |
| `hAlign`         | [横位置](#横位置)参照(`'fit'`,`'strech'`を除く) | 子要素の横方向の配置（デフォルト: `left`） |
| `vAlign?`        | [縦位置](#縦位置)参照                           | 子要素の縦方向の配置（デフォルト: `top`）  |

#### `vertical` （子要素を縦方向に並べる）

| プロパティ      | 型                    | 説明                                            |
| --------------- | --------------------- | ----------------------------------------------- |
| `layout`        | `'vertical'`          |                                                 |
| `childHeight?`  | `number`              | 子要素の高さ                                    |
| `childWidth?`   | `number`              | 子要素の幅                                      |
| `spacing?`      | `number`              | 要素間の余白                                    |
| `hSpacing?`     | `number`              | 水平方向の余白                                  |
| `vSpacing?`     | `number`              | 垂直方向の余白                                  |
| `hAlign?`       | [横位置](#横位置)参照 | 水平方向の配置（デフォルト: `left`）            |
| `vAlign?`       | [縦位置](#縦位置)参照 | 垂直方向の配置（デフォルト: `top`）             |
| `wrapChildren?` | `boolean`             | 折り返しを許可（デフォルト: `false`）           |
| `evenSize?`     | `boolean`             | 子要素の幅を均等に揃える（デフォルト: `false`） |

## プロパティ値

### 縦位置

| 値                | 説明                     |
| ----------------- | ------------------------ |
| `'top'`           | 上寄せ                   |
| `'middle'`        | 中央配置                 |
| `'bottom'`        | 下寄せ                   |
| `'fit'`           | 親要素に合わせて伸縮     |
| `'stretch'`       | 親要素に収まるように拡張 |
| `'space-between'` | 要素間の余白を均等配置   |
| `'space-around'`  | 両端に余白を追加         |
| `'space-evenly'`  | すべての余白を均等配置   |

### 横位置

| 値                | 説明                     |
| ----------------- | ------------------------ |
| `'left'`          | 左寄せ                   |
| `'center'`        | 中央配置                 |
| `'right'`         | 右寄せ                   |
| `'fit'`           | 親要素に合わせて伸縮     |
| `'stretch'`       | 親要素に収まるように拡張 |
| `'space-between'` | 要素間の余白を均等配置   |
| `'space-around'`  | 両端に余白を追加         |
| `'space-evenly'`  | すべての余白を均等配置   |

## ライセンス

MIT
