# @cozka/react-layout

`@cozka/react-layout` is a library that provides a Higher-Order Component (HOC) to add layout functionality to React components.
It allows you to control how child elements are arranged and apply a unified layout.

**[日本語の README はこちら](./README.ja.md)**

## Installation

```sh
npm install @cozka/react-layout
```

## Usage

```tsx
import withLayout from '@cozka/react-layout';

const LayoutDiv = withLayout('div');

export default function App() {
  return (
    <LayoutDiv layout="stack" orientation="horizontal" scroll>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </LayoutDiv>
  );
}
```

## API

### `withLayout(Component, options?)`

#### Parameters

- `Component`: The target React component to apply the layout to.
- `options`: Optional settings of type `WithLayoutOptions`.

#### `WithLayoutOptions`

| Property          | Type                                       | Description                                                                               |
| ----------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `styleProp?`      | `'style'` \| `'css'` \| `'sx'` \| `string` | The prop to apply layout styles to (default: `style`).                                    |
| `styleApplyMode?` | `'merge'` \| `'append'`                    | How to apply styles when `styleProp` already has styles (default: `merge`).               |
| `displayName?`    | `string`                                   | `displayName` of the created component (default: `withLayout(${Component.displayName})`). |

#### Returns

A new component with layout functionality added.

## `LayoutProps`

Props that can be passed to the returned component. Available props vary depending on the value of `layout`.

### Common Props

| Property      | Type                                                                           | Description                                                       |
| ------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `layout`      | `'balance'` \| `'brick'` \| `'conform'` \| `'matrix'` \| `'plot'` \| `'stack'` | The layout type. Determines which additional props are available. |
| `scroll?`     | `boolean`                                                                      | Whether to enable scrolling (default: `false`).                   |
| `childStyle?` | `CSSProperties`                                                                | Styles applied to child elements.                                 |
| `children`    | `ReactNode`                                                                    | Child elements.                                                   |

### Layout-Specific Props

#### `balance`

Arranges child elements evenly in a single row or column.
The main differences from `stack` are:

- When children are smaller than the container, extra spacingAll is added.
- When `alignVertical` is `middle` or `alignHorizontal` is `center` and children exceed the container size, the top/left edges of the children are still visible.

