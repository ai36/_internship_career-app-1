// Функция для отображения данных уровня зарплаты на карточке вакансии
export const formatSalary = (salary, gross) => {
  if (!salary) return;
  
  let condition = '';
  if (gross !== undefined) {
    condition = gross ? ' на руки' : ' до вычета налогов';
  }

  let correctCurrency = salary.currency === 'RUR' ? 'RUB' : salary.currency;
  const localeParams = {
    style: 'currency',
    currency: correctCurrency,
    minimumFractionDigits: 0,
  };
  if (!salary.from && salary.to) {
    return `до ${salary.to.toLocaleString('ru-RU', localeParams)}${condition}`;
  }
  if (salary.from && !salary.to) {
    return `от ${salary.from.toLocaleString('ru-RU', localeParams)}${condition}`;
  }
  if (salary.from && salary.to) {
    return `${salary.from.toLocaleString('ru-RU', { style: 'decimal' })} - ${salary.to.toLocaleString('ru-RU', localeParams)}${condition}`;
  }
  return `Доход не указан`;
};
