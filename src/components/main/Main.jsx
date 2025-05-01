import { FilterList, VacancyList } from "@components";
import styles from "./main.module.css";

export function Main({ page }) {
    return (
        <main className={styles.main}>
            <div className={`${styles.container} container`}>
                <h1 className="visually-hidden">Поиск вакансий</h1>
                <FilterList />
                <VacancyList />
            </div>
        </main>
    );
}
