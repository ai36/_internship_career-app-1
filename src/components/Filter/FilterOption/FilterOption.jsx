import styles from './FilterOption.module.css';
import { IconSvg } from '@/components';
import { useShallowBoundStore } from '@/stores';

export function FilterOption({ name, title, id, type }) {
  const [
    cities,
    setCities,
    employment,
    setEmployment,
    filter,
    setFilter,
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
    state.filter,
    state.setFilter,
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

  const handleToggleFilter = (filterName) => {
    const filtersMap = {
      location: { values: cities, setter: setCities },
      briefcase: { values: employment, setter: setEmployment },
      filter: { values: filter, setter: setFilter },
      publishDate: { values: publishDate, setter: setPublishDate },
      experience: { values: experience, setter: setExperience },
      workSchedule: { values: workSchedule, setter: setWorkSchedule },
      technologyTags: { values: technologyTags, setter: setTechnologyTags },
      graduation: { values: graduation, setter: setGraduation },
      incomeLevel: { values: incomeLevel, setter: setIncomeLevel },
      underworking: { values: underworking, setter: setUnderworking },
      moreFilters: { values: moreFilters, setter: setMoreFilters },
    };

    return () => {
      const { values, setter } = filtersMap[filterName];

      let newValues = { ...values };

      if (filterName === 'publishDate' || filterName === 'experience') {
        newValues = {};
      }

      if (filterName === 'incomeLevel') {
        let checkBoxIsIncome = newValues.hasOwnProperty('isIncome');
        if (id !== 'isIncome') newValues = {};
        if (checkBoxIsIncome) {
          newValues['isIncome'] = 'Указан доход';
        }
      }

      if (
        filterName !== 'publishDate' ||
        filterName !== 'experience' ||
        filterName !== 'incomeLevel'
      ) {
        if (newValues.hasOwnProperty(id)) {
          delete newValues[id];
        } else {
          newValues[id] = title;
        }
      }

      setter(newValues);
    };
  };

  const filters = {
    location: {
      checked: !!cities[id],
      onChange: handleToggleFilter('location'),
    },
    briefcase: {
      checked: !!employment[id],
      onChange: handleToggleFilter('briefcase'),
    },
    filter: {
      checked: !!filter[id],
      onChange: handleToggleFilter('filter'),
    },
    publishDate: {
      checked: !!publishDate[id],
      onChange: handleToggleFilter('publishDate'),
    },
    experience: {
      checked: !!experience[id],
      onChange: handleToggleFilter('experience'),
    },
    workSchedule: {
      checked: !!workSchedule[id],
      onChange: handleToggleFilter('workSchedule'),
    },
    technologyTags: {
      checked: !!technologyTags[id],
      onChange: handleToggleFilter('technologyTags'),
    },
    graduation: {
      checked: !!graduation[id],
      onChange: handleToggleFilter('graduation'),
    },
    incomeLevel: {
      checked: !!incomeLevel[id],
      onChange: handleToggleFilter('incomeLevel'),
    },
    underworking: {
      checked: !!underworking[id],
      onChange: handleToggleFilter('underworking'),
    },
    moreFilters: {
      checked: !!moreFilters[id],
      onChange: handleToggleFilter('moreFilters'),
    },
  };

  const { checked, onChange } = filters[name];

  return (
    <label className={styles.container}>
      <input
        type={type}
        name={title === 'Указан доход' ? name + 'checkbox' : name}
        id={id}
        value={id}
        className={styles.input}
        onChange={onChange}
        checked={checked}
      />
      {type === 'checkbox' && (
        <IconSvg id="checkbox-mark-svg" className={styles.checkbox} />
      )}
      <span className={styles.title}>{title}</span>
    </label>
  );
}
