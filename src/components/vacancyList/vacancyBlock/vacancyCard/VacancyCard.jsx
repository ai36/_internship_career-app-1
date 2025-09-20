import React, { useContext, useState } from "react";
import Icon from "@components/icon/Icon";
import { RouterContext } from "../../../../contexts/routerContext";
import { getPageByRouteId } from "@utils/getPageByRouteId";
import { useVacancyStore } from "@store/vacancyStore";
import styles from "./VacancyCard.module.css";

const VacancyCard = ({ card }) => {
  const { setCurrentRoute, setDetailVacancyId } = useContext(RouterContext);

  const handleSetPage = () => {
    const route = getPageByRouteId("VacancyDetailPage");
    history.pushState(null, "", `${route.path}?id=${card.id}`);
    setCurrentRoute(route.id);
    setDetailVacancyId(card.id);
  };

  const [setBlackList, removeBlackList, hiddenFilters] = useVacancyStore((state) => [
    state.setBlackList,
    state.removeBlackList,
    state.filters.otherParameters.filters.includes("Включая скрытые вакансии"),
  ]);

  const [hidden, setHidden] = useState(card.hidden);

  const displayNone = hiddenFilters ? "" : hidden ? "d-none" : "";

  return (
    <li className={`${styles.card} ${displayNone}`} onClick={handleSetPage} tabIndex={1}>
      <div className={styles.main}>
        <div className={styles.headerBlock}>
          <h4 className={styles.title} title={card.name}>
            {card.name}
          </h4>
          <p className={styles.salary}>{card.salaryFormat}</p>
        </div>
        <div className={styles.controlsBlock}>
          <button
            className={`btn-reset ${styles["eye-btn"]}`}
            onClick={(e) => {
              e.stopPropagation();
              setHidden(!hidden);
              if (!hidden) {
                setBlackList(card.id);
                card.hidden = true;
              } else {
                removeBlackList(card.id);
                card.hidden = false;
              }
            }}
            tabIndex={1}
          >
            <Icon
              name={"slashEye"}
              className={hidden ? `${styles.eyeRevers}` : `${styles.eye}`}
            />
          </button>
        </div>
      </div>
      <div className={styles.additional}>
        <div className={styles.upContent}>
          <p>{card.company}</p>
          <p>{card.city}</p>
        </div>
        <p className={styles.experience}>
          <Icon name={"star"} className={styles.star} />
          {card.experience}
        </p>
      </div>
    </li>
  );
};

export default VacancyCard;
