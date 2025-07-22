import { formatDateTitle } from '@/utils';
import {
  DEFAULT_SEARCH_PARAMS,
  SIMILAR_SEARCH_PARAMS,
  API_EMPLOYMENT,
  API_PERIOD,
  API_EXPERIENCE,
  API_SCHEDULE,
  API_EDUCATION,
  API_UNDERWORKING,
  API_MORE_FILTERS,
} from '@/constants';

export class VacancyService {
  constructor(store, api) {
    this.store = store;
    this.abortController = null;
    this.api = api;
  }

  abortCurrentFetch() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }

  async fetch() {
    const {
      page,
      actions,
      cities,
      employment,
      publishDate,
      experience,
      workSchedule,
      technologyTags,
      graduation,
      incomeLevel,
      underworking,
      moreFilters,
    } = this.store.getState();
    const { setError, setLoading, setVacancies, clearError } = actions;

    const params = new URLSearchParams({
      ...DEFAULT_SEARCH_PARAMS,
      page: page,
    });

    Object.keys(cities).forEach((area) => params.append('area', area));

    API_EMPLOYMENT.filter((apiItem) =>
      Object.values(employment).includes(apiItem.name),
    )
      .map((apiItem) => apiItem.id)
      .forEach((employment) => params.append('employment', employment));

    API_PERIOD.forEach(
      ({ id, name }) =>
        Object.values(publishDate).includes(name) &&
        id !== 'null' &&
        params.append('period', id),
    );

    const valueExperience = Object.values(experience)[0];
    valueExperience !== 'Не имеет значения' &&
      API_EXPERIENCE.forEach(
        ({ id, name }) =>
          valueExperience === name && params.append('experience', id),
      );

    API_SCHEDULE.filter((item) =>
      Object.values(workSchedule).includes(item.name),
    ).forEach((item) => params.append('schedule', item.id));

    Object.values(technologyTags).length &&
      params.set('text', Object.values(technologyTags).join('+'));

    API_EDUCATION.filter((item) =>
      Object.values(graduation)
        .map((e) => e.trim().toLowerCase())
        .includes(item.name.trim().toLowerCase()),
    ).forEach((item) => params.append('education', item.id));

    ('isIncome' in incomeLevel && params.append('only_with_salary', 'true'),
      ['25More', '50More', '100More', '150More'].forEach(
        (k) =>
          k in incomeLevel && params.append('salary', k.replace('More', '000')),
      ));

    API_UNDERWORKING.filter((i) =>
      Object.values(underworking).includes(i.value),
    ).forEach((i) => params.append('part_time', i.id));

    API_MORE_FILTERS.filter((i) =>
      Object.values(moreFilters).includes(i.name),
    ).forEach((i) => params.append('label', i.id));

    const url = '/vacancies?' + params.toString().replace(/%2B/g, '+');

    this.abortController = new AbortController();
    try {
      setLoading(true);
      clearError();
      const result = await this.api.get({
        url,
        signal: this.abortController.signal,
      });
      setVacancies(result);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(`Ошибка при загрузке вакансий: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  }

  getGroupedByDay() {
    const { vacancies, moreFilters } = this.store.getState();
    if (!vacancies.length) {
      return [];
    }

    let vacanciesWithoutHidden = vacancies;
    if (!('includingHidden' in moreFilters)) {
      vacanciesWithoutHidden = vacancies.filter(
        (vacancy) => !this.checkIsHidden(vacancy.id),
      );
    }

    const grouped = vacanciesWithoutHidden.reduce((acc, vacancy) => {
      const dateKey = formatDateTitle(vacancy.published_at);

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      acc[dateKey].push(vacancy);

      return acc;
    }, {});

    return Object.entries(grouped).map(([key, value]) => ({
      title: key,
      list: value,
    }));
  }

  getVacancyById(id) {
    const { vacancies } = this.store.getState();
    return vacancies.find((vacancy) => vacancy.id === id);
  }

  async fetchVacancyById(id) {
    const { actions } = this.store.getState();
    const { setError, setLoading, setVacancy, clearError } = actions;

    this.abortCurrentFetch();

    try {
      setLoading(true);
      clearError();
      const result = await this.api.get({
        url: `/vacancies/${id}`,
      });
      setVacancy(result);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(`Ошибка при загрузке вакансий: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  }

  async fetchVacancyPageData(id) {
    const { actions, similarPage, setSimilarPage } = this.store.getState();
    const {
      setError,
      setLoading,
      setVacancy,
      updateSimilar,
      clearError,
      clearSimilar,
    } = actions;
    const params = {
      ...SIMILAR_SEARCH_PARAMS,
      page: similarPage,
    };

    this.abortCurrentFetch();

    this.abortController = new AbortController();

    try {
      setLoading(true);
      clearError();
      clearSimilar();

      const [vacancy, similar] = await Promise.all([
        this.api.get({
          url: `/vacancies/${id}`,
          signal: this.abortController.signal,
        }),
        this.api.get({
          url: `/vacancies/${id}/similar_vacancies`,
          params,
          signal: this.abortController.signal,
        }),
      ]);
      setVacancy(vacancy);
      updateSimilar(similar);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(`Ошибка при загрузке вакансий: ${err.message}`);
      }
    } finally {
      setLoading(false);
      setSimilarPage(similarPage + 1);
    }
  }

  async fetchSimilarVacancies(id) {
    const { actions, similarPage, setSimilarPage } = this.store.getState();
    const { setError, setLoading, updateSimilar, clearError } = actions;
    const params = {
      ...SIMILAR_SEARCH_PARAMS,
      page: similarPage,
    };

    this.abortCurrentFetch();

    this.abortController = new AbortController();

    try {
      setLoading(true);
      clearError();

      const similar = await this.api.get({
        url: `/vacancies/${id}/similar_vacancies`,
        params,
        signal: this.abortController.signal,
      });

      updateSimilar(similar);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(`Ошибка при загрузке вакансий: ${err.message}`);
      }
    } finally {
      setLoading(false);
      setSimilarPage(similarPage + 1);
    }
  }

  resetVacancy() {
    const { setVacancy } = this.store.getState().actions;
    setVacancy({});
  }

  checkIsHidden(id) {
    const { hiddenVacancies } = this.store.getState();

    return hiddenVacancies.has(id);
  }

  hideVacancy(id) {
    const { updateHiddenVacancies } = this.store.getState().actions;
    updateHiddenVacancies(id);
  }
}
