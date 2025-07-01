export const clsx = (...classNames) => {
  return [...classNames].filter(item => item).join(' ');
};
