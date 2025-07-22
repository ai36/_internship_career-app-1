import styles from './SingleVacancy.module.css';
import { Container } from '@/components';
import { Content } from './Content';
import { Card } from '@/components/SingleVacancy/Card';

export const SingleVacancy = ({
  className,
  vacancy,
  isLoading,
  isHidden,
  onHide,
}) => {
  const isVacancyEmpty = Object.keys(vacancy).length === 0;
  isLoading = isLoading || isVacancyEmpty;

  return (
    <Container className={className}>
      <section className={styles.page}>
        <Content
          vacancy={vacancy}
          styles={styles}
          isLoading={isLoading}
          onHide={onHide}
          isHidden={isHidden}
        />
        <Card styles={styles} vacancy={vacancy} isLoading={isLoading} />
      </section>
    </Container>
  );
};
