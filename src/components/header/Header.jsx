import { clsx } from '@utils';
import { Logo } from '@components';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles['wrapper']}>
      <header className={styles['header']}>
        <Logo />
        <nav className={styles['nav']}>
          <ul className={styles['nav-tabs']}>
            <li className={styles['nav-tab']}>
              <button
                type='button'
                className={clsx(styles['tab-btn'], styles['active'])}
              >
                Поиск вакансий
              </button>
            </li>
            <li className={styles['nav-tab']}>
              <button type='button' className={styles['tab-btn']}>
                Избранные вакансии
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
