import { PaginationButton } from './PaginationButton.jsx';
import { getPaginationItems } from './utils';
import { DOTS } from './constants';

import styles from './Pagination.module.css';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  show,
}) => {
  const paginationItems = getPaginationItems(currentPage, totalPages);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.paginationBlock}>
      <div className={styles.pages}>
        {paginationItems.map((page, index) =>
          page === DOTS ? (
            <div className={`${styles.dots}`} key={`dots-${index}`}>
              ...
            </div>
          ) : (
            <PaginationButton
              page={page}
              key={page}
              isCurrentPage={currentPage === page}
              setPage={() => setCurrentPage(page)}
            />
          ),
        )}
      </div>
    </div>
  );
};
