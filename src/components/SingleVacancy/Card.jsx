import { clsx, getAddress, getLogoUrl } from '@/utils';
import { Skeleton } from '@/components';

export const Card = ({ styles, vacancy, isLoading = true }) => {
  const hasLogoUrls =
    Object.keys(vacancy?.employer?.logo_urls ?? {}).length > 0;

  if (isLoading) {
    return (
      <article className={clsx(styles.item, styles.card)}>
        <Skeleton width={120} height={60} />

        <address className={styles.address}>
          <Skeleton width={150} height={28} />
          <Skeleton width={'100%'} height={24} />
          <Skeleton width={'100%'} height={24} />
        </address>
      </article>
    );
  }

  return (
    <article className={clsx(styles.item, styles.card)}>
      {hasLogoUrls ? (
        <img
          src={getLogoUrl(vacancy.employer.logo_urls)}
          alt={`Логотип работодателя ${vacancy?.employer?.name}`}
          className={styles.logo}
        />
      ) : null}
      <address className={styles.address}>
        <h2 className={styles.subtitle}>{vacancy?.employer?.name}</h2>
        <p>{getAddress(vacancy)}</p>
      </address>
    </article>
  );
};
