import { Logo, Menu } from "@components";
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
