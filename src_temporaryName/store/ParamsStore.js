import { create } from 'zustand';

export const useParamsStore = create((set) => ({
  params: {
    text: 'frontend',
    only_with_salary: 'true',
    order_by: 'publication_time',
    page: 0,
  },
  setPage: (page) => {
    set((state) => ({
      params: {
        ...state.params,
        page,
      },
    }));
  },
}));