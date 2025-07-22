import styles from './Panel.module.css';
import { Container, IconSvg, TextButton } from '@/components';
import { clsx } from '@/utils';
import { usePageRouter } from '@/hooks';
import { vacancyService } from '@/services';

export const Panel = ({ className }) => {
  const { navigate } = usePageRouter();

  const handleClick = () => {
    navigate('vacancies');
    vacancyService.resetVacancy();
    vacancyService.abortCurrentFetch();
  };

  return (
    <Container className={clsx(styles.panel, className)}>
      <TextButton className={styles.navButton} onClick={handleClick}>
        <IconSvg id={'chevron-left-svg'} className={styles.icon} /> К
        результатам поиска
      </TextButton>
    </Container>
  );
};
