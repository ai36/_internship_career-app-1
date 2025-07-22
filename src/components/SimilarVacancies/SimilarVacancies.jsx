import styles from './SimilarVacancies.module.css';
import { Button, Container, VacancyBlock } from '@/components';

export const SimilarVacancies = ({
  isLoading,
  vacancies,
  className,
  onLoadMore,
  showButton = true,
}) => {
  return (
    <Container className={className}>
      <section className={styles.similarvacancies}>
        <div className={styles.blocks}>
          <VacancyBlock
            isLoading={false}
            vacancies={vacancies}
            title={'Похожие вакансии'}
          />
          <VacancyBlock
            isLoading={isLoading}
            showSkeletonTitle={false}
            skeletonCars
            skeletonCards={6}
          />
        </div>
        {showButton && (
          <Button filled onClick={onLoadMore}>
            Показать ещё
          </Button>
        )}
      </section>
    </Container>
  );
};
