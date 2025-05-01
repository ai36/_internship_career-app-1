import { VacancyCard } from "@components";
import styles from "./vacancyBlock.module.css";

const now = new Date();

export function VacancyBlock() {
    return (
        <>
            <section className={styles.box}>
                <h2 className={styles.title}>
                    <time className={styles.date} dateTime={now}>
                        Сегодня, {now.toLocaleString("default", { day: "numeric", month: "long" })}
                    </time>
                </h2>
                <div className={styles.wrapper}>
                    <VacancyCard />
                    <VacancyCard />
                    <VacancyCard />
                    <VacancyCard />
                    <VacancyCard />
                    <VacancyCard />
                </div>
            </section>
        </>
    );
}
