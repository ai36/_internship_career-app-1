import styles from "./SkeletonVacancyCards.module.css";

export const SkeletonVacancyCards = ({ count = 6 }) => {
  return (
    <ul className={styles["skeleton-list"]}>
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className={styles["skeleton-item"]}>
          <div className={styles["skeleton-header"]}></div>
          <div className={styles["skeleton-body"]}></div>
          <div className={styles["skeleton-footer"]}></div>
        </li>
      ))}
    </ul>
  );
};
