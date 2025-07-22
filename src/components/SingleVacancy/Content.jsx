import { clsx, formatDate, formatSalary } from '@/utils';
import { Button, IconSvg, Skeleton } from '@/components';

export const Content = ({
  vacancy,
  styles,
  isLoading = true,
  onHide,
  isHidden,
}) => {
  const description = vacancy?.description;
  const hasKeySkills = vacancy?.key_skills?.length > 0;
  const addButton = () => {
    const text = isHidden ? 'Показать' : 'Скрыть';
    const icon = isHidden ? 'eye-solid-svg' : 'eye-slash-solid-svg';
    return (
      <Button icon={icon} onClick={onHide}>
        {text}
      </Button>
    );
  };

  if (isLoading) {
    return (
      <article className={clsx(styles.item, styles.description)}>
        <header className={styles.header}>
          <Skeleton className={styles.title} width={'80%'} height={32} />
          <Skeleton
            className={clsx(styles.subtitle, styles.subtitleMedium)}
            width={'50%'}
            height={28}
          />
          <Skeleton className={styles.partTitle} width={250} height={24} />
          <ul className={styles.list}>
            <Skeleton width={100} height={19} />
            <Skeleton width={100} height={19} />
            <Skeleton width={100} height={19} />
          </ul>
        </header>
        <ul className={styles.list}>
          <Skeleton width={155} height={52} />
        </ul>
        <div className={styles.column}>
          <Skeleton className={styles.subtitle} height={28} width={300} />
          <div className={styles.paragraph}>
            <Skeleton className={styles.subtitle} height={24} width={'100%'} />
            <Skeleton className={styles.subtitle} height={24} width={'100%'} />
            <Skeleton className={styles.subtitle} height={24} width={'100%'} />
          </div>
          <Skeleton className={styles.subtitle} height={28} width={300} />
          <div className={styles.paragraph}>
            <Skeleton className={styles.subtitle} height={24} width={'100%'} />
            <Skeleton className={styles.subtitle} height={24} width={'100%'} />
            <Skeleton className={styles.subtitle} height={24} width={'100%'} />
          </div>
          <Skeleton className={styles.subtitle} height={28} width={300} />
          <ul className={styles.list}>
            <Skeleton width={100} height={19} />
            <Skeleton width={100} height={19} />
            <Skeleton width={100} height={19} />
          </ul>
        </div>
      </article>
    );
  }

  console.log(vacancy?.salary_range);

  return (
    <article className={clsx(styles.item, styles.description)}>
      <header>
        <h1 className={styles.title}>{vacancy.name}</h1>
        <p className={clsx(styles.subtitle, styles.subtitleMedium)}>
          {`${formatSalary(vacancy?.salary_range)} ${vacancy?.salary ? (vacancy?.salary_range?.gross ? 'до вычета налогов' : 'на руки') : ''}`}
        </p>
        <h3 className={styles.partTitle}>Требования к вакансии</h3>
        <ul className={styles.list}>
          <li className={clsx(styles.textMedium, styles.requirements)}>
            <IconSvg id={'experience-svg'} className={styles.icon} />
            {vacancy?.experience?.name}
          </li>
          <li className={clsx(styles.textMedium, styles.requirements)}>
            <IconSvg id={'briefcase-svg'} className={styles.icon} />
            {vacancy?.employment?.name}
          </li>
          <li className={clsx(styles.textMedium, styles.requirements)}>
            <IconSvg id={'time-svg'} className={styles.icon} />
            {vacancy?.schedule?.name}
          </li>
        </ul>
      </header>
      <ul className={styles.list}>
        <li>{addButton()}</li>
      </ul>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Описание</h2>
        {description ? (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        ) : null}
      </div>
      {hasKeySkills ? (
        <div>
          <h2 className={styles.subtitle}>Ключевые навыки</h2>
          <ul className={clsx(styles.list, styles.chipset)}>
            {vacancy.key_skills.map((item) => (
              <li
                className={clsx(styles.chip, styles.textMedium)}
                key={item.name}
                title={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className={styles.date}>
        {'Вакансия опубликована '}
        <time dateTime={vacancy.published_at}>
          {formatDate(vacancy.published_at)}
        </time>
        {` в г.${vacancy.area.name}`}
      </p>
    </article>
  );
};
