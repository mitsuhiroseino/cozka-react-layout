# @cozka/react-layout

`@cozka/react-layout` is a library that provides a Higher-Order Component (HOC) to add layout functionality to React components. It allows you to control how child elements are arranged and apply unified layouts.

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

#### Arguments

- `Component`: The React component to apply the layout to.
- `options`: Options of type `WithLayoutOptions` (optional).

#### `WithLayoutOptions`

| Property          | Type                                                             | Description                                                                                   |
| ----------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `styleProp?`      | `'style'` \| `'css'` \| `'sx'` \| `string`                       | The property to which layout styles are applied (default: `style`).                           |
| `styleApplyMode?` | `'merge'` \| `'append'`                                          | How to apply styles if `styleProp` already has existing styles (default: `merge`).            |
| `displayName?`    | `string`                                                         | The `displayName` of the created component (default: `withLayout(${Component.displayName})`). |
| `jsxRuntime?`     | `(type: ElementType, props: unknown, key?: Key) => ReactElement` | A function that returns jsx (default: `jsx`).                                                 |

#### Return Value

Returns a new component with layout functionality added.

## `LayoutProps`

Properties that can be passed to the returned component. Applicable properties vary depending on the value of `layout`.

### Common Properties

| Property      | Type                                                                           | Description                                                                             |
| ------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `layout`      | `'absolute'` \| `'brick'` \| `'center'` \| `'fill'` \| `'matrix'` \| `'stack'` | The type of layout. The available properties will vary depending on the selected value. |
| `scroll?`     | `boolean`                                                                      | Whether scrolling is enabled (default: `false`).                                        |
| `childStyle?` | `CSSProperties`                                                                | Styles applied to child elements.                                                       |
| `children`    | `ReactNode`                                                                    | Child elements.                                                                         |

### Properties for Each Layout

#### `absolute` (Position child elements absolutely)

| Property | Type         | Description               |
| -------- | ------------ | ------------------------- |
| `layout` | `'absolute'` |                           |
| `vSize?` | `number`     | Height of child elements. |
| `hSize?` | `number`     | Width of child elements.  |

#### `brick` (Arrange child elements in a grid to fit the parent element's size)

