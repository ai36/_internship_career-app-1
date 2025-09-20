import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  clearItemsFromBlackList,
  groupResultVacancyByDate,
  parseResultVacancy,
  schemeResultVacancy,
} from "@utils/parse-vacancy";
import { generateFiltersQueryString } from "@utils/generateFiltersQueryString";

const FILTERS_KEY = "vacancyFilters";
const defQuery = "frontend";
const defPerPage = "18";
const defSort = "publication_time";

const initialFilters = {
  additionalFilters: { count: 0 },
  employmentTypes: { filters: [], count: 0 },
  dateOfPosting: { selected: "За все время", count: 0 },
  workExperience: { selected: "Не имеет значения", count: 0 },
  workSchedule: { filters: [], count: 0 },
  technologyTags: { filters: [], count: 0 },
  education: { filters: [], count: 0 },
  incomeLevel1: { selected: "Не имеет значения", count: 0 },
  incomeLevel2: { filters: [], count: 0 },
  partTimeJobs: { filters: [], count: 0 },
  otherParameters: { filters: [], count: 0 },
  inputParameter: { filters: [], count: 0 },
};

export const useVacancyStore = create(
  persist(
    (set, get) => ({
      list: [],
      blackList: [],
      filters: initialFilters,
      pagesCount: 1,
      currentPage: 0,
      loading: false,
      error: "",
      clickReset: false,
      toggleClickReset: () => set((state) => ({ clickReset: !state.clickReset })),
      initializeFilters: () => {
        const storedFilters = sessionStorage.getItem(FILTERS_KEY);
        if (storedFilters) {
          set({ filters: JSON.parse(storedFilters) });
        }
      },
      resetFilters: () => {
        sessionStorage.setItem(FILTERS_KEY, JSON.stringify(initialFilters));
        set({ filters: initialFilters, currentPage: 0 });
        window.history.replaceState({}, "", "/");
      },
      setBlackList: (id) => {
        const newItem = [...get().blackList, id];
        set({ blackList: newItem });
      },
      removeBlackList: (id) => {
        set({ blackList: get().blackList.filter((el) => el !== id) });
      },
      fetchVacancy: async (page, today = false) => {
        try {
          set({ loading: true });
          set({ error: "" });

          const actualPage = page ? page - 1 : get().currentPage;

          const filters = get().filters;

          const queryParams = generateFiltersQueryString(filters);

          // для возможности поделиться ссылкой с фильтрами
          if (!queryParams) {
            window.history.pushState(null, "", "/");
          } else {
            window.history.pushState(null, "", queryParams);
          }
          const getURLAdress = window.location.pathname.slice(1);

          const response = await fetch(
            `https://api.hh.ru/vacancies/?text=${defQuery}${getURLAdress}&page=${actualPage}&per_page=${defPerPage}&order_by=${defSort}`
          );

          if (!response.ok) throw new Error("Что-то пошло не так. Попробуйте позже");

          const result = await response.json();

          let res = parseResultVacancy(schemeResultVacancy(result.items));

          if (get().blackList.length) {
            res = clearItemsFromBlackList(res, get().blackList);
          }

          const group = groupResultVacancyByDate(res);

          set({
            list: group,
            currentPage: result.page,
            pagesCount: result.pages,
          });
        } catch (e) {
          console.log(e);
          if (e.name === "TypeError") {
            set({ error: "Ошибка в запросе" });
          } else {
            set({ error: e.message });
          }
        } finally {
          set({ loading: false });
        }
      },
      toggleFilter: (filterType, value, isRadio = false) => {
        set((state) => {
          let newFilters;
          if (isRadio) {
            const initialRadioValues = {
              dateOfPosting: "За все время",
              workExperience: "Не имеет значения",
              incomeLevel1: "Не имеет значения",
            };
            const initialSelectedValue = initialRadioValues[filterType];
            const newCount = value !== initialSelectedValue ? 1 : 0;
            newFilters = {
              ...state.filters,
              [filterType]: {
                selected: value,
                count: newCount,
              },
            };
          } else {
            const currentFilters = state.filters[filterType]?.filters || [];
            const currentCount = state.filters[filterType]?.count || 0;
            const updatedFilters = currentFilters.includes(value)
              ? currentFilters.filter((v) => v !== value)
              : [...currentFilters, value];
            const newCount = currentFilters.includes(value)
              ? currentCount - 1
              : currentCount + 1;

            newFilters = {
              ...state.filters,
              [filterType]: {
                filters: updatedFilters,
                count: newCount,
              },
            };
          }
          const additionalFiltersCount = Object.keys(newFilters)
            .filter((key) => key !== "additionalFilters" && key !== "inputParameter")
            .reduce((acc, key) => {
              if (key === "employmentTypes") {
                return window.innerWidth > 1023
                  ? 0
                  : acc + (newFilters[key].count || newFilters[key].filters?.length || 0);
              } else {
                return (
                  acc + (newFilters[key].count || newFilters[key].filters?.length || 0)
                );
              }
            }, 0);
          newFilters.additionalFilters = {
            count: additionalFiltersCount,
          };

          sessionStorage.setItem(FILTERS_KEY, JSON.stringify(newFilters));
          return { filters: newFilters, currentPage: 0 };
        });
      },
      updateFiltersCount: () => {
        set((state) => {
          let newFilters = {
            ...state.filters,
          };
          const additionalFiltersCount = Object.keys(newFilters)
            .filter((key) => key !== "additionalFilters" && key !== "inputParameter")
            .reduce((acc, key) => {
              if (key === "employmentTypes") {
                return window.innerWidth > 1023
                  ? 0
                  : acc + (newFilters[key].count || newFilters[key].filters?.length || 0);
              } else {
                return (
                  acc + (newFilters[key].count || newFilters[key].filters?.length || 0)
                );
              }
            }, 0);
          newFilters.additionalFilters = {
            count: additionalFiltersCount,
          };

          sessionStorage.setItem(FILTERS_KEY, JSON.stringify(newFilters));
          return { filters: newFilters, currentPage: 0 };
        });
      },
    }),
    {
      name: FILTERS_KEY,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
