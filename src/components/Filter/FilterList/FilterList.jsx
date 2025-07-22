import { Container, FilterItem, TextButton } from '@/components';
import styles from './FilterList.module.css';
import { filterListData } from '@/mockData';
import { useShallowBoundStore } from '@/stores';

export function FilterList() {
  const [
    cities,
    setCities,
    employment,
    setEmployment,
    publishDate,
    setPublishDate,
    experience,
    setExperience,
    workSchedule,
    setWorkSchedule,
    technologyTags,
    setTechnologyTags,
    graduation,
    setGraduation,
    incomeLevel,
    setIncomeLevel,
    underworking,
    setUnderworking,
    moreFilters,
    setMoreFilters,
  ] = useShallowBoundStore((state) => [
    state.cities,
    state.setCities,
    state.employment,
    state.setEmployment,
    state.publishDate,
    state.setPublishDate,
    state.experience,
    state.setExperience,
    state.workSchedule,
    state.setWorkSchedule,
    state.technologyTags,
    state.setTechnologyTags,
    state.graduation,
    state.setGraduation,
    state.incomeLevel,
    state.setIncomeLevel,
    state.underworking,
    state.setUnderworking,
    state.moreFilters,
    state.setMoreFilters,
  ]);

  const countFilters =
    Object.keys(cities).length +
      Object.keys(employment).length +
      (Object.keys(publishDate).length - 1) +
      (Object.keys(experience).length - 1) +
      Object.keys(workSchedule).length +
      Object.keys(technologyTags).length +
      Object.keys(graduation).length +
      (Object.keys(incomeLevel).length - 1) +
      Object.keys(underworking).length +
      Object.keys(moreFilters).length || 0;

  const handleFilterClean = () => {
    setCities({});
    setEmployment({});
    setPublishDate({ allTime: 'За все время' });
    setExperience({ doesNotMatter: 'Не имеет значения' });
    setWorkSchedule({});
    setTechnologyTags({});
    setGraduation({});
    setIncomeLevel({ doesNotMatter: 'Не имеет значения' });
    setUnderworking({});
    setMoreFilters({});
  };

  const isNotDefaultFilters = !(
    'allTime' in publishDate &&
    'doesNotMatter' in experience &&
    'doesNotMatter' in incomeLevel
  );

  return (
    <section className={styles.filter}>
      <Container>
        <ul className={styles.filterList}>
          {filterListData.map((filter) => (
            <li key={filter.name}>
              <FilterItem filter={filter} />
            </li>
          ))}
        </ul>
        {(countFilters > 0 || isNotDefaultFilters) && (
          <TextButton
            className={styles.resetButton}
            onClick={handleFilterClean}
          >
            Сбросить все фильтры
          </TextButton>
        )}
      </Container>
    </section>
  );
}