| Property      | Type                                              | Description                                                                 |
| ------------- | ------------------------------------------------- | --------------------------------------------------------------------------- |
| `layout`      | `'brick'`                                         |                                                                             |
| `orientation` | See [Alignment Direction](#alignment-direction)   | The direction in which child elements are arranged (default: `horizontal`). |
| `vAlign?`     | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment of child elements (default: `top`).                      |
| `hAlign?`     | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `left`).                                     |
| `vAdjust?`    | See [Size Adjustment](#size-adjustment)           | Vertical size adjustment.                                                   |
| `hAdjust?`    | See [Size Adjustment](#size-adjustment)           | Horizontal size adjustment.                                                 |
| `vSize?`      | `number`                                          | Height of child elements.                                                   |
| `hSize?`      | `number`                                          | Width of child elements.                                                    |
| `spacing?`    | `number`                                          | Margin between child elements.                                              |
| `vSpacing?`   | `number`                                          | Vertical margin between child elements.                                     |
| `hSpacing?`   | `number`                                          | Horizontal margin between child elements.                                   |

#### `center` (Center child elements)

| Property      | Type                                            | Description                                                                 |
| ------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| `layout`      | `'center'`                                      |                                                                             |
| `orientation` | See [Alignment Direction](#alignment-direction) | The direction in which child elements are arranged (default: `horizontal`). |
| `vAdjust?`    | See [Size Adjustment](#size-adjustment)         | Vertical size adjustment.                                                   |
| `hAdjust?`    | See [Size Adjustment](#size-adjustment)         | Horizontal size adjustment.                                                 |
| `vSize?`      | `number`                                        | Height of child elements.                                                   |
| `hSize?`      | `number`                                        | Width of child elements.                                                    |
| `spacing?`    | `number`                                        | Margin between elements.                                                    |
| `vSpacing?`   | `number`                                        | Vertical margin.                                                            |
| `hSpacing?`   | `number`                                        | Horizontal margin.                                                          |

#### `fill` (Fit child elements to the parent element's height and width)

| Property      | Type                                            | Description                                                                 |
| ------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| `layout`      | `'fill'`                                        |                                                                             |
| `orientation` | See [Alignment Direction](#alignment-direction) | The direction in which child elements are arranged (default: `horizontal`). |
| `spacing?`    | `number`                                        | Margin between elements.                                                    |
| `vSpacing?`   | `number`                                        | Vertical margin.                                                            |
| `hSpacing?`   | `number`                                        | Horizontal margin.                                                          |

#### `matrix` (Arrange child elements in a grid)

| Property     | Type                               | Description                                                              |
| ------------ | ---------------------------------- | ------------------------------------------------------------------------ |
| `layout`     | `'matrix'`                         |                                                                          |
| `vSize?`     | `number`                           | Height of child elements.                                                |
| `hSize?`     | `number`                           | Width of child elements.                                                 |
| `spacing?`   | `number`                           | Margin between child elements.                                           |
| `vSpacing?`  | `number`                           | Vertical margin between child elements.                                  |
| `hSpacing?`  | `number`                           | Horizontal margin between child elements.                                |
| `vCount?`    | `number`                           | Number of child elements vertically.                                     |
| `hCount?`    | `number`                           | Number of child elements horizontally.                                   |
| `vTemplate?` | `string` \| `(string \| number)[]` | CSS `grid-template-rows` format or an array specifying row heights.      |
| `hTemplate?` | `string` \| `(string \| number)[]` | CSS `grid-template-columns` format or an array specifying column widths. |

#### `stack` (Arrange child elements in a single row)

| Property      | Type                                              | Description                                                                 |
| ------------- | ------------------------------------------------- | --------------------------------------------------------------------------- |
| `layout`      | `'stack'`                                         |                                                                             |
| `orientation` | See [Alignment Direction](#alignment-direction)   | The direction in which child elements are arranged (default: `horizontal`). |
| `vAlign?`     | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment of child elements (default: `top`).                      |
| `hAlign?`     | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `left`).                                     |
| `vAdjust?`    | See [Size Adjustment](#size-adjustment)           | Vertical size adjustment.                                                   |
| `hAdjust?`    | See [Size Adjustment](#size-adjustment)           | Horizontal size adjustment.                                                 |
| `vSize?`      | `number`                                          | Height of child elements.                                                   |
| `hSize?`      | `number`                                          | Width of child elements.                                                    |
| `spacing?`    | `number`                                          | Margin between elements.                                                    |
| `vSpacing?`   | `number`                                          | Vertical margin.                                                            |
| `hSpacing?`   | `number`                                          | Horizontal margin.                                                          |

### Property Values

#### Alignment Direction

| Value          | Description                          |
| -------------- | ------------------------------------ |
| `'horizontal'` | Arrange child elements horizontally. |
| `'vertical'`   | Arrange child elements vertically.   |

#### Vertical Alignment

| Value             | Description                                 |
| ----------------- | ------------------------------------------- |
| `'top'`           | Align to top.                               |
| `'middle'`        | Align to center.                            |
| `'bottom'`        | Align to bottom.                            |
| `'space-between'` | Evenly distribute spacing between elements. |
| `'space-around'`  | Add space at both ends.                     |
| `'space-evenly'`  | Distribute all spaces evenly.               |
| `'fit'`           | Stretch to fit the parent.                  |

### Horizontal Alignment

| Value             | Description                               |
| ----------------- | ----------------------------------------- |
| `'left'`          | Align to the left.                        |
| `'center'`        | Align to the center.                      |
| `'right'`         | Align to the right.                       |
| `'space-between'` | Distribute space evenly between elements. |
| `'space-around'`  | Add space before and after elements.      |
| `'space-evenly'`  | Distribute space evenly including edges.  |
| `'fit'`           | Stretch to fit the parent.                |

### Size Adjustment

| Value      | Description                              |
| ---------- | ---------------------------------------- |
| `'none'`   | No adjustment                            |
| `'expand'` | Expands to fit within the parent element |
| `'narrow'` | Narrows to fit within the parent element |

## License

MIT
