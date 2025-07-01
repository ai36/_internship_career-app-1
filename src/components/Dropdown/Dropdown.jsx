import styles from './dropdown.module.css';

export const Dropdown = ({ position, type, options, optionsTwo = null }) => {
  const { name, data } = options;
  return (
    <div className={styles['dropdownCheckbox']} style={{ position }}>
      {data.map(option => (
        <label
          key={option}
          className={`${styles['optionCheckbox']} ${type === 'radio' ? styles['radio'] : ''}`}
        >
          <input
            type={type}
            name={name}
            className={styles['input']}
            value={option}
          />
          {option}
        </label>
      ))}
      {optionsTwo &&
        optionsTwo.data.map((option, index) => (
          <label
            key={option}
            className={`${styles['optionCheckbox']} ${index === 0 ? styles['mt8'] : ''}`}
          >
            <input
              type={'radio'}
              name={optionsTwo.name}
              className={styles['input']}
              value={option}
            />
            {option}
          </label>
        ))}
    </div>
  );
};
