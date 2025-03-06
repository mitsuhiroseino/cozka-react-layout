# @gusok/react-layout

`@gusok/react-layout` is a library that provides a Higher-Order Component (HOC) to add layout functionality to React components. It controls the positioning of child elements and applies a unified layout.

**[日本語の README はこちら](./README.ja.md)**

## Installation

```sh
npm install @gusok/react-layout
```

## Usage

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

#### Arguments

- `Component`: The React component to apply the layout to.
- `options`: Optional settings of type `WithLayoutOptions`.

#### `WithLayoutOptions`

| Property         | Type                                       | Description                                                                                   |
| ---------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `styleProp`      | `'style'` \| `'css'` \| `'sx'` \| `string` | The property to apply layout styles to (default: `style`).                                    |
| `styleApplyMode` | `'merge'` \| `'append'`                    | How to apply styles when `styleProp` already has existing styles (default: `merge`).          |
| `displayName?`   | `string`                                   | displayName of the component being created (default: `withLayout(${Component.displayName})`). |

#### Return Value

Returns a new component with added layout functionality.

## `LayoutProps`

These properties can be passed to the returned component. Available properties vary depending on the `layout` value.

### Common Properties

| Property   | Type                                                                                                      | Description                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `layout`   | `'absolute'` \|`'center'` \|`'fit'` \|`'horizontal'` \|`'liquid'` \|`'matrix'` \|`'solid'` \|`'vertical'` | Layout type. The available properties change depending on the value. |
| `scroll?`  | `boolean`                                                                                                 | Whether scrolling is enabled (default: `false`).                     |
| `children` | `ReactNode`                                                                                               | Child elements.                                                      |

### Properties for Each Layout

#### `absolute` (Positions child elements absolutely)

| Property       | Type         | Description               |
| -------------- | ------------ | ------------------------- |
| `layout`       | `'absolute'` |                           |
| `childHeight?` | `number`     | Height of child elements. |
| `childWidth?`  | `number`     | Width of child elements.  |

#### `center` (Centers child elements)

| Property       | Type       | Description               |
| -------------- | ---------- | ------------------------- |
| `layout`       | `'center'` |                           |
| `childHeight?` | `number`   | Height of child elements. |
| `childWidth?`  | `number`   | Width of child elements.  |

#### `fit` (Fits child elements to the parent)

| Property      | Type                           | Description                                                             |
| ------------- | ------------------------------ | ----------------------------------------------------------------------- |
| `layout`      | `'fit'`                        |                                                                         |
| `orientation` | `'horizontal'` \| `'vertical'` | Direction in which child elements are arranged (default: `horizontal`). |

#### `horizontal` (Aligns child elements horizontally)

