import { clsx } from '@/utils';
import { Icon } from '@/components';
import { ICON_NAMES } from '@/constants';
import styles from './VacancyCard.module.css';
import { useVacanciesStore, useVacancyFullStore, useVacanciesSimilar, usePageStore } from '@/store';

export const VacancyCard = ({ id = null, position, salary, companyName, cityName, experience }) => {
  const { clearSimilarVacancies, setSimilarVacancies } = useVacanciesSimilar();
  const { loading, setHiddenVacancies } = useVacanciesStore();
  const { setVacancyId } = useVacancyFullStore();
  const setCurrentPage = usePageStore((state) => state.setCurrentPage);

  const handleShowVacancyFull = () => {
    clearSimilarVacancies();
    setVacancyId(id);
    setSimilarVacancies(id);
    setCurrentPage(id);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  const handleRemoveVacancyById = (event) => {
    event.stopPropagation();
    setHiddenVacancies(id);
  };

  return (
    <button className={styles['wrapper']} onClick={handleShowVacancyFull}>
      <div className={styles['title-wrapper']}>
        <h2 className={clsx(styles['title'], loading && styles.preloader)} title={position}>
          {position}
        </h2>
        <p className={clsx(styles['title'], styles['subtitle'], loading && styles.preloader)}>
          {salary}
        </p>
      </div>
      <div className={styles['about-company']}>
        <p className={clsx(styles['text'], loading && styles.preloader)}>{companyName}</p>
        <p className={clsx(styles['text'], loading && styles.preloader)}>{cityName}</p>
      </div>
      <div className={styles['experience']}>
        <Icon
          name={ICON_NAMES.experience}
          className={clsx(styles['experience-img'], loading && styles.preloader)}
          width={'12'}
          height={'12'}
        />
        <span className={clsx(styles['text'], loading && styles.preloader)}>{experience}</span>
        <div
          className={styles['btn']}
          role='button'
          aria-label='Скрыть вакансию'
          tabIndex='0'
          onClick={(event) => handleRemoveVacancyById(event)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleRemoveVacancyById(event);
            }
          }}
        >
          <Icon name={ICON_NAMES.hide} className={styles['hide-img']} />
        </div>
      </div>
    </button>
  );
};
