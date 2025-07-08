import { VacancyFull, Button, VacancySimilar } from '@/components';
import styles from './pages.module.css';
import { useVacancyFullStore, useVacanciesSimilar, usePageStore } from '@/store';

export const CardOfVacancy = () => {
  const setVacancyId = useVacancyFullStore((state) => state.setVacancyId);
  const setCurrentPage = usePageStore((state) => state.setCurrentPage);

  const { clearSimilarVacancies } = useVacanciesSimilar();

  const handleGoBackToSearch = () => {
    setVacancyId(null);
    setCurrentPage(null);
    clearSimilarVacancies();
  };

  return (
    <main className={styles['main']}>
      <Button
        className={styles.backToSearchButton}
        icon='arrowToRight'
        title='K результатам поиска'
        customize='text'
        onClick={handleGoBackToSearch}
      />
      <VacancyFull />
      <h2 className={styles.similarTitle}>Похожие вакансии</h2>
      <VacancySimilar />
    </main>
  );
};
