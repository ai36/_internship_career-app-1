import { useParamsStore } from '@store';
import { clsx } from '@utils';
import styles from './PaginationItem.module.css';
import { INDEX_OFFSET } from '@constants';

export const PaginationItem = ({ pageNumber }) => {
  const { page } = useParamsStore((state) => state.params);
  const { setPage } = useParamsStore();

  return pageNumber === null ? (
    <div className={clsx(styles.item, styles.placeholder)}>...</div>
  ) : (
    <button
      className={clsx(styles.item, page === pageNumber && styles.active)}
      onClick={() => {
        setPage(pageNumber);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      }}
    >
      {pageNumber + INDEX_OFFSET}
    </button>
  );
};
