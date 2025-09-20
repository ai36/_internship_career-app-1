export const constructQueryString = (filters, typeMap, isSkills = false) => {
  const joinItem = isSkills ? '+' : '&';
  const filterParams = filters.map(type => typeMap[type]).filter(Boolean);
  return filterParams.length > 0 ? filterParams.join(`${joinItem}`) : '';
};