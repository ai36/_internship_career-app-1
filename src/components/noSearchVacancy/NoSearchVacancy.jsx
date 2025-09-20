import styles from "./NoSearchVacancy.module.css";

export const NoSearchVacancy = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.feedback}>Не удалось найти вакансии с выбранными параметрами.<br />Попробуйте другие.</h3>
    </div>
  );
};
