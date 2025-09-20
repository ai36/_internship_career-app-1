import React from "react";
import Icon from "@components/icon/Icon";
import Button from "@components/button/Button";
import styles from "./Header.module.css";
import Footer from "../footer/Footer";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.container}>
        <Icon name={"logo"} className={styles.logo} />
        <div className={styles.buttonWrapper}>
          <input
            className={styles.openButton}
            type="checkbox"
            name="openButton"
            id="openButton"
          />
          <div className={styles.lines}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
        <nav className={styles.controls}>
          <Button className={styles.navButton}>{"Поиск вакансий"}</Button>
          <Button className={styles.navButton} disabled={true}>
            {"Избранные вакансии"}
          </Button>
        </nav>
        <Footer />
      </div>
    </header>
  );
};

export default Header;
