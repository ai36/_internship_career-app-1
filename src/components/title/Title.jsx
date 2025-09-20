import styles from "./Title.module.css";

export const Title = ({ children, className = "" }) => {
  return <h2 className={`${styles.block} ${className}`}>{children}</h2>;
};
