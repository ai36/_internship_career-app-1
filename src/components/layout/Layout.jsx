import React, { useContext } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from "./Layout.module.css";
import Main from "@pages/main/Main";
import { RouterContext } from "../../contexts/routerContext";
import VacancyDetailPage from "@pages/vacancyDetailPage/VacancyDetailPage";
import { useTrackLocation } from "@hooks/useTrackLocation";

const Layout = () => {
  const { currentRoute, setCurrentRoute } = useContext(RouterContext);

  useTrackLocation(setCurrentRoute);

  const pages = {
    VacancyDetailPage: <VacancyDetailPage />,
    main: <Main />,
  };

  return (
    <>
      <Header />
      <div className={styles.bg}>
        <div className={styles.container}>
          {pages[currentRoute] || <Main />}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
