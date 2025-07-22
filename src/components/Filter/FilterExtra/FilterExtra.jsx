import styles from './FilterExtra.module.css';
import { clsx } from '@/utils';
import { useState } from 'react';
import { Counter, FilterOption, IconSvg } from '@/components';
import { useShallowBoundStore } from '@/stores';

export function FilterExtra({ filters }) {
  const selected = useShallowBoundStore((state) => state[filters.name]) || {};
  const [showFilters, setShowFilters] = useState(false);

  const checkboxOptions = filters.options.filter(
    (opt) => opt.type === 'checkbox',
  );

  const checkedCount = checkboxOptions.filter(
    (opt) => selected[opt.name],
  ).length;

  const showCounter = checkboxOptions.length > 0 && checkedCount > 0;

  const onClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={styles.container}>
      <button
        className={clsx(styles.button, showFilters && styles.activeButton)}
        onClick={onClick}
      >
        <IconSvg id={filters.iconName} className={styles.icons} />
        <span className={styles.title}>{filters.title}</span>

        {showCounter && <Counter number={checkedCount} />}

        <IconSvg
          id="chevron-down-svg"
          className={clsx(styles.chevron, showFilters && styles.activeChevron)}
        />
      </button>
      {showFilters && (
        <ul className={styles.optionsList}>
          {filters.options.map((element) => (
            <li key={element.name} className={styles.option}>
              <FilterOption
                name={filters.name}
                id={element.name}
                title={element.title}
                type={element.type}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
