import { FilterAdditional, FilterBriefcase, FilterLocation } from '@/components';

export function FilterItem({ filter }) {
  switch (filter?.type) {
    case 'input':
      return <FilterLocation filter={filter} />;
    case 'checkbox':
      return <FilterBriefcase filter={filter} />;
    case 'dropDown':
      return <FilterAdditional filter={filter} />;
    default:
      break;
  }
}
