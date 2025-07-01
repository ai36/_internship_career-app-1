import { FilterItem } from '@components';
import { ICON_NAMES } from '@constants';
import styles from './drop.module.css';
import {
  optionsCalendar,
  optionsCash,
  optionsCashMore,
  optionsExp,
  optionsGraduation,
  optionsJob,
  optionsOther,
  optionsStack,
  optionsTime,
} from './dropdownFiltersData.js';

export const DropdownFilters = () => {
  return (
    <div className={styles['container']}>
      <FilterItem
        type='item'
        iconName={ICON_NAMES.calendar}
        typeDropdown={'radio'}
        options={optionsCalendar}
      >
        Дата публикации вакансии
      </FilterItem>
      <FilterItem
        type='item'
        iconName={ICON_NAMES.experience}
        typeDropdown={'radio'}
        options={optionsExp}
      >
        Опыт работы
      </FilterItem>
      <FilterItem type='item' iconName={ICON_NAMES.time} options={optionsTime}>
        График работы
      </FilterItem>
      <FilterItem type='item' iconName={ICON_NAMES.stack} options={optionsStack}>
        Теги технологий
      </FilterItem>
      <FilterItem type='item' iconName={ICON_NAMES.graduation} options={optionsGraduation}>
        Образование
      </FilterItem>
      <FilterItem
        type='item'
        iconName={ICON_NAMES.cash}
        typeDropdown={'radio'}
        options={optionsCash}
        optionsTwo={optionsCashMore}
      >
        Уровень дохода
      </FilterItem>
      <FilterItem type='item' iconName={ICON_NAMES.job} options={optionsJob}>
        Подработка
      </FilterItem>
      <FilterItem type='item' iconName={ICON_NAMES.other} options={optionsOther}>
        Другие параметры
      </FilterItem>
    </div>
  );
};
