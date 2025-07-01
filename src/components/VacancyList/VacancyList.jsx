import { ErrorMessage, VacancyBlock, VacancySkeleton } from '@components';
import styles from './VacancyList.module.css';
import { useVacanciesStore } from '@store';
import { useEffect } from 'react';
import { useParamsStore } from '@/store/ParamsStore';

export const VacancyList = () => {
  const { vacancies, loading, error, setVacancies } = useVacanciesStore();
  const { page } = useParamsStore((state) => state.params);

  const dates = Object.keys(vacancies);

  useEffect(() => {
    setVacancies();
  }, [page]);

  return (
    <>
      {loading && <VacancySkeleton />}
      {error && <ErrorMessage message={error} />}
      <ul className={styles.list}>
        {dates.map((date) => (
          <li key={date} className={styles.element}>
            <VacancyBlock dateText={date} vacancies={vacancies[date]} />
          </li>
        ))}
      </ul>
    </>
  );
};
