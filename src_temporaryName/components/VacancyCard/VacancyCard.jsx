import { clsx } from '@utils';
import { Icon } from '@components';
import { ICON_NAMES } from '@constants';
import styles from './VacancyCard.module.css';
import { useVacanciesStore, useVacancyFullStore } from '@store';

export const VacancyCard = ({ id = null, position, salary, companyName, cityName, experience }) => {
  const { loading, removeVacancyById } = useVacanciesStore();
  const setVacancyId = useVacancyFullStore((state) => state.setVacancyId);

  const handleShowVacancyFull = () => {
    setVacancyId(id);
  };

  const handleRemoveVacancyById = (event) => {
    event.stopPropagation()
    removeVacancyById(id);
  }

  return (
    <article className={styles['wrapper']} onClick={handleShowVacancyFull}>
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
        <button type='button' className={styles['btn']} onClick={(event) => handleRemoveVacancyById(event)}>
          <Icon name={ICON_NAMES.hide} className={styles['hide-img']} />
        </button>
      </div>
    </article>
  );
};