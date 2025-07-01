export const formatExperienceRange = (min = null, max = null) => {
  const addictMin = min === 1 ? ' года' : '';
  const addictMax = max === 1 ? ' года' : '';

  if ((min || min === 0) && (max || max === 0)) {
    return `Опыт от ${min}${addictMin} до ${max}${addictMax} лет`;
  } else if (min || min === 0) {
    return `Опыт от ${min}${addictMin} лет`;
  } else if (max || max === 0) {
    return `Опыт до ${max}${addictMax} лет`;
  } else {
    return `Без опыта`;
  }
};
