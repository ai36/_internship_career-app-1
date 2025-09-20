import Icon from "@components/icon/Icon";
import styles from "./BackLink.module.css";

export const BackLink = ({ text = "", onClick }) => {
  return (
    <button className={`btn-reset ${styles.btn}`} onClick={onClick}>
      <Icon name="arrow" />
      {text}
    </button>
  );
};
