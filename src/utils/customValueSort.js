/**
 * getValue - callback function to get value from an object (enables custom calculations)
 * returns - sorted array based on the values returned from the callback function [getValue] and the sort direction
 */
export default (getValue, sortDirection = 'asc') => {
  const sort = (valueA, valueB) => {
    if (sortDirection === 'asc') {
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    }
    return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
  };
  return (a, b) => {
    const valueA = getValue?.(a) || a;
    const valueB = getValue?.(b) || b;
    return sort(valueA, valueB);
  };
};
