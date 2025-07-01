import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useVacancyFullStore = create(
  devtools((set) => ({
    vacancyFull: null,
    loading: false,
    error: null,
    vacancyId: null,

    fetchVacancyById: async (id) => {
      set({ loading: true, error: null });
      try {
        const response = await fetch(`https://api.hh.ru/vacancies/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        set({ vacancyFull: data });
      } catch (e) {
        set({ error: e.message });
      } finally {
        set({ loading: false });
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },

    setVacancyId: (id) => set({ vacancyId: id }),
  })),
);
