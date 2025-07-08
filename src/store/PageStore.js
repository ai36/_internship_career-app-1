import { create } from 'zustand';

window.history.pushState({}, '', '/search');

export const usePageStore = create((set) => ({
  currentPage: 'vacancySearch',

  setCurrentPage: (vacancyId) => {
    if (vacancyId) {
      set({ currentPage: 'cardOfVacancy' });
      window.history.pushState({}, '', `/vacancy/${vacancyId}`);
    } else {
      set({ currentPage: 'vacancySearch' });
      window.history.pushState({}, '', '/search');
    }
  },
}));
