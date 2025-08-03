# @cozka/react-layout

`@cozka/react-layout` is a library that provides a Higher-Order Component (HOC) to add layout functionality to React components.
It allows you to control the arrangement of child elements and apply a consistent layout.

**[日本語の README はこちら](./README.ja.md)**

## Installation

```sh
npm install @cozka/react-layout
```

## Usage

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

#### Parameters

- `Component`: The target React component to which the layout will be applied.
- `options`: An optional object of type `WithLayoutOptions`.

#### `WithLayoutOptions`

| Property          | Type                                                             | Description                                                                                |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `styleProp?`      | `'style'` \| `'css'` \| `'sx'` \| `string`                       | The prop used to apply layout styles (default: `style`)                                    |
| `styleApplyMode?` | `'merge'` \| `'append'`                                          | How to apply styles if `styleProp` already contains values (default: `merge`)              |
| `displayName?`    | `string`                                                         | `displayName` of the resulting component (default: `withLayout(${Component.displayName})`) |
| `jsxRuntime?`     | `(type: ElementType, props: unknown, key?: Key) => ReactElement` | A function that returns JSX (default: `jsx`)                                               |

#### Returns

Returns a new component with layout functionality.

## `LayoutProps`

Props that can be passed to the returned component. Available props vary depending on the `layout` value.

### Common Props

| Property      | Type                                                                                          | Description                                                   |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `layout`      | `'absolute'` \| `'balance'` \| `'brick'` \| `'center'` \| `'fill'` \| `'matrix'` \| `'stack'` | Layout type. The available props vary depending on the value. |
| `scroll?`     | `boolean`                                                                                     | Enables scrolling (default: `false`)                          |
| `childStyle?` | `CSSProperties`                                                                               | Styles to apply to child elements                             |
| `children`    | `ReactNode`                                                                                   | Child elements                                                |

### Layout-Specific Props

#### `absolute`

Places child elements at absolute positions based on styles like `top`, `bottom`, `left`, and `right`.

| Property | Type         | Description        |
| -------- | ------------ | ------------------ |
| `layout` | `'absolute'` |                    |
| `vSize?` | `number`     | Height of children |
| `hSize?` | `number`     | Width of children  |

#### `balance`

Evenly arranges child elements in a single row.
Unlike `stack`, this layout adds spacing when children do not fill the container,
and allows parts of oversized children to be visible when `vAlign` is `middle` or `hAlign` is `center`.

