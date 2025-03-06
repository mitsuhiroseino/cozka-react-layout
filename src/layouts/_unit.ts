export default function _unit(value: string | number | null | undefined) {
  if (typeof value === 'number') {
    return `${value}px`;
  } else {
    return value;
  }
}
