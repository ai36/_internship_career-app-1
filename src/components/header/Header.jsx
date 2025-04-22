import { Logo } from "@components/logo/Logo";
import { Menu } from "@components/menu/Menu";
import styles from "./header.module.css";

export function Header({ page }) {
    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <a className={styles.logoLink} href="/">
                    <Logo />
                </a>
                <Menu page={page} />
            </div>
        </header>
    );
}
