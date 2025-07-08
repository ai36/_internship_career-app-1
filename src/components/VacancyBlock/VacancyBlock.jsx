import { VacancyCard } from '@components';
import styles from './VacancyBlock.module.css';
import { clsx, dateFormatter, formatSalary } from '@utils';
import { useVacanciesStore } from '@store';

export const VacancyBlock = ({ dateText = '', vacancies = [12] }) => {
  const { loading, hiddenVacancies } = useVacanciesStore();

  return (
    <section className={styles.wrapper}>
      {dateText && (
        <h2 className={clsx(styles.date, loading && styles.preloader)}>
          {dateFormatter(dateText)}
        </h2>
      )}
      <ul className={styles.list}>
        {vacancies.map((vacancy) => {
          return (
            !hiddenVacancies.includes(vacancy.id) && (
              <li key={vacancy.id}>
                <VacancyCard
                  id={vacancy.id}
                  position={vacancy.name}
                  salary={formatSalary(vacancy.salary) || "Зарплата не указана"}
                  companyName={vacancy.employer.name}
                  cityName={vacancy.area.name}
                  experience={vacancy.experience.name}
                />
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
};
