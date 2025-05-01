import { VacancyBlock } from "@components";
import styles from "./vacancyList.module.css";

export function VacancyList() {
    return (
        <>
            <section className={styles.box}>
                <VacancyBlock />
                <VacancyBlock />
            </section>
        </>
    );
}
