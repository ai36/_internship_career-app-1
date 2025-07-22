import { IconSvg, Link, Skeleton } from '@/components';
import { formatSalary } from '@/utils';

import styles from './VacancyCard.module.css';
import { vacancyService } from '@/services';

const SkeletonCard = () => {
  return (
    <li>
      <article className={styles.card}>
        <Skeleton className={styles.title} width={225} height={24} />
        <Skeleton className={styles.salary} width={131} height={24} />
        <Skeleton className={styles.company} width={96} height={16} />
        <Skeleton className={styles.city} width={55} height={16} />
        <div className={styles.experience}>
          <Skeleton className={styles.iconExperience} width={16} height={16} />
          <Skeleton width={148} height={16} />
        </div>
      </article>
    </li>
  );
};

export function VacancyCard({ vacancy }) {
  if (!vacancy) return <SkeletonCard />;
  const { name, employer, area, salary, experience } = vacancy;

  const formattedSalary = formatSalary(salary);
  const handleClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    vacancyService.hideVacancy(vacancy.id);
  };

  return (
    <li>
      <Link className={styles.cardLink} to={`vacancy/${vacancy.id}`}>
        <article className={styles.card}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.salary}>{formattedSalary}</div>
          <p className={styles.company}>{employer.name}</p>
          <p className={styles.city}>{area.name}</p>
          <div className={styles.experience}>
            <IconSvg id="experience-svg" className={styles.iconExperience} />
            <p>{experience.name}</p>
          </div>
          <button
            className={styles.button}
            type={'button'}
            onClick={handleClick}
          >
            <IconSvg id="eye-slash-solid-svg" className={styles.buttonIcon} />
          </button>
        </article>
      </Link>
    </li>
  );
}
