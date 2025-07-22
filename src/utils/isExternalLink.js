export function isExternalLink(url, currentDomain = window.location.hostname) {
  const domain = currentDomain.replace('www.', '');

  const externalRegex = new RegExp(
    `^(https?:\\/\\/)(?!.*${domain.replace('.', '\\.')})([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}`,
  );

  if (!url || url.startsWith('#') || /^(mailto|tel|javascript):/i.test(url)) {
    return false;
  }

  return externalRegex.test(url) || url.startsWith('//');
}
