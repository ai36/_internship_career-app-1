import { ROUTES } from "../routes";

export const getPageByRouteId = (routeId='') => {
    return ROUTES.find((route) => route.id === routeId);

};