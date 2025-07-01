const maxPaginationItems = 5;
const maxPaginationSiblings = 3;
const firstIndex = 0;
const sibling = 1;
const placeholder = null;

export const getPaginationRange = (currentPage, maxPage) => {
  const range = [];
  range.push(firstIndex);

  if (maxPage <= maxPaginationItems) {
    for (let i = 1; i < maxPage - 1; i++) {
      range.push(i);
    }

    return range;
  } else {
    switch (true) {
      case currentPage < maxPaginationSiblings:
        range.push(1, 2, 3, placeholder);
        break;
      case maxPage - currentPage < maxPaginationSiblings:
        range.push(placeholder, maxPage - 3, maxPage - 2, maxPage - 1);
        break;
      case currentPage + 3 >= maxPaginationSiblings:
      case maxPage - currentPage >= 3:
        range.push(
          placeholder,
          currentPage - sibling,
          currentPage,
          currentPage + sibling,
          placeholder,
        );
        break;
    }
  }
  range.push(maxPage);
  return range;
};
