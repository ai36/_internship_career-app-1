import { useEffect } from "react";
import { useVacancyStore } from "@store/vacancyStore";
import VacancyBlock from "./vacancyBlock/VacancyBlock";
import SkeletonVacancyList from "./SkeletonVacancyList";
import Pagination from "../pagination/Pagination";
import { NoSearchVacancy } from "@components/noSearchVacancy/NoSearchVacancy";
import styles from "./VacancyList.module.css";

const VacancyList = () => {
  const [
    vacancies,
    pagesCount,
    currentPage,
    fetchVacancy,
    loadingVacancies,
    errorVacancies,
    filters,
  ] = useVacancyStore((state) => [
    state.list,
    state.pagesCount,
    state.currentPage,
    state.fetchVacancy,
    state.loading,
    state.error,
    state.filters,
  ]);

  useEffect(() => {
    fetchVacancy("");
  }, [filters]);

  const handleFetch = (page) => {
    fetchVacancy(page);
  };

  if (errorVacancies) {
    return errorVacancies;
  }

  if (vacancies.length === 0) {
    return <NoSearchVacancy />;
  }

  return (
    <>
      <ul className={styles.wrapper}>
        {loadingVacancies ? (
          <SkeletonVacancyList />
        ) : (
          vacancies.map((item) => (
            <VacancyBlock key={item.date} title={item.date} cards={item.items} />
          ))
        )}
      </ul>
      {pagesCount > 1 && (
        <Pagination
          curPage={currentPage + 1}
          onChange={handleFetch}
          pagesCount={pagesCount}
        />
      )}
    </>
  );
};

export default VacancyList;
