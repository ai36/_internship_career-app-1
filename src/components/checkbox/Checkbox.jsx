import Icon from "@components/icon/Icon";
import styles from "./Checkbox.module.css";
import { useVacancyStore } from "@store/vacancyStore";

const Checkbox = ({ list, id = "0", type = "checkbox" }) => {
  const { filters, toggleFilter } = useVacancyStore();

  const filterNames = {
    checkbox0: "employmentTypes",
    radio1: "dateOfPosting",
    radio2: "workExperience",
    checkbox3: "workSchedule",
    checkbox4: "technologyTags",
    checkbox5: "education",
    radio6: "incomeLevel1",
    checkbox6: "incomeLevel2",
    checkbox7: "partTimeJobs",
    checkbox8: "otherParameters",
    checkbox9: "inputParameter",
  };

  const filterType = filterNames[`${type}${id}`];
  const isRadio = type === "radio";

  const handleCheckboxChange = (value) => {
    toggleFilter(filterType, value, isRadio);
  };

  return (
    <>
      {list.map((item, index) => (
        <li
          key={index}
          className={styles.li}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <input
            className={styles.input}
            type={type}
            id={`${type}${id}${index}`}
            name={`${type}${id}`}
            onChange={() => handleCheckboxChange(item)}
            checked={
              type === "radio"
                ? filters[filterType]?.selected === item
                : filters[filterType]?.filters.includes(item)
            }
          />
          <span className={styles.field}>
            <Icon name={"tick"} className={styles.icon} />
          </span>
          <label htmlFor={`${type}${id}${index}`} className={styles.label}>
            {item}
          </label>
        </li>
      ))}
    </>
  );
};

export default Checkbox;
