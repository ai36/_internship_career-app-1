import { useEffect } from 'react';
import { Button, Icon } from '@components';
import { formatSalary } from '@/utils';
import styles from './VacancyFull.module.css';
import { useVacanciesStore, useVacancyFullStore } from '@/store';

export const VacancyFull = ({ onClick }) => {
  const { vacancies, removeVacancyById } = useVacanciesStore();
  const { vacancyFull, vacancyId, fetchVacancyById, loading, error } = useVacancyFullStore();

  useEffect(() => {
    if (vacancyId) {
      fetchVacancyById(vacancyId);
    }
  }, [vacancyId]);

  const handleRemoveVacancyById = (event) => {
    removeVacancyById(vacancyId);
    onClick();
  }

  if (loading) return <section className={styles.wrapper}><section className={styles.vacancyFull}>Загрузка...</section></section>;
  if (error) return <section className={styles.wrapper}><section className={styles.vacancyFull}>Ошибка: {error}</section></section>;
  if (!vacancyFull) return <section className={styles.wrapper}><section className={styles.vacancyFull}>Нет данных</section></section>;

  return (
    <section className={styles.wrapper}>
      <section className={styles.vacancyFull}>
        <header className={styles.header}>
          <section className={styles.titleBox}>
            <h2 className={styles.title}>{vacancyFull.name}</h2>
            <span className={styles.salary}>{formatSalary(vacancyFull.salary)}</span>
          </section>

          <section className={styles.requirements}>
            <h4 className={styles.title}>Требования к вакансии</h4>
            <ul className={styles.list}>
              {[
                { experience: vacancyFull.experience?.name },
                { briefcase: vacancyFull.employment?.name },
                { time: vacancyFull.schedule?.name },
              ]
                .filter((item) => Object.values(item)[0])
                .map((item) => (
                  <li className={styles.item} key={Object.keys(item)[0]}>
                    <Icon className={styles.icon} name={Object.keys(item)[0]} />
                    <span className={styles.desc}>{Object.values(item)[0]}</span>
                  </li>
                ))}
            </ul>
          </section>
        </header>

        <Button icon='hide' title='Скрыть' customize='outlined' onClick={(event) => handleRemoveVacancyById(event)} />

        <section className={styles.description}>
          <h3 className={styles.title}>Описание</h3>
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: vacancyFull.description }}
          />
        </section>

        <section className={styles.skills}>
          <h3 className={styles.title}>Описание</h3>
          <ul className={styles.list}>
            {vacancyFull.key_skills?.map((skill) => (
              <li className={styles.item} key={skill.name}>
                <span className={styles.desc}>{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className={styles.publicationDate}>
          Вакансия опубликована {new Date(vacancyFull.published_at).toLocaleDateString()} в г.{' '}
          {vacancyFull.area.name}
        </footer>
      </section>

      <aside className={styles.cardCompany}>
        {vacancyFull.employer.logo_urls &&
          <img className={styles.logo} src={vacancyFull.employer.logo_urls["240"]} width="132" height="60" alt={`Логотип ${vacancyFull.employer.name}`} />
        }
        <div className={styles.textBox}>
        <h2 className={styles.title}>{vacancyFull.employer.name}</h2>
        <span className={styles.desc}>г. Красноярск, улица Маерчака, д. 38</span>
        </div>
      </aside>
    </section>
  );
};
