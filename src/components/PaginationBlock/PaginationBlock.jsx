import { useParamsStore, useVacanciesStore } from '@store';
import { PaginationItem } from '@components';
import styles from './PaginationBlock.module.css';
import { useEffect, useState } from 'react';
import { getPaginationRange } from '@utils';

export const PaginationBlock = () => {
  const [paginationRange, setPaginationRange] = useState([]);
  const { pages } = useVacanciesStore();
  const { page } = useParamsStore((state) => state.params);

  useEffect(() => {
    setPaginationRange(getPaginationRange(page, pages));
  }, [page, pages]);

  return (
    <div className={styles.pagination}>
      {paginationRange.map((item, index) => (
        <PaginationItem key={index} pageNumber={item} />
      ))}
    </div>
  );
};
