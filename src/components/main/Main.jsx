import { FilterList } from "@components/filter-list/FilterList";
import { VacancyBlock } from "@components/vacancy-block/VacancyBlock";

export function Main({ page }) {
    return (
        <div className="container">
            <h1 className="visually-hidden">Поиск вакансий</h1>
            <FilterList />
            <VacancyBlock />
            <VacancyBlock />
        </div>
    );
}
