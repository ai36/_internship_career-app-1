import { CURRENCY } from '@/constants';
import { formatNumber as format } from '@/utils/formatNumber';


export const formatSalary = (salary) => {
  if (!salary) return `Доход не указан`;

  const {from, to, currency} = salary;
  let formattedSalary = '';

  if (!from) {
    formattedSalary += 'до ' + format(to);
  } else if (!to) {
    formattedSalary += 'от ' + format(from);
  } else {
    formattedSalary += format(from) + ' - ' + format(to);
  }

  return formattedSalary + ` ${CURRENCY[currency]}`;
};

