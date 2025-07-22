import { DOTS } from '../constants';

export const getPaginationItems = (currentPage, totalPages) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const right = currentPage - 1;
  const left = totalPages - currentPage;

  if (totalPages <= 5) {
    return pages;
  } else {
    if (right <= 2) {
      return [...pages.slice(0, 4), DOTS, totalPages];
    } else {
      if (left <= 2) {
        return [1, DOTS, ...pages.slice(pages.length - 4)];
      } else {
        return [1, DOTS, ...pages.slice(currentPage - 2, currentPage + 1), DOTS, totalPages];
      }
    }
  }
};
