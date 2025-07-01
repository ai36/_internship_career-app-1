export const sortByDate = (vacancyList) => {
  const sortedList = {};
  vacancyList.map((element) => {
    let date = element.created_at.split('T')[0];
    if (!sortedList[date]) {
      sortedList[date] = [];
    }
    sortedList[date].push(element);
  });
  return sortedList;
};
