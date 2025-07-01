import { ErrorMessage, VacancyCard, VacancySkeleton, Button } from '@components';
import { formatSalary } from '@utils';
import { useVacanciesStore } from '@store';
import { useEffect, useState, useRef } from 'react';
import { useParamsStore } from '@/store/ParamsStore';
import { useVacancyFullStore } from '@store';
import styles from './VacancySimilar.module.css';

export const VacancySimilar = () => {
  const [vacanciesPerPage, setVacanciesPerPage] = useState(6);

  const { vacancies, loading, error, setVacancies } = useVacanciesStore();
  const { page } = useParamsStore((state) => state.params);
  const vacancyId = useVacancyFullStore((state) => state.vacancyId);

  const dates = Object.keys(vacancies);
  const mergedVacancies = dates.flatMap((date) => vacancies[date]);

  useEffect(() => {
    setVacanciesPerPage(6);
  }, [vacancyId]);

  useEffect(() => {
    setVacancies(vacanciesPerPage);
  }, [page, vacanciesPerPage]);

  const handleMoreVacancies = () => {
    setVacanciesPerPage((prev) => prev + 6);
  };

  const buttonRef = useRef(null);
  useEffect(() => {
    if (!loading) {
      buttonRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mergedVacancies.length]);

  return (
    <section className={styles.wrapper}>
      {loading && <VacancySkeleton />}
      {error && <ErrorMessage message={error} />}
      <ul className={styles.list}>
        {mergedVacancies.map((vacancy) => (
          <li key={vacancy.id}>
            <VacancyCard
              id={vacancy.id}
              position={vacancy.name}
              salary={formatSalary(vacancy.salary)}
              companyName={vacancy.employer.name}
              cityName={vacancy.area.name}
              experience={vacancy.experience.name}
            />
          </li>
        ))}
      </ul>
      <section className={styles.addMore} ref={buttonRef}>
        <Button onClick={handleMoreVacancies} title='Показать еще' />
      </section>
    </section>
  );
};
