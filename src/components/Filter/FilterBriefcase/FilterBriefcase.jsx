import styles from './FilterBriefcase.module.css';
import { clsx } from '@/utils';
import { useRef, useState } from 'react';
import { useClickOutside } from '@/hooks';
import { FilterOption, IconSvg, Counter } from '@/components';
import { useShallowBoundStore } from '@/stores';

export function FilterBriefcase({ filter }) {
  const [employment] = useShallowBoundStore((state) => [state.employment]);

  const [showFilters, setShowFilters] = useState(false);

  const onClick = () => {
    setShowFilters(!showFilters);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => setShowFilters(false));

  return (
    <div className={styles.container} ref={ref}>
      <button
        className={clsx(styles.button, showFilters && styles.activeButton)}
        onClick={onClick}
      >
        <IconSvg id={filter.iconName} className={styles.icons} />
        {filter.title}

        {Boolean(Object.keys(employment).length) && (
          <Counter number={Object.keys(employment).length} />
        )}

        <IconSvg
          id="chevron-down-svg"
          className={clsx(styles.chevron, showFilters && styles.activeChevron)}
        />
      </button>

      {showFilters && (
        <ul className={styles.optionsList}>
          {filter.options.map((element) => (
            <li key={element.name}>
              <FilterOption
                name={filter.name}
                id={element.name}
                title={element.title}
                type="checkbox"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
