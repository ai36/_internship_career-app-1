import React, { useState } from "react";
import Layout from "@components/layout/Layout";
import { ROUTES } from "./routes";
import { RouterContext } from "./contexts/routerContext";

const App = () => {
  const [currentRoute = "", setCurrentRoute] = useState(
    ROUTES.find((route) => location.pathname.includes(route.path))?.id
  );

  const [detailVacancyId = "", setDetailVacancyId] = useState(() => {
    const url = new URL(location);
    const id = url.searchParams.get("id");
    return id;
  });

  return (
    <RouterContext.Provider
      value={{
        currentRoute,
        detailVacancyId,
        setCurrentRoute,
        setDetailVacancyId,
      }}
    >
      <Layout />
    </RouterContext.Provider>
  );
};

export default App;
