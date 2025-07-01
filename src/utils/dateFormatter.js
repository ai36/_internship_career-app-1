import { toCapitalize } from './toCapitalize';

export const dateFormatter = date => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const [vacancyYear, vacancyMonth, vacancyDay] = date.split('-');
  const vacancyDate = new Date(vacancyYear, vacancyMonth - 1, vacancyDay);
  const formatParams = {
    month: 'long',
    day: 'numeric',
  };
  if (currentYear != vacancyYear) formatParams.year = 'numeric';
  if (currentDay != vacancyDay) formatParams.weekday = 'long';
  const formatter = new Intl.DateTimeFormat('ru', formatParams);
  let formattedDateText = formatter.format(vacancyDate);
  if (+currentDay === +vacancyDay) {
    formattedDateText = `cегодня, ${formattedDateText}`;
  }
  return toCapitalize(formattedDateText);
};
