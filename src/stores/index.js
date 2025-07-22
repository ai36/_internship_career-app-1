import { createVacancySlice } from './vacancies';
import { createFilterSlice } from './filters';
import { createPaginationSlice } from './pagination';
import { create, useStore } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { devtools, persist } from 'zustand/middleware';

const filterPersist = persist(
  createFilterSlice,
  {
    name: 'filterSlice',
    storage: {
      getItem: (key) => {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      },
      setItem: (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
      },
      removeItem: (key) => sessionStorage.removeItem(key),
    },
    partialize: (state) => ({
      cities: state.cities,
      employment: state.employment,
      publishDate: state.publishDate,
      experience: state.experience,
      workSchedule: state.workSchedule,
      technologyTags: state.technologyTags,
      graduation: state.graduation,
      incomeLevel: state.incomeLevel,
      underworking: state.underworking,
      moreFilters: state.moreFilters,
    }),
  }
);

export const useBoundStore = create(
  devtools((...a) => ({
    ...createVacancySlice(...a),
    ...filterPersist(...a),
    ...createPaginationSlice(...a),
  }))
);

export const useShallowBoundStore = (selector, store = useBoundStore) => {
  return useStore(store, useShallow(selector));
};
