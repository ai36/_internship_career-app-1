import { Container, IconSvg } from '@/components';
import { clsx } from '@/utils';

import styles from './Header.module.css';
import { useEffect, useRef } from 'react';

const navLinks = [
  { href: '#', title: 'Поиск вакансий', isActive: true },
  { href: '#', title: 'Избранные вакансии', isActive: false },
];

export function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      '--headerHeight',
      `${headerRef.current.offsetHeight}px`,
    );
  }, [headerRef]);

  return (
    <header className={styles.header} id={'header'} ref={headerRef}>
      <Container>
        <div className={styles.headerWrapper}>
          <a href="/" className={styles.logoLink}>
            <IconSvg id="logo-svg" className={styles.logoIcon} />
          </a>
          <nav>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    className={clsx(
                      styles.navLink,
                      link.isActive && styles.active,
                    )}
                    href={link.isActive ? link.href : null}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