| Property      | Type                                              | Description                                           |
| ------------- | ------------------------------------------------- | ----------------------------------------------------- |
| `layout`      | `'balance'`                                       |                                                       |
| `orientation` | See [Orientation](#orientation)                   | Direction to arrange children (default: `horizontal`) |
| `vAlign?`     | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment of children (default: `top`)       |
| `hAlign?`     | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment of children (default: `left`)    |
| `vSize?`      | `number`                                          | Height of children                                    |
| `hSize?`      | `number`                                          | Width of children                                     |
| `spacing?`    | `number`                                          | Margin around children                                |
| `vSpacing?`   | `number`                                          | Vertical margin                                       |
| `hSpacing?`   | `number`                                          | Horizontal margin                                     |

#### `brick` (Grid layout that fits child elements to the container)

Arranges children in a grid layout that adapts to the container size.
Wraps to the next line/column when child elements exceed the size in the layout direction.

| Property      | Type                                              | Description                                           |
| ------------- | ------------------------------------------------- | ----------------------------------------------------- |
| `layout`      | `'brick'`                                         |                                                       |
| `orientation` | See [Orientation](#orientation)                   | Direction to arrange children (default: `horizontal`) |
| `vAlign?`     | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment (default: `top`)                   |
| `hAlign?`     | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `left`)                |
| `vSize?`      | `number`                                          | Height of children                                    |
| `hSize?`      | `number`                                          | Width of children                                     |
| `spacing?`    | `number`                                          | Margin around children                                |
| `vSpacing?`   | `number`                                          | Vertical margin                                       |
| `hSpacing?`   | `number`                                          | Horizontal margin                                     |

#### `fill`

Stretches children to fill the container's width and height.

| Property      | Type                            | Description                                           |
| ------------- | ------------------------------- | ----------------------------------------------------- |
| `layout`      | `'fill'`                        |                                                       |
| `orientation` | See [Orientation](#orientation) | Direction to arrange children (default: `horizontal`) |
| `spacing?`    | `number`                        | Margin between elements                               |
| `vSpacing?`   | `number`                        | Vertical spacing                                      |
| `hSpacing?`   | `number`                        | Horizontal spacing                                    |

#### `matrix`

Places children in a grid layout.
Limits the number of elements if the number of rows and columns is specified.

| Property     | Type                               | Description                                              |
| ------------ | ---------------------------------- | -------------------------------------------------------- |
| `layout`     | `'matrix'`                         |                                                          |
| `vSize?`     | `number`                           | Height of children                                       |
| `hSize?`     | `number`                           | Width of children                                        |
| `spacing?`   | `number`                           | Margin around children                                   |
| `vSpacing?`  | `number`                           | Vertical margin                                          |
| `hSpacing?`  | `number`                           | Horizontal margin                                        |
| `vCount?`    | `number`                           | Number of rows                                           |
| `hCount?`    | `number`                           | Number of columns                                        |
| `vTemplate?` | `string` \| `(string \| number)[]` | `grid-template-rows` format or array of row heights      |
| `hTemplate?` | `string` \| `(string \| number)[]` | `grid-template-columns` format or array of column widths |

#### `stack`

Arranges children in a single row or column.
Unlike `balance`, this layout does not add spacing when children underfill the container,
and clips the overflow when `vAlign` is `middle` or `hAlign` is `center`.

| Property      | Type                                              | Description                                           |
| ------------- | ------------------------------------------------- | ----------------------------------------------------- |
| `layout`      | `'stack'`                                         |                                                       |
| `orientation` | See [Orientation](#orientation)                   | Direction to arrange children (default: `horizontal`) |
| `vAlign?`     | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment (default: `top`)                   |
| `hAlign?`     | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `left`)                |
| `vAdjust?`    | See [Size Adjustment](#size-adjustment)           | Vertical size adjustment                              |
| `hAdjust?`    | See [Size Adjustment](#size-adjustment)           | Horizontal size adjustment                            |
| `vSize?`      | `number`                                          | Height of children                                    |
| `hSize?`      | `number`                                          | Width of children                                     |
| `spacing?`    | `number`                                          | Margin between elements                               |
| `vSpacing?`   | `number`                                          | Vertical spacing                                      |
| `hSpacing?`   | `number`                                          | Horizontal spacing                                    |

## Property Values

### Orientation

Specifies the direction in which to arrange children.

| Value          | Description          |
| -------------- | -------------------- |
| `'horizontal'` | Arrange horizontally |
| `'vertical'`   | Arrange vertically   |

### Vertical Alignment

Specifies the vertical alignment of children.
Usually based on the container’s dimensions, but some layouts use the child's own layout block as a base.

| Value             | Description                     |
| ----------------- | ------------------------------- |
| `'top'`           | Align to top                    |
| `'middle'`        | Center vertically               |
| `'bottom'`        | Align to bottom                 |
| `'space-between'` | Equal space between elements    |
| `'space-around'`  | Space added on both ends        |
| `'space-evenly'`  | Equal space around all elements |
| `'fit'`           | Stretch to fit parent           |

### Horizontal Alignment

Specifies the horizontal alignment of children.
Usually based on the container’s dimensions, but some layouts use the child's own layout block as a base.

| Value             | Description                     |
| ----------------- | ------------------------------- |
| `'left'`          | Align to left                   |
| `'center'`        | Center horizontally             |
| `'right'`         | Align to right                  |
| `'space-between'` | Equal space between elements    |
| `'space-around'`  | Space added on both ends        |
| `'space-evenly'`  | Equal space around all elements |
| `'fit'`           | Stretch to fit parent           |

### Size Adjustment

Specifies how to adjust child sizes when they underfill or overflow the container.
To always fit children to the container, use `'fit'` with [Vertical Alignment](#vertical-alignment) or [Horizontal Alignment](#horizontal-alignment) instead.

| Value      | Description                     |
| ---------- | ------------------------------- |
| `'none'`   | Do not adjust                   |
| `'expand'` | Expand to fill the parent       |
| `'narrow'` | Shrink to fit within the parent |

## License

MIT
