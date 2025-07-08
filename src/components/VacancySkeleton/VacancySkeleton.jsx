import styles from './VacancySkeleton.module.css';
import { VACANCIES_PER_PAGE } from '@constants';

export const VacancySkeleton = ({ vacanciesPerPage }) => {
  return (
    <section className={styles.blockWrapper}>
      <h2 className={styles.date}></h2>
      <ul className={styles.list}>
        {[...Array(vacanciesPerPage || VACANCIES_PER_PAGE)].map((element, index) => (
          <li key={index}>
            <article className={styles.wrapper}>
              <div>
                <h2 className={styles.title}></h2>
                <div className={styles.subtitle}></div>
              </div>
              <div className={styles.aboutCompany}>
                <p className={styles.name}></p>
                <p className={styles.city}></p>
              </div>
              <div className={styles.experience}>
                <div className={styles.experienceImg}></div>
                <p className={styles.experienceText}></p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
