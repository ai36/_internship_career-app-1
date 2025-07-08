import { CardOfVacancy, VacancySearch } from '@/pages';

export * from '@/constants/ICON_NAMES';

export const DEFAULT_ROW = 6;

export const DEFAULT_COLUMN = 3;

export const VACANCIES_PER_PAGE = DEFAULT_ROW * DEFAULT_COLUMN;

export const API_URL = 'https://api.hh.ru/';

export const API_PATHS = {
  vacancies: 'vacancies',
};

export const INDEX_OFFSET = 1;


export const PAGES = {
  vacancySearch: <VacancySearch />,
  cardOfVacancy: <CardOfVacancy />,
}