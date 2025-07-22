export const createVacancySlice = (set) => ({
  vacancies: [],
  vacancy: {},
  pages: 0,
  isLoading: false,
  error: null,
  hiddenVacancies: new Set(),
  similar: [],

  actions: {
    setLoading: (status) => {
      set({ isLoading: status });
    },
    setError: (error) => {
      set({ error });
    },
    clearError: () => {
      set({ error: null });
    },
    setVacancies: (data) => {
      set({ vacancies: data.items, pages: data.pages });
    },
    setVacancy: (vacancy) => {
      set({ vacancy });
    },
    updateSimilar: (data) => {
      set((state) => ({
        similar: [...state.similar, ...data.items],
        similarPages: data.pages,
      }));
    },
    clearSimilar: () => {
      set({ similar: [], similarPages: 1 });
    },
    updateHiddenVacancies: (id) =>
      set((state) => {
        const newSet = new Set(state.hiddenVacancies);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }

        return { hiddenVacancies: new Set([...newSet]) };
      }),
  },
});
