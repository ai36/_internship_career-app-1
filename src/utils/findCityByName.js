export const findCityByName = (data, name) => {
  for (const item of data) {
    if (item.name === name) {
      return item;
    }
    if (item.areas && item.areas.length > 0) {
      const found = findCityByName(item.areas, name);
      if (found) {
        return found;
      }
    }
  }
  return null;
};