| Property             | Type                                              | Description                                              |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| `layout`             | `'balance'`                                       |                                                          |
| `orientation`        | See [Orientation](#orientation)                   | Direction to arrange children (default: `'horizontal'`). |
| `alignHorizontal?`   | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `'left'`).                |
| `alignVertical?`     | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment (default: `'top'`).                   |
| `sizeHorizontal?`    | `number`                                          | Child width.                                             |
| `sizeVertical?`      | `number`                                          | Child height.                                            |
| `adjustHorizontal?`  | See [Size Adjustment](#size-adjustment)           | Horizontal size adjustment.                              |
| `adjustVertical?`    | See [Size Adjustment](#size-adjustment)           | Vertical size adjustment.                                |
| `spacingAll?`        | `number`                                          | Spacing between children.                                |
| `spacingHorizontal?` | `number`                                          | Horizontal spacingAll between children.                  |
| `spacingVertical?`   | `number`                                          | Vertical spacingAll between children.                    |

#### `brick` (Grid layout fitted to container size)

Arranges children in a grid that fits the container size.
When children exceed the container size in the `orientation` direction, they wrap to the next row/column.

| Property             | Type                                              | Description                                                    |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------------- |
| `layout`             | `'brick'`                                         |                                                                |
| `orientation`        | See [Orientation](#orientation)                   | Direction to arrange children (default: `'horizontal'`).       |
| `alignHorizontal?`   | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `'left'`).                      |
| `alignVertical?`     | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment (default: `'top'`).                         |
| `sizeHorizontal?`    | `number`                                          | Child width.                                                   |
| `sizeVertical?`      | `number`                                          | Child height.                                                  |
| `adjustHorizontal?`  | See [Size Adjustment](#size-adjustment)           | Horizontal adjustment (ignored if `orientation='horizontal'`). |
| `adjustVertical?`    | See [Size Adjustment](#size-adjustment)           | Vertical adjustment (ignored if `orientation='vertical'`).     |
| `spacingAll?`        | `number`                                          | Spacing between children.                                      |
| `spacingHorizontal?` | `number`                                          | Horizontal spacingAll between children.                        |
| `spacingVertical?`   | `number`                                          | Vertical spacingAll between children.                          |

#### `conform`

Adjusts children to match the container’s height and width.

| Property             | Type                            | Description                                              |
| -------------------- | ------------------------------- | -------------------------------------------------------- |
| `layout`             | `'conform'`                     |                                                          |
| `orientation`        | See [Orientation](#orientation) | Direction to arrange children (default: `'horizontal'`). |
| `spacingAll?`        | `number`                        | Spacing between children.                                |
| `spacingHorizontal?` | `number`                        | Horizontal spacingAll.                                   |
| `spacingVertical?`   | `number`                        | Vertical spacingAll.                                     |

#### `matrix`

Arranges children in a grid.
If the number of rows/columns is specified, it limits the number of items accordingly.

| Property              | Type                               | Description                                                                    |
| --------------------- | ---------------------------------- | ------------------------------------------------------------------------------ |
| `layout`              | `'matrix'`                         |                                                                                |
| `sizeHorizontal?`     | `number`                           | Child width.                                                                   |
| `sizeVertical?`       | `number`                           | Child height.                                                                  |
| `spacingAll?`         | `number`                           | Spacing between children.                                                      |
| `spacingHorizontal?`  | `number`                           | Horizontal spacingAll between children.                                        |
| `spacingVertical?`    | `number`                           | Vertical spacingAll between children.                                          |
| `countHorizontal?`    | `number`                           | Number of columns.                                                             |
| `countVertical?`      | `number`                           | Number of rows.                                                                |
| `templateHorizontal?` | `string` \| `(string \| number)[]` | CSS `grid-template-columns` syntax or an array specifying each column's width. |
| `templateVertical?`   | `string` \| `(string \| number)[]` | CSS `grid-template-rows` syntax or an array specifying each row's height.      |

#### `plot`

Positions each child absolutely according to its `top`, `bottom`, `left`, and `right` styles.

| Property          | Type     | Description   |
| ----------------- | -------- | ------------- |
| `layout`          | `'plot'` |               |
| `sizeHorizontal?` | `number` | Child width.  |
| `sizeVertical?`   | `number` | Child height. |

#### `stack`

Arranges children in a single row or column.
The main differences from `balance` are:

- No extra spacingAll when children are smaller than the container.
- When `alignVertical` is `middle` or `alignHorizontal` is `center` and children exceed the container size, the top/left edges are not visible.

| Property             | Type                                              | Description                                              |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| `layout`             | `'stack'`                                         |                                                          |
| `orientation`        | See [Orientation](#orientation)                   | Direction to arrange children (default: `'horizontal'`). |
| `alignHorizontal?`   | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `'left'`).                |
| `alignVertical?`     | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment (default: `'top'`).                   |
| `sizeHorizontal?`    | `number`                                          | Child width.                                             |
| `sizeVertical?`      | `number`                                          | Child height.                                            |
| `adjustHorizontal?`  | See [Size Adjustment](#size-adjustment)           | Horizontal size adjustment.                              |
| `adjustVertical?`    | See [Size Adjustment](#size-adjustment)           | Vertical size adjustment.                                |
| `spacingAll?`        | `number`                                          | Spacing between children.                                |
| `spacingHorizontal?` | `number`                                          | Horizontal spacingAll.                                   |
| `spacingVertical?`   | `number`                                          | Vertical spacingAll.                                     |

## Property Values

### Orientation

Specifies the direction to arrange children.

| Value          | Description                    |
| -------------- | ------------------------------ |
| `'horizontal'` | Arrange children horizontally. |
| `'vertical'`   | Arrange children vertically.   |

### Horizontal Alignment

Specifies the horizontal position of children.
Generally relative to the container frame, but some layouts align relative to the allocated area for each child.

| Value             | Description                           |
| ----------------- | ------------------------------------- |
| `'left'`          | Align to left.                        |
| `'center'`        | Center horizontally.                  |
| `'right'`         | Align to right.                       |
| `'space-between'` | Evenly distribute spacingAll between. |
| `'space-around'`  | Add spacingAll on both ends.          |
| `'space-evenly'`  | Evenly distribute all spacingAll.     |
| `'fit'`           | Stretch/shrink to fit container.      |

### Vertical Alignment

Specifies the vertical position of children.
Generally relative to the container frame, but some layouts align relative to the allocated area for each child.

| Value             | Description                           |
| ----------------- | ------------------------------------- |
| `'top'`           | Align to top.                         |
| `'middle'`        | Center vertically.                    |
| `'bottom'`        | Align to bottom.                      |
| `'space-between'` | Evenly distribute spacingAll between. |
| `'space-around'`  | Add spacingAll on both ends.          |
| `'space-evenly'`  | Evenly distribute all spacingAll.     |
| `'fit'`           | Stretch/shrink to fit container.      |

### Size Adjustment

Specifies how to adjust child size when it does not match the container size.
If you always want children to match the container, set [Vertical Alignment](#vertical-alignment) or [Horizontal Alignment](#horizontal-alignment) to `'fit'` instead of using this property.

| Value      | Description                         |
| ---------- | ----------------------------------- |
| `'none'`   | No adjustment.                      |
| `'expand'` | Expand to fill the container.       |
| `'narrow'` | Shrink to fit within the container. |

## License

MIT
