import { ErrorMessage, VacancyCard, VacancySkeleton, Button } from '@components';
import { formatSalary } from '@utils';
import { useVacancyFullStore, useVacanciesSimilar } from '@store';
import styles from './VacancySimilar.module.css';
import { useEffect } from 'react';

export const VacancySimilar = () => {
  const {
    similarVacancies,
    loading,
    error,
    setSimilarVacancies,
    similarPage,
    setSimilarPage,
    similarPages,
  } = useVacanciesSimilar();
  const vacancyId = useVacancyFullStore((state) => state.vacancyId);

  const isShowButtonSeeMore = similarPage < similarPages;

  useEffect(() => {
    setSimilarVacancies(vacancyId);
  }, [similarPage]);

  const handleMoreVacancies = () => {
    setSimilarVacancies(vacancyId);
    setSimilarPage(similarPage + 1);
  };

  if (loading)
    return (
      <section className={styles.wrapper}>
        <ul className={styles.list}>
          {similarVacancies.map((vacancy) => (
            <li key={(similarPage + 1) * vacancy.id}>
              <VacancyCard
                id={vacancy.id}
                position={vacancy.name}
                salary={formatSalary(vacancy.salary) || 'Зарплата не указана'}
                companyName={vacancy.employer.name}
                cityName={vacancy.area.name}
                experience={vacancy.experience.name}
              />
            </li>
          ))}
        </ul>
        <VacancySkeleton />
        {isShowButtonSeeMore && (
          <section className={styles.addMore}>
            <Button onClick={handleMoreVacancies} title='Загрузка...' disabled />
          </section>
        )}
      </section>
    );

  if (error)
    return (
      <section className={styles.wrapper}>
        <ErrorMessage message={error} />
      </section>
    );

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {similarVacancies.map((vacancy) => (
          <li key={(similarPage + 1) * vacancy.id}>
            <VacancyCard
              id={vacancy.id}
              position={vacancy.name}
              salary={formatSalary(vacancy.salary) || 'Зарплата не указана'}
              companyName={vacancy.employer.name}
              cityName={vacancy.area.name}
              experience={vacancy.experience.name}
            />
          </li>
        ))}
      </ul>
      {isShowButtonSeeMore && (
        <section className={styles.addMore}>
          <Button onClick={() => setSimilarPage(similarPage + 1)} title='Показать еще' />
        </section>
      )}
    </section>
  );
};
