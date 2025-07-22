import { IconSvg, Counter, FilterOption } from '@/components';
import styles from './FilterLocation.module.css';
import { useState, useRef, useEffect } from 'react';
import { AREAS } from '@/constants/areas';
import { filterAreasByPrefix, mappedAreas } from '@/utils';
import { useClickOutside } from '@/hooks';
import { useShallowBoundStore } from '@/stores';

export function FilterLocation({ filter }) {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredAreasList, setFilteredAreasList] = useState({});
  const [inputValue, setInputValue] = useState('');

  const [cities] = useShallowBoundStore((state) => [state.cities]);

  const formRef = useRef(null);
  useClickOutside(formRef, () => setShowFilters(false));

  useEffect(() => {
    const inputValueLength = inputValue.length;
    console.log(cities);
    if (inputValueLength > 0 && inputValueLength < 3) {
      setFilteredAreasList(cities);
    }
    if (inputValueLength >= 3) {
      setFilteredAreasList(filterAreasByPrefix(mappedAreas, inputValue));
    }
    setShowFilters(
      Boolean(inputValueLength) && Boolean(Object.keys(cities).length),
    );
  }, [inputValue]);

  useEffect(() => {
    if (Object.keys(filteredAreasList).length) {
      setShowFilters(true);
    } else {
      setShowFilters(false);
    }
  }, [filteredAreasList, cities]);

  const handleInputClean = () => {
    setInputValue('');
    setFilteredAreasList({});
  };

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className={styles.form}
      ref={formRef}
    >
      <IconSvg id={filter.iconName} className={styles.icons} />
      <input
        placeholder={filter.title}
        className={`${styles.input} ${showFilters ? styles.showFilters : ''}`}
        type="text"
        id={filter.name}
        autoComplete="off"
        value={inputValue}
        onFocus={() =>
          setShowFilters(Boolean(Object.keys(filteredAreasList).length))
        }
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        type="reset"
        className={styles.crossButton}
        onClick={handleInputClean}
      >
        <IconSvg id="cross-svg" className={styles.crossIcon} />
      </button>

      {Boolean(Object.keys(cities).length) && (
        <Counter number={Object.keys(cities).length} />
      )}

      {showFilters && (
        <ul className={styles.optionsList} tabIndex={-1}>
          {Object.keys(filteredAreasList).map((element) => (
            <li
              className={styles.optionsItem}
              key={`${filter.name}-${element}`}
            >
              <FilterOption
                name={filter.name}
                id={element}
                title={filteredAreasList[element]}
                type="checkbox"
              />
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
