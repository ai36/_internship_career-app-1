export const getFullVacancyAddress = (addressObject, areaName) => {
    let address = '';

    if (addressObject?.raw) return `${addressObject.raw[0].toUpperCase() === addressObject.raw[0] && "г. "}${addressObject.raw.replace(/, (?=[^,]*$)/, ", д. ")}`
    if (addressObject?.building) address = `, д. ${addressObject.building}`
    if (addressObject?.street) address = `, ${addressObject.street} ${address}`
    if (addressObject?.city) address = `${addressObject.city[0].toUpperCase() === addressObject.city[0] && "г. "}${addressObject?.city} ${address}`
    if (!address && areaName) return `г. ${areaName}`;

    return address || '';
};
