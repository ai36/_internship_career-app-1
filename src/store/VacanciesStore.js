import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { request } from '@api';
import { API_PATHS } from '@constants';
import { sortByDate } from '@utils';
import { useParamsStore } from './ParamsStore';

export const useVacanciesStore = create(
  devtools((set) => ({
    vacancies: {},
    pages: null,
    loading: false,
    error: null,
    setVacancies: async (per_page = 18) => {
      set({ loading: true, error: null });
    
      try {
        const { params } = useParamsStore.getState();
        const requestParams = {
          ...params,
          per_page,
        };
    
        const { items, pages } = await request(API_PATHS.vacancies, requestParams);
        set({ vacancies: sortByDate(items), pages: pages - 1 });
      } catch (e) {
        set({ error: e.message });
      } finally {
        set({ loading: false });
      }
    },

    removeVacancyById: (id) => {
      set((state) => {
        const newVacancies = {};
        for (const date in state.vacancies) {
          const filtered = state.vacancies[date].filter((vacancy) => vacancy.id !== id);
          if (filtered.length > 0) {
            newVacancies[date] = filtered;
          }
        }
        return { vacancies: newVacancies };
      });
    }
  })),
);
