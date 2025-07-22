import styles from './Pagination.module.css';

export const PaginationButton = ({ page, isCurrentPage, setPage }) => {
  return (
    <button
      className={`${styles.pageButton} ${isCurrentPage && styles.selected}`}
      onClick={() => setPage(page)}
      disabled={isCurrentPage}
    >
      {page}
    </button>
  );
};
