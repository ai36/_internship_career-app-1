export function filterAreasByPrefix(obj, prefix) {
  const result = {};
  const lowerPrefix = prefix.toLowerCase();

  for (const [id, name] of Object.entries(obj)) {
    if (name.toLowerCase().startsWith(lowerPrefix)) {
      result[id] = name;
    }
  }

  return result;
}
