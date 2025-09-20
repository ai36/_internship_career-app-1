import React, { useEffect, useState } from "react";
import FilterItem from "./filterItem/FilterItem";
import ModalLayout from "@components/modalLayout/ModalLayout";
import AdditionalFilters from "@components/additionalFilters/AdditionalFilters";
import Checkbox from "@components/checkbox/Checkbox";
import Button from "@components/button/Button";
import { briefCase, otherFiltersData } from "@data/filterData";
import { useVacancyStore } from "@store/vacancyStore";
import styles from "./FilterList.module.css";
import { useResize } from "@hooks/useResize";

const FilterList = () => {
  const { filters, resetFilters, toggleClickReset, updateFiltersCount } =
    useVacancyStore();
  const [showCitySearch, setShowCitySearch] = useState(false);
  const [showBriefCase, setShowBriefCase] = useState(false);
  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);
  const screenType = useResize();

  const handleReset = () => {
    resetFilters();
    toggleClickReset();
    setShowBriefCase(false);
  };

  useEffect(() => {
    updateFiltersCount();
  }, [screenType]);

  const otherFiltersPredicate = (filter) => {
    if (filter.icon === "briefCase") {
      if (screenType !== "desktop") return true;
    } else {
      return true;
    }
  };

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        <FilterItem
          iconName="plane"
          type="input"
          text="Город"
          onClick={() => {
            setShowCitySearch(!showCitySearch);
          }}
          isOpenFilter={showCitySearch}
          onClickOutsideFilter={setShowCitySearch}
        />
        {screenType === "desktop" && (
          <FilterItem
            iconName="briefCase"
            text="Тип занятости"
            onClick={() => {
              setShowBriefCase(!showBriefCase);
            }}
            isOpenFilter={showBriefCase}
            onClickOutsideFilter={setShowBriefCase}
          >
            <ModalLayout className={styles.briefCase}>
              <Checkbox list={briefCase} />
            </ModalLayout>
          </FilterItem>
        )}

        <FilterItem
          iconName="filter"
          text="Дополнительные фильтры"
          onClick={() => {
            setShowAdditionalFilters(!showAdditionalFilters);
          }}
          isOpenFilter={showAdditionalFilters}
          level="high"
          onClickOutsideFilter={setShowAdditionalFilters}
        >
          <ModalLayout>
            <AdditionalFilters list={otherFiltersData.filter(otherFiltersPredicate)} />
          </ModalLayout>
        </FilterItem>
      </ul>
      {(filters.additionalFilters.count !== 0 ||
        filters.employmentTypes.count !== 0 ||
        filters.inputParameter.count !== 0) && (
        <Button className={styles.resetButton} onClick={handleReset}>
          Сбросить все фильтры
        </Button>
      )}
    </section>
  );
};

export default FilterList;
