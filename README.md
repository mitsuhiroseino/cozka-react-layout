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

| Property     | Type                                                                                   | Description                                                          |
| ------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `layout`     | `'absolute'` \|`'center'` \|`'fill'` \|`'liquid'` \|`'matrix'` \|`'solid'` \|`'stack'` | Type of layout. Available properties change depending on this value. |
| `scroll?`    | `boolean`                                                                              | Enables scrolling (default: `false`).                                |
| `childStyle` | `CSSProperties`                                                                        | Styles applied to child elements.                                    |
| `children`   | `ReactNode`                                                                            | Child elements.                                                      |

### Properties for Each Layout

#### `absolute` (Position child elements absolutely)

| Property       | Type         | Description               |
| -------------- | ------------ | ------------------------- |
| `layout`       | `'absolute'` |                           |
| `childHeight?` | `number`     | Height of child elements. |
| `childWidth?`  | `number`     | Width of child elements.  |

#### `center` (Center child elements)

| Property       | Type                                            | Description                                                  |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `layout`       | `'center'`                                      |                                                              |
| `orientation`  | See [Alignment Direction](#alignment-direction) | Direction to arrange child elements (default: `horizontal`). |
| `vAdjust?`     | See [Size Adjustment](#size-adjustment)         | Vertical size adjustment.                                    |
| `hAdjust?`     | See [Size Adjustment](#size-adjustment)         | Horizontal size adjustment.                                  |
| `childHeight?` | `number`                                        | Height of child elements.                                    |
| `childWidth?`  | `number`                                        | Width of child elements.                                     |
| `spacing?`     | `number`                                        | Spacing between elements.                                    |
| `vSpacing?`    | `number`                                        | Vertical spacing.                                            |
| `hSpacing?`    | `number`                                        | Horizontal spacing.                                          |

#### `fill` (Fill child elements to match parent height and width)

| Property      | Type                                            | Description                                                  |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `layout`      | `'fill'`                                        |                                                              |
| `orientation` | See [Alignment Direction](#alignment-direction) | Direction to arrange child elements (default: `horizontal`). |
| `spacing?`    | `number`                                        | Spacing between elements.                                    |
| `vSpacing?`   | `number`                                        | Vertical spacing.                                            |
| `hSpacing?`   | `number`                                        | Horizontal spacing.                                          |

#### `liquid` (Adjust child element width to fill parent width)

| Property         | Type                                              | Description                                                  |
| ---------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| `layout`         | `'liquid'`                                        |                                                              |
| `orientation`    | See [Alignment Direction](#alignment-direction)   | Direction to arrange child elements (default: `horizontal`). |
| `vAlign?`        | See [Vertical Alignment](#vertical-alignment)     | Vertical alignment of child elements (default: `top`).       |
| `hAlign?`        | See [Horizontal Alignment](#horizontal-alignment) | Horizontal alignment (default: `left`).                      |
| `vAdjust?`       | See [Size Adjustment](#size-adjustment)           | Vertical size adjustment.                                    |
| `hAdjust?`       | See [Size Adjustment](#size-adjustment)           | Horizontal size adjustment.                                  |
| `childHeight?`   | `number`                                          | Height of child elements.                                    |
| `childMinWidth?` | `number`                                          | Minimum width of child elements.                             |
| `spacing?`       | `number`                                          | Spacing between child elements.                              |
| `vSpacing?`      | `number`                                          | Vertical spacing.                                            |
| `hSpacing?`      | `number`                                          | Horizontal spacing.                                          |

## Property Values

### Alignment Direction

| Value          | Description                          |
| -------------- | ------------------------------------ |
| `'horizontal'` | Arrange child elements horizontally. |
| `'vertical'`   | Arrange child elements vertically.   |

### Vertical Alignment

| Value             | Description                               |
| ----------------- | ----------------------------------------- |
| `'top'`           | Align to the top.                         |
| `'middle'`        | Align to the center.                      |
| `'bottom'`        | Align to the bottom.                      |
| `'space-between'` | Distribute space evenly between elements. |
| `'space-around'`  | Add space before and after elements.      |
| `'space-evenly'`  | Distribute space evenly including edges.  |

### Horizontal Alignment

| Value             | Description                               |
| ----------------- | ----------------------------------------- |
| `'left'`          | Align to the left.                        |
| `'center'`        | Align to the center.                      |
| `'right'`         | Align to the right.                       |
| `'space-between'` | Distribute space evenly between elements. |
| `'space-around'`  | Add space before and after elements.      |
| `'space-evenly'`  | Distribute space evenly including edges.  |

### Size Adjustment

| Value      | Description                              |
| ---------- | ---------------------------------------- |
| `'none'`   | No adjustment                            |
| `'fit'`    | Scales to fit the parent element         |
| `'expand'` | Expands to fit within the parent element |
| `'narrow'` | Narrows to fit within the parent element |

## License

MIT
