import { FilterList, PaginationBlock, VacancyList } from '@/components';
import styles from './pages.module.css';
import { useVacanciesStore } from '@/store';

export const VacancySearch = () => {
  const pages = useVacanciesStore((state) => state.pages);

  return (
    <main className={styles['main']}>
      <FilterList />
      <div className={styles['container']}>
        <button type='button' className={styles['btn']}>
          Сбросить все фильтры
        </button>
      </div>
      <VacancyList />
      {pages > 1 && <PaginationBlock />}
    </main>
  );
};
