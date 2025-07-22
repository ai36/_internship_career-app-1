import styles from './Footer.module.css';
import { Container } from '@/components';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        Проект выполнен в рамках стажировки{' '}
        <a href='https://preax.ru/' target='_blank' rel='noopener noreferrer'>
          PREAX
        </a>
      </Container>
    </footer>
  );
}
