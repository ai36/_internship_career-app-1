import { formatDateTitle } from '@/utils/formatDateTitle';

export const sortVacancies = (vacancies) => {
  const sortedVacancies = [];

  vacancies.forEach(vacancy => {
      const date = new Date(vacancy.created_at);
      const formattedDate = vacancy.created_at.slice(0, 10);
      const existIndex = sortedVacancies.findIndex(item => item.date === formattedDate);

      if (existIndex !== -1) {
        sortedVacancies[existIndex].list.push(vacancy);
      } else {
        sortedVacancies.push({
          title: formatDateTitle(date),
          date: formattedDate,
          list: [vacancy]
        });
      }
    }
  );

  return sortedVacancies;
};