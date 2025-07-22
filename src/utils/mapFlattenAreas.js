import { mockAreas } from '@/mockData';

function flattenAreas(areas) {
  let result = {};

  areas.forEach((area) => {
    result[area.id] = area.name;
    if (area.areas && area.areas.length > 0) {
      result = { ...result, ...flattenAreas(area.areas) };
    }
  });

  return result;
}

export const mappedAreas = flattenAreas(mockAreas);
