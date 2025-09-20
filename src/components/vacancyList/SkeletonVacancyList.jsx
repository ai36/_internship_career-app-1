import { SkeletonVacancyCards } from "@components/skeletonVacancyCards/SkeletonVacancyCards";
import styles from "./VacancyList.module.css";

const SkeletonVacancyList = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles["skeleton-title"]}></div>
      <SkeletonVacancyCards count={18} />
    </div>
  );
};

export default SkeletonVacancyList;
