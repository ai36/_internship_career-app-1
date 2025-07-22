import { PREFERRED_LOGO_SIZE } from '@/constants';

export const getLogoUrl = (
  logoUrls,
  prefferedQuality = PREFERRED_LOGO_SIZE,
) => {
  const result = logoUrls[prefferedQuality];
  return result || logoUrls['original'] || null;
};
