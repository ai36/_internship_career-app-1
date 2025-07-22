import { MONTHS, MS_IN_DAY } from '@/constants';

export const formatDateTitle = (date) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  const daysDifference = (currentDate - date) / MS_IN_DAY;

  const day = date.getDate();
  const month = date.getMonth();
  const year =
    currentDate.getFullYear() === date.getFullYear()
      ? ''
      : ', ' + date.getFullYear();

  let result = '';

  switch (daysDifference) {
    case 0:
      result += 'Сегодня, ';
      break;
    case 1:
      result += 'Вчера, ';
      break;
    default:
      break;
  }

  return result + day + ' ' + MONTHS[month] + year;
};
