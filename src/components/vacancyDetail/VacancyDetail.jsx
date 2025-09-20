import Icon from "@components/icon/Icon";
import { useVacancyStore } from "@store/vacancyStore";
import { useEffect, useState } from "react";
import { VacancyService } from "../../api/VacancyService";
import { useFetching } from "../../hooks/useFetching";
import { parseVacancyDetail } from "@utils/parse-vacancy";
import styles from "./VacancyDetail.module.css";
import { SkeletonVacancyDetail } from "@components";

export const VacancyDetail = ({ id }) => {
  const [blackList, setBlackList, removeBlackList] = useVacancyStore(
    (state) => [state.blackList, state.setBlackList, state.removeBlackList]
  );

  const [item, setItem] = useState(null);

  const [getVacancy, isLoading, error] = useFetching(async () => {
    try {
      const res = await VacancyService.getById(id);
      const vacancyInfo = parseVacancyDetail(res);
      if (blackList.includes(vacancyInfo.id)) vacancyInfo.hidden = true;
      setItem(vacancyInfo);
    } catch (err) {
      console.log(err);
    }
  });

  const handleHidden = () => {
    setItem({ ...item, hidden: !item.hidden });

    if (!item.hidden) {
      setBlackList(item.id);
    } else {
      removeBlackList(item.id);
    }
  };

  useEffect(() => {
    getVacancy();
  }, [id]);

  if (error) {
    return error;
  }

  if (isLoading) {
    return <SkeletonVacancyDetail />;
  }

  if (!item) {
    return "Вакансии нет";
  }

  return (
    <div className={styles.block}>
      <div className={`${styles.card} ${styles.main}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{item.name}</h2>
          <p className={styles.subtitle}>{item.salaryFormat}</p>
          <h4 className={styles["title-xs"]}>Требования к вакансии</h4>
          <ul className={styles.tags}>
            <li>
              <Icon name="star" className={styles.star} /> Опыт работы{" "}
              {item.experience}
            </li>
            <li>
              <Icon name="briefCase" />
              {item.employment}
            </li>
            <li>
              <Icon name="clock" />
              {item.schedule}
            </li>
          </ul>
        </div>

        <button onClick={handleHidden} className={`btn-reset ${styles.btn}`}>
          {item.hidden ? (
            <>
              <Icon name="eye" className={styles["eye"]} /> Показать
            </>
          ) : (
            <>
              <Icon name="slashEye" className={styles["slash-eye"]} /> Скрыть{" "}
            </>
          )}
        </button>

        {item.description ? (
          <div className={styles.section}>
            <h3 className={styles["title-md"]}>Описание</h3>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
          </div>
        ) : (
          ""
        )}

        {item.key_skills.length ? (
          <div className={styles.section}>
            <h3 className={styles["title-md"]}>Ключевые навыки</h3>
            <ul className={styles["tags-bubble"]}>
              {item.key_skills.map((el) => (
                <li key={el.name}>{el.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}

        <p className={styles["text-comment"]}>
          Вакансия опубликована {item.published_at}{" "}
          {item.city ? `в г. ${item.city}` : ""}
        </p>
      </div>

      <div className={styles.aside}>
        <div className={`${styles.card} ${styles.wrapper}`}>
          {item.employer.logo ? (
            <img
              className={styles["employer-logo"]}
              src={item.employer.logo}
              alt={item.employer.name}
              title={item.employer.name}
            />
          ) : (
            ""
          )}
          <div className={styles.logoDesc}>
            <h3 className={styles["title-lg"]}>{item.employer.name}</h3>
            {item.address ? (
              <p className={styles["text-md"]}>{item.address}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
