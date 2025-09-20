import { BackLink } from "@components/backLink/BackLink";
import { VacancyDetail } from "@components/vacancyDetail/VacancyDetail";
import styles from "./VacancyDetailPage.module.css";
import { getPageByRouteId } from "@utils/getPageByRouteId";
import { RouterContext } from "../../contexts/routerContext";
import { useContext } from "react";
import { VacancyRelated } from "@components/vacancyRelated/VacancyRelated";

const VacancyDetailPage = () => {
  const { detailVacancyId, setCurrentRoute } = useContext(RouterContext);
  const handleSetPage = () => {
    const route = getPageByRouteId("Main");
    history.pushState(null, "", route.path);
    setCurrentRoute(route.id);
  };

  return (
    <>
      <div className={styles.block}>
        <BackLink onClick={handleSetPage} text="К результатам поиска" />
        <VacancyDetail id={detailVacancyId} />
      </div>
      <VacancyRelated id={detailVacancyId} />
    </>
  );
};

export default VacancyDetailPage;
