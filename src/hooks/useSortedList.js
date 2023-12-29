import { useState, useEffect } from 'react';

const useSortedList = (items, defaultSortKey, sortFn) => {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortKey, setSortKey] = useState(defaultSortKey);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    setSortedItems(sortFn(items, sortKey, sortDirection));
  }, [items, sortKey, sortDirection]);

  const changeSortKey = (sortKey) => setSortKey(sortKey);
  const changeSortDirection = (sortDirection) =>
    setSortDirection(sortDirection);

  return {
    sortedItems,
    sortKey,
    sortDirection,
    changeSortKey,
    changeSortDirection,
  };
};

export default useSortedList;
