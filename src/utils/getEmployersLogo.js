export const getEmployersLogo = (logo_urls) => {
  if (logo_urls['240']) return logo_urls['240'];
  if (logo_urls['original']) return logo_urls['original'];
  if (logo_urls['90']) return logo_urls['90'];
};
