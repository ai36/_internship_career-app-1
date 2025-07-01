import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles['wrapper']}>
      <p className={styles['text']}>
        Проект выполнен в рамках стажировки{' '}
        <a
          href='https://preax.ru'
          target='_blank'
          rel='noreferrer'
          className={styles['link']}
        >
          PREAX
        </a>
      </p>
    </footer>
  );
};