| Property        | Type                                          | Description                                                   |
| --------------- | --------------------------------------------- | ------------------------------------------------------------- |
| `layout`        | `'horizontal'`                                |                                                               |
| `childHeight?`  | `number`                                      | Height of child elements.                                     |
| `childWidth?`   | `number`                                      | Width of child elements.                                      |
| `spacing?`      | `number`                                      | Spacing between elements.                                     |
| `hSpacing?`     | `number`                                      | Horizontal spacing.                                           |
| `vSpacing?`     | `number`                                      | Vertical spacing.                                             |
| `hAlign?`       | [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `left`).                       |
| `vAlign?`       | [Vertical Alignment](#vertical-alignment)     | Vertical alignment (default: `top`).                          |
| `wrapChildren?` | `boolean`                                     | Whether to allow wrapping (default: `false`).                 |
| `evenSize?`     | `boolean`                                     | Whether to make child element sizes equal (default: `false`). |

#### `liquid` (Adjusts child element widths to fill the parent width)

| Property         | Type                                      | Description                          |
| ---------------- | ----------------------------------------- | ------------------------------------ |
| `layout`         | `'liquid'`                                |                                      |
| `childHeight?`   | `number`                                  | Height of child elements.            |
| `childMinWidth?` | `number`                                  | Minimum width of child elements.     |
| `spacing?`       | `number`                                  | Spacing between child elements.      |
| `hSpacing?`      | `number`                                  | Horizontal spacing.                  |
| `vSpacing?`      | `number`                                  | Vertical spacing.                    |
| `vAlign?`        | [Vertical Alignment](#vertical-alignment) | Vertical alignment (default: `top`). |

### `matrix` (Arrange child elements in a grid)

| Property       | Type                               | Description                                                             |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------- |
| `layout`       | `'matrix'`                         |                                                                         |
| `childHeight?` | `number`                           | Height of child elements                                                |
| `childWidth?`  | `number`                           | Width of child elements                                                 |
| `spacing?`     | `number`                           | Spacing between child elements                                          |
| `hSpacing?`    | `number`                           | Horizontal spacing between child elements                               |
| `vSpacing?`    | `number`                           | Vertical spacing between child elements                                 |
| `hCount?`      | `number`                           | Number of child elements in the horizontal direction                    |
| `vCount?`      | `number`                           | Number of child elements in the vertical direction                      |
| `hTemplate?`   | `string` \| `(string \| number)[]` | CSS `grid-template-columns` format or an array specifying column widths |
| `vTemplate?`   | `string` \| `(string \| number)[]` | CSS `grid-template-rows` format or an array specifying row heights      |

### `solid` (Adjust the number of child elements to fit within the parent's width)

| Property         | Type                                                                           | Description                                              |
| ---------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------- |
| `layout`         | `'solid'`                                                                      |                                                          |
| `childHeight?`   | `number`                                                                       | Height of child elements                                 |
| `childMinWidth?` | `number`                                                                       | Minimum width of child elements                          |
| `spacing?`       | `number`                                                                       | Spacing between child elements                           |
| `hSpacing?`      | `number`                                                                       | Horizontal spacing between child elements                |
| `vSpacing?`      | `number`                                                                       | Vertical spacing between child elements                  |
| `hAlign`         | [Horizontal Alignment](#horizontal-alignment) (excluding `'fit'`, `'stretch'`) | Horizontal alignment of child elements (default: `left`) |
| `vAlign?`        | [Vertical Alignment](#vertical-alignment)                                      | Vertical alignment of child elements (default: `top`)    |

### `vertical` (Arrange child elements vertically)

| Property        | Type                                          | Description                                           |
| --------------- | --------------------------------------------- | ----------------------------------------------------- |
| `layout`        | `'vertical'`                                  |                                                       |
| `childHeight?`  | `number`                                      | Height of child elements                              |
| `childWidth?`   | `number`                                      | Width of child elements                               |
| `spacing?`      | `number`                                      | Spacing between elements                              |
| `hSpacing?`     | `number`                                      | Horizontal spacing                                    |
| `vSpacing?`     | `number`                                      | Vertical spacing                                      |
| `hAlign?`       | [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `left`)                |
| `vAlign?`       | [Vertical Alignment](#vertical-alignment)     | Vertical alignment (default: `top`)                   |
| `wrapChildren?` | `boolean`                                     | Allow wrapping (default: `false`)                     |
| `evenSize?`     | `boolean`                                     | Make child elements equal in width (default: `false`) |

### Alignment Values

#### Vertical Alignment

| Value             | Description                  |
| ----------------- | ---------------------------- |
| `'top'`           | Align to top                 |
| `'middle'`        | Align to center              |
| `'bottom'`        | Align to bottom              |
| `'fit'`           | Stretch to fit parent        |
| `'stretch'`       | Expand to fill parent        |
| `'space-between'` | Distribute spacing evenly    |
| `'space-around'`  | Add spacing around edges     |
| `'space-evenly'`  | Distribute all spaces evenly |

#### Horizontal Alignment

| Value             | Description                  |
| ----------------- | ---------------------------- |
| `'left'`          | Align to left                |
| `'center'`        | Align to center              |
| `'right'`         | Align to right               |
| `'fit'`           | Stretch to fit parent        |
| `'stretch'`       | Expand to fill parent        |
| `'space-between'` | Distribute spacing evenly    |
| `'space-around'`  | Add spacing around edges     |
| `'space-evenly'`  | Distribute all spaces evenly |

## License

MIT
