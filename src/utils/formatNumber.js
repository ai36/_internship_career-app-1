import { REGION } from '@/constants';

/**
 *
 * @param number {number} - number which will be formatted
 *
 * */

export const formatNumber = (number) => {
  return number.toLocaleString(REGION);
};