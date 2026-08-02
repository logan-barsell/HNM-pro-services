const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];

/**
 * Centers an incomplete final grid row by offsetting its first item
 * (e.g. 5 items at md:4 → 3 + 2, with the pair centered).
 *
 * @param {number} index
 * @param {number} count
 * @param {number | Record<string, number>} itemSize
 * @returns {Record<string, number>}
 */
export function getLastRowOffset(index, count, itemSize) {
  const sizes =
    typeof itemSize === "number" ? { xs: itemSize } : { ...itemSize };
  const offset = {};
  let currentSize = 12;

  for (const breakpoint of BREAKPOINTS) {
    if (sizes[breakpoint] != null) {
      currentSize = sizes[breakpoint];
    }

    const columns = 12 / currentSize;
    if (!Number.isInteger(columns) || columns <= 1) {
      offset[breakpoint] = 0;
      continue;
    }

    const remainder = count % columns;
    if (remainder === 0) {
      offset[breakpoint] = 0;
      continue;
    }

    const firstOfLastRow = count - remainder;
    offset[breakpoint] =
      index === firstOfLastRow
        ? ((columns - remainder) * currentSize) / 2
        : 0;
  }

  return offset;
}
