import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { request } from '@api';
import { API_PATHS } from '@constants';

export const useVacanciesSimilar = create(
  devtools((set) => ({
    similarVacancies: [],
    similarPage: 0,
    similarPages: null,
    loading: false,
    error: null,

    setSimilarVacancies: async (id) => {
      set({ loading: true, error: null });

      try {
        const { similarVacancies, similarPage } = useVacanciesSimilar.getState();
        const requestParams = {
          page: similarPage,
          per_page: 6,
          only_with_salary: 'true',
        };

        const rawData = await request(`${API_PATHS.vacancies}/${id}/similar_vacancies`, requestParams);
        const { items, pages } = rawData;
        set({ similarVacancies: [...similarVacancies, ...items], similarPages: pages - 1});
      } catch (e) {
        set({ error: e.message });
      } finally {
        set({ loading: false });
      }
    },

    setSimilarPage: (page) => set({ similarPage: page }),
    clearSimilarVacancies: () => set({ similarVacancies: [], similarPage: 0, similarPages: null }),
  })),
);
