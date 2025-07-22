export * from "../mockData/areas";

export const BASE_URL = 'https://api.hh.ru';

// https://api.hh.ru/openapi/redoc#tag/Obshie-spravochniki/operation/get-dictionaries
export const CURRENCY = {
  RUR: '₽',
  AZN: 'AZN',
  BYR: 'бел. руб.',
  EUR: 'EUR',
  GEL: 'GEL',
  KGS: 'KGS',
  KZT: 'KZT',
  UAH: 'грн.',
  UZS: 'сум.',
  USD: '$',
};

export const DEFAULT_ROW = 6;

export const DEFAULT_COLUMN = 3;

export const VACANCIES_PER_PAGE = 18;

export const REGION = 'ru-RU';

const MS_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

export const MS_IN_DAY = MS_IN_SEC * SEC_IN_MIN * MIN_IN_HOUR * HOUR_IN_DAY;

export const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const DEFAULT_SEARCH_PARAMS = {
  text: 'Frontend',
  order_by: 'publication_time',
  currency: 'RUR',
  per_page: VACANCIES_PER_PAGE,
};

export const SIMILAR_SEARCH_PARAMS = {
  order_by: 'publication_time',
  per_page: 6,
};

export const PREFERRED_LOGO_SIZE = '240';




export const API_EMPLOYMENT = [
  { id: 'full', name: 'Полная занятость' },
  { id: 'part', name: 'Частичная занятость' },
  { id: 'project', name: 'Проектная работа' },
  { id: 'volunteer', name: 'Волонтерство' },
  { id: 'probation', name: 'Стажировка' },
];

export const API_PERIOD = [
  { id: 'null', name: 'За все время' },
  { id: '30', name: 'За месяц' },
  { id: '7', name: 'За неделю' },
  { id: '3', name: 'За последние 3 дня' },
  { id: '1', name: 'За сутки' },
];

export const API_EXPERIENCE = [
  { id: 'noExperience', name: 'Нет опыта' },
  { id: 'between1And3', name: 'От 1 года до 3 лет' },
  { id: 'between3And6', name: 'От 3 до 6 лет' },
  { id: 'moreThan6', name: 'Более 6 лет' },
];

export const API_SCHEDULE = [
  { id: 'fullDay', name: 'Полный день', uid: 'full_day' },
  { id: 'shift', name: 'Сменный график', uid: 'shift' },
  { id: 'flexible', name: 'Гибкий график', uid: 'flexible' },
  { id: 'remote', name: 'Удаленная работа', uid: 'remote' },
  { id: 'flyInFlyOut', name: 'Вахтовый метод', uid: 'fly_in_fly_out' },
];

export const API_EDUCATION = [
  { id: 'not_required_or_not_specified', name: 'не требуется или не указано' },
  { id: 'special_secondary', name: 'среднее специальное' },
  { id: 'higher', name: 'высшее' },
];

export const API_UNDERWORKING = [
  { id: 'employment_part', value: 'Неполный день' },
  { id: 'from_four_to_six_hours_in_a_day', value: 'От 4 часов в день' },
  { id: 'start_after_sixteen', value: 'По вечерам' },
  { id: 'only_saturday_and_sunday', value: 'По выходным' },
  { id: 'employment_project', value: 'Разовое задание' },
];

export const API_MORE_FILTERS = [
  { id: 'accept_handicapped', name: 'Доступные людям с инвалидностью' },
  { id: 'accredited_it', name: 'От аккредитованных ИТ компаний' },
  { id: 'not_from_agency', name: 'Без вакансий от кадровых агенств' },
];