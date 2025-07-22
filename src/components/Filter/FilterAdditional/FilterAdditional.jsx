import styles from './FilterAdditional.module.css';
import { Counter, FilterExtra, IconSvg } from '@/components';
import { clsx } from '@/utils';
import { useClickOutside } from '@/hooks';
import { useRef, useState } from 'react';
import { useShallowBoundStore } from '@/stores';

export function FilterAdditional({ filter }) {
  const [
    workSchedule,
    technologyTags,
    graduation,
    incomeLevel,
    underworking,
    moreFilters,
  ] = useShallowBoundStore((state) => [
    state.workSchedule,
    state.technologyTags,
    state.graduation,
    state.incomeLevel,
    state.underworking,
    state.moreFilters,
  ]);

  const [showFilters, setShowFilters] = useState(false);

  const onClick = () => {
    setShowFilters(!showFilters);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => setShowFilters(false));

  const countFilterAdditional =
    Object.keys(workSchedule).length +
      Object.keys(technologyTags).length +
      Object.keys(graduation).length +
      (Object.keys(incomeLevel).length - 1) +
      Object.keys(underworking).length +
      Object.keys(moreFilters).length || 0;

  return (
    <div className={styles.container} ref={ref}>
      <button
        className={clsx(styles.button, showFilters && styles.activeButton)}
        onClick={onClick}
      >
        <IconSvg id={filter.iconName} className={styles.icons} />

        <span className={styles.title}>{filter.title}</span>

        {Boolean(countFilterAdditional) && (
          <Counter number={countFilterAdditional} />
        )}

        <IconSvg
          id="chevron-down-svg"
          className={clsx(styles.chevron, showFilters && styles.activeChevron)}
        />
      </button>
      {showFilters && (
        <ul className={styles.optionsList}>
          {filter.options.map((additionalFilters) => (
            <li key={additionalFilters.name} className={styles.option}>
              <FilterExtra filters={additionalFilters} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
