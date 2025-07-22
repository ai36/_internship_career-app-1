import { VACANCIES_PER_PAGE } from '@/constants';

export const createPaginationSlice = (set) => ({
  per_page: VACANCIES_PER_PAGE,
  page: 0,
  pages: 1,
  similarPage: 0,
  similarPages: 1,
  setPage: (page) => set({ page }),
  setPages: (pages) => set({ pages }),
  setSimilarPage: (similarPage) => set({ similarPage }),
  setSimilarPages: (similarPages) => set({ similarPages }),
});
