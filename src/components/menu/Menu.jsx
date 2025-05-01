import { MenuTitle } from "@components";
import styles from "./menu.module.css";

export function Menu({ page }) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <MenuTitle active={(page === "search").toString()}>Поиск вакансий</MenuTitle>
                </li>
                <li className={styles.item}>
                    <MenuTitle active={(page === "favorites").toString()}>Избранные вакансии</MenuTitle>
                </li>
            </ul>
        </nav>
    );
}
