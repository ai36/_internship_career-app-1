import { FilterList, PaginationBlock, VacancyList, VacancyFull, Button, VacancySimilar } from '@components';
import styles from './Main.module.css';
import { useVacanciesStore, useVacancyFullStore } from '@store';

export const Main = () => {
  const pages = useVacanciesStore((state) => state.pages);

  const vacancyId = useVacancyFullStore((state) => state.vacancyId);
  const setVacancyId = useVacancyFullStore((state) => state.setVacancyId);

  const handleGoBackToSearch = () => {
    setVacancyId(null);
  };

  return (
    <main className={styles['main']}>
      {vacancyId ? (
        <>
          <Button
            className={styles.backToSearchButton}
            icon='arrowToRight'
            title='к результатам поиска'
            customize='text'
            onClick={handleGoBackToSearch}
          />
          <VacancyFull onClick={handleGoBackToSearch} />
          <h2 className={styles.similarTitle}>Похожие вакансии</h2>
          <VacancySimilar />
        </>
      ) : (
        <>
          <FilterList />
          <div className={styles['container']}>
            <button type='button' className={styles['btn']}>
              Сбросить все фильтры
            </button>
          </div>
          <VacancyList />
          {pages > 1 && <PaginationBlock />}
        </>
      )}
    </main>
  );
};
