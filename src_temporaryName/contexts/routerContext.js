
import { createContext } from "react";
import { ROUTES } from "../routes";
export const RouterContext = createContext({
  currentRoute: ROUTES[0]?.id, 
  setCurrentRoute: () => {},
});