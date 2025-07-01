import { ICON_NAMES } from '@constants';
import { FilterItem } from '@components';
import styles from './Filterlist.module.css';

export const FilterList = () => {
  return (
    <ul className={styles['list']}>
      <li className={styles['element']}>
        <FilterItem type='input' iconName={ICON_NAMES.location}>
          Город
        </FilterItem>
      </li>
      <FilterItem type='dropCheckbox' iconName={ICON_NAMES.briefcase}>
        Тип занятости
      </FilterItem>
      <FilterItem type='dropdown' iconName={ICON_NAMES.filter}>
        Дополнительные фильтры
      </FilterItem>
    </ul>
  );
};
