import { useState, useRef, useEffect } from 'react';
import styles from './FilterItem.module.css';
import { ICON_NAMES } from '@constants';
import { Icon, Dropdown, DropdownFilters } from '@components';

export const FilterItem = ({
  type,
  iconName,
  children,
  typeDropdown = 'checkbox',
  options = {
    name: 'work',
    data: ['Полная занятость', 'Частичная занятость', 'Стажировка', 'Проектная работа'],
  },
  optionsTwo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const position = type === 'item' ? 'static' : 'absolute';

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (type === 'input') {
    return (
      <div ref={ref} className={styles['wrapper']}>
        <form className={styles['form']}>
          <Icon name={iconName} className={styles['img']} />
          <input type='text' placeholder='Город' className={styles['input']} />
          <button type='reset' className={styles.crossButton}>
            <Icon name='cross' className={styles.crossIcon} />
          </button>
        </form>
      </div>
    );
  }

  if (type === 'dropCheckbox') {
    return (
      <div ref={ref} className={styles['wrapper']}>
        <button
          type='button'
          className={`${styles['btn']} ${isOpen ? styles['open'] : ''}`}
          onClick={toggleDropdown}
        >
          <div className={styles['img-and-text']}>
            <Icon name={iconName} className={styles['img']} />
            <p className={`${styles['text']} ${isOpen ? styles['textBold'] : ''}`}>{children}</p>
          </div>
          <Icon
            name={ICON_NAMES.arrowToRight}
            className={`${styles['arrow-img']} ${isOpen ? styles['rotate-90'] : ''}`}
            color={isOpen ? '#202020' : '#747474'}
          />
        </button>
        {isOpen && <Dropdown position={position} type={typeDropdown} options={options} />}
      </div>
    );
  }

  if (type === 'dropdown') {
    return (
      <div ref={ref} className={styles['wrapper']}>
        <button
          type='button'
          className={`${styles['btn']} ${isOpen ? styles['open'] : ''}`}
          onClick={toggleDropdown}
        >
          <div className={styles['img-and-text']}>
            <Icon name={iconName} className={styles['img']} />
            <p className={`${styles['text']} ${isOpen ? styles['textBold'] : ''}`}>{children}</p>
          </div>
          <Icon
            name={ICON_NAMES.arrowToRight}
            className={`${styles['arrow-img']} ${isOpen ? styles['rotate-90'] : ''}`}
            color={isOpen ? '#202020' : '#747474'}
          />
        </button>
        {isOpen && <DropdownFilters />}
      </div>
    );
  }

  if (type === 'item') {
    return (
      <div className={styles['wrapper']}>
        <button
          type='button'
          className={`${styles['btn']} ${styles['btnItem']} ${styles['noBorder']} ${isOpen ? styles['openTwo'] : ''}`}
          onClick={toggleDropdown}
        >
          <div className={styles['img-and-text']}>
            <Icon name={iconName} className={styles['img']} />
            <p className={`${styles['text']} ${isOpen ? styles['textBold'] : ''}`}>{children}</p>
          </div>
          <Icon
            name={ICON_NAMES.arrowToRight}
            className={`${styles['arrow-img']} ${isOpen ? styles['rotate-90'] : ''}`}
            color={isOpen ? '#202020' : '#747474'}
          />
        </button>
        {isOpen && (
          <Dropdown
            position={position}
            type={typeDropdown}
            options={options}
            optionsTwo={optionsTwo}
          />
        )}
      </div>
    );
  }
};
