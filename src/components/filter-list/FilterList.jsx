import { FilterItem } from "@components/filter-item/FilterItem";
import styles from "./filterList.module.css";

export function FilterList() {
    return (
        <section className={styles.box}>
            <FilterItem itemType="input" iconName="location" text="Город" />
            <FilterItem itemType="select" iconName="briefcase" text="Тип занятости" />
            <FilterItem itemType="multiselect" iconName="filterSolid" text="Дополнительные фильтры" />
        </section>
    );
}
