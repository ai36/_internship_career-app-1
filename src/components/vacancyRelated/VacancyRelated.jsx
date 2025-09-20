import { Title } from "@components/title/Title";
import { VacancyService } from "../../api/VacancyService";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { parseResultVacancy, schemeResultVacancy } from "@utils/parse-vacancy";
import VacancyCard from "@components/vacancyList/vacancyBlock/vacancyCard/VacancyCard";
import Button from "@components/button/Button";
import styles from "./VacancyRelated.module.css";
import { SkeletonVacancyCards } from "@components/skeletonVacancyCards/SkeletonVacancyCards";

export const VacancyRelated = ({ id }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [getVacancies, isLoading, error] = useFetching(
    async (newpage, isNew = false) => {
      try {
        const res = await VacancyService.getRelatedById(id, newpage);

        const newItems = isNew
          ? parseResultVacancy(schemeResultVacancy(res.items))
          : [...items, ...parseResultVacancy(schemeResultVacancy(res.items))];
        setItems(newItems);

        setPage(res.page);
        setTotalPages(res.pages);
      } catch (err) {
        console.log(err);
      }
    }
  );

  useEffect(() => {
    getVacancies(page, true);
    window.scrollTo(0, 0);
  }, [id]);

  if (error) {
    return error;
  }

  return (
    <div className={styles.block}>
      <Title>Похожие вакансии</Title>

      {!items.length ? (
        <>
        <SkeletonVacancyCards count={6} />
        <div className={styles["btn-wrapper"]}>
        <Button
          disabled={isLoading}
          onClick={() => getVacancies(page + 1)}
          view="primary"
        >
          Показать ещё
        </Button>
      </div>
      </>
      ) : (
        <>
          <ul className={styles.list}>
            {items.map((card) => (
              <VacancyCard card={card} key={card.id} />
            ))}
          </ul>

          {isLoading ? (
            <SkeletonVacancyCards count={6} />
          ) : (
            <>
              {page + 1 < totalPages ? (
                <div className={styles["btn-wrapper"]}>
                  <Button
                    disabled={isLoading}
                    onClick={() => getVacancies(page + 1)}
                    view="primary"
                  >
                    Показать ещё
                  </Button>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
