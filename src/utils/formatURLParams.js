export const formatURLParams = (params) => {
  return Object.keys(params).length
    ? '?' + new URLSearchParams(params)
    : '';
};