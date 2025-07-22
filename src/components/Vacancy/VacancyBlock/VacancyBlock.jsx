import { Skeleton, VacancyCard } from '@/components';
import { DEFAULT_COLUMN, DEFAULT_ROW } from '@/constants';

import styles from './VacancyBlock.module.css';

export function VacancyBlock({
  isLoading,
  title,
  vacancies,
  showSkeletonTitle = true,
  skeletonCards = 0,
}) {
  return isLoading ? (
    <>
      {showSkeletonTitle && (
        <Skeleton className={styles.title} width={256} height={32} />
      )}
      <ul className={styles.vacancyBlockList}>
        {[...Array(skeletonCards || DEFAULT_ROW * DEFAULT_COLUMN)].map(
          (_, i) => (
            <VacancyCard key={i} />
          ),
        )}
      </ul>
    </>
  ) : (
    <>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.vacancyBlockList}>
        {vacancies?.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </ul>
    </>
  );
}
