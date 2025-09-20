import React, { useEffect, useState, useRef } from "react";
import Icon from "@components/icon/Icon";
import Button from "@components/button/Button";
import ModalLayout from "@components/modalLayout/ModalLayout";
import Checkbox from "@components/checkbox/Checkbox";
import { searchData } from "@data/searchData";
import styles from "./FilterItem.module.css";
import { clsx } from "@utils/clsx";
import { useVacancyStore } from "@store/vacancyStore";
import { useClickOutside } from "@hooks/useClickOutside";

const FilterItem = ({
  iconName,
  type = "dropdown",
  text,
  isOpenFilter,
  onClick,
  level,
  children,
  className,
  onClickOutsideFilter,
}) => {
  const { filters, clickReset, toggleClickReset } = useVacancyStore();
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const [showInputCase, setShowInputCase] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (clickReset) {
      setValue("");
      setShowInputCase(false);
      toggleClickReset();
    }
  }, [clickReset]);

  const onClickOutside = () => {
    onClickOutsideFilter(false);
    setShowInputCase(false);
  };

  useClickOutside(ref, onClickOutside);

  const filterType = {
    "Дополнительные фильтры": "additionalFilters",
    "Тип занятости": "employmentTypes",
    "Дата публикации вакансии": "dateOfPosting",
    "Опыт работы": "workExperience",
    "График работы": "workSchedule",
    "Теги технологий": "technologyTags",
    Образование: "education",
    "Уровень дохода": ["incomeLevel1", "incomeLevel2"],
    Подработка: "partTimeJobs",
    "Другие параметры": "otherParameters",
    Город: "inputParameter",
  };

  const filterKeys = filterType[text];

  let count = 0;

  if (Array.isArray(filterKeys)) {
    count = filterKeys.reduce(
      (acc, key) => acc + (filters[key].count || filters[key].filters?.length || 0),
      0
    );
  } else {
    count = filterKeys
      ? filters[filterKeys].count || filters[filterKeys].filters?.length || 0
      : 0;
  }

  if (text === "Дополнительные фильтры") {
    count = filters[filterKeys].count || 0;
  }

  const activCity = filters.inputParameter.filters;

  const handleClick = (e) => {
    if (e.target.value === "") {
      setFilteredList(activCity);
      if (activCity.length > 0) {
        setShowInputCase((prevState) => !prevState);
      }
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue.length > 2 || activCity.length > 0) {
      setShowInputCase(true);
    } else {
      setShowInputCase(false);
    }

    if (inputValue.length > 2) {
      const filteredData = searchData
        .flatMap((country) => [
          country,
          ...country.areas.flatMap((area) => [area, ...area.areas]),
        ])
        .filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()));

      const filteredDataNames = filteredData.map(({ name }) => name);
      setFilteredList(filteredDataNames);
    } else {
      setFilteredList(filters.inputParameter.filters);
    }
  };

  return (
    <>
      <li
        ref={ref}
        className={clsx(styles.wrapper, showInputCase && styles.showInputCase, className)}
        onClick={onClick}
        data-level={level}
        name={iconName}
      >
        <div className={styles.title} data-active={isOpenFilter ? "true" : "false"}>
          <div className={styles.nameBlock}>
            <Icon name={iconName} className={styles.icon} />
            {(type === "input" && (
              <input
                className={styles.input}
                type="text"
                placeholder={text}
                value={value}
                onChange={handleChange}
                onClick={handleClick}
                data-active={value ? "true" : "false"}
              />
            )) || <span className={styles.input}>{text}</span>}
          </div>
          {filterKeys && count > 0 && !value && (
            <div
              className={clsx(
                styles.countBlock,
                type === "input" && styles.countBlockInput
              )}
            >
              <span>{count}</span>
            </div>
          )}
          {(type === "dropdown" && (
            <Icon
              name="chevron"
              className={clsx(styles.chevron, isOpenFilter && styles.active)}
            />
          )) ||
            (value && (
              <Button
                onClick={() => {
                  setValue("");
                  setShowInputCase(false);
                }}
              >
                <Icon name="clear" className={styles.iconClear} />
              </Button>
            ))}
        </div>
        {isOpenFilter && children}
        {showInputCase && (
          <>
            <ModalLayout className={styles.searchCase}>
              <Checkbox list={filteredList} id={"9"} />
            </ModalLayout>
          </>
        )}
      </li>
    </>
  );
};

export default FilterItem;
