import { FilterItem } from "@components";
import styles from "./filterList.module.css";

export function FilterList() {
    return (
        <section className={styles.box}>
            <h2 className="visually-hidden">Подбор по параметрам</h2>
            <FilterItem itemType="input" iconName="location" text="Город" />
            <FilterItem itemType="select" iconName="briefcase" text="Тип занятости" />
            <FilterItem itemType="multiselect" iconName="filterSolid" text="Дополнительные фильтры" />
        </section>
    );
}
