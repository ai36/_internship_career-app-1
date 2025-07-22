export const filterListData = [
  {
    type: 'input',
    name: 'location',
    title: 'Город',
    iconName: 'location-svg',
  },
  {
    type: 'checkbox',
    name: 'briefcase',
    title: 'Тип занятости',
    iconName: 'briefcase-svg',
    options: [
      {name: 'fullTimeEmployment', title: 'Полная занятость'},
      {name: 'partialEmployment', title: 'Частичная занятость'},
      {name: 'trainee', title: 'Стажировка'},
      {name: 'projectJob', title: 'Проектная работа'},
    ],
  },
  {
    type: 'dropDown',
    name: 'filter',
    title: 'Дополнительные фильтры',
    iconName: 'filter-solid-svg',
    options: [
      {
        name: 'publishDate',
        title: 'Дата публикации вакансии',
        iconName: 'calendar-svg',
        options: [
          {name: 'allTime', title: 'За все время', type: 'radio'},
          {name: 'perMonth', title: 'За месяц', type: 'radio'},
          {name: 'perWeek', title: 'За неделю', type: 'radio'},
          {name: 'perThreeDays', title: 'За последние 3 дня', type: 'radio'},
          {name: 'perDay', title: 'За сутки', type: 'radio'},
        ],
      },
      {
        name: 'experience',
        title: 'Опыт работы',
        iconName: 'experience-svg',
        options: [
          {name: 'doesNotMatter', title: 'Не имеет значения', type: 'radio'},
          {name: 'none', title: 'Нет опыта', type: 'radio'},
          {name: 'oneToThree', title: 'От 1 года до 3 лет', type: 'radio'},
          {name: 'threeToSix', title: 'От 3 до 6 лет', type: 'radio'},
          {name: 'sixMore', title: 'Более 6 лет', type: 'radio'},
        ],
      },
      {
        name: 'workSchedule',
        title: 'График работы',
        iconName: 'time-svg',
        options: [
          {name: 'fullDay', title: 'Полный день', type: 'checkbox'},
          {name: 'shiftMethod', title: 'Вахтовый метод', type: 'checkbox'},
          {name: 'shiftSchedule', title: 'Сменный график', type: 'checkbox'},
          {name: 'flexSchedule', title: 'Гибкий график', type: 'checkbox'},
          {name: 'remoteWork', title: 'Удаленная работа', type: 'checkbox'},
        ],
      },
      {
        name: 'technologyTags',
        title: 'Теги технологий',
        iconName: 'stack-svg',
        options: [
          {name: 'jQueryTag', title: 'jQuery', type: 'checkbox'},
          {name: 'JavaScriptTag', title: 'JavaScript', type: 'checkbox'},
          {name: 'CSS3Tag', title: 'CSS3', type: 'checkbox'},
          {name: 'ReactTag', title: 'React', type: 'checkbox'},
          {name: 'GitTag', title: 'Git', type: 'checkbox'},
          {name: 'VueTag', title: 'Vue', type: 'checkbox'},
          {name: 'FlexboxTag', title: 'Flexbox', type: 'checkbox'},
          {name: 'HTML5Tag', title: 'HTML5', type: 'checkbox'},
        ],
      },
      {
        name: 'graduation',
        title: 'Образование',
        iconName: 'graduation-svg',
        options: [
          {
            name: 'notNeedEducation',
            title: 'Не требуется или не указано',
            type: 'checkbox',
          },
          {
            name: 'middleEducation',
            title: 'Среднее профессиональное',
            type: 'checkbox',
          },
          {name: 'higherEducation', title: 'Высшее', type: 'checkbox'},
        ],
      },
      {
        name: 'incomeLevel',
        title: 'Уровень дохода',
        iconName: 'salary-svg',
        options: [
          {name: 'doesNotMatter', title: 'Не имеет значения', type: 'radio'},
          {name: '25More', title: 'от 25 000 ₽', type: 'radio'},
          {name: '50More', title: 'от 50 000 ₽', type: 'radio'},
          {name: '100More', title: 'от 100 000 ₽', type: 'radio'},
          {name: '150More', title: 'от 150 000 ₽', type: 'radio'},
          {name: 'isIncome', title: 'Указан доход', type: 'checkbox'},
        ],
      },
      {
        name: 'underworking',
        title: 'Подработка',
        iconName: 'underworking-svg',
        options: [
          {name: 'partTime', title: 'Неполный день', type: 'checkbox'},
          {name: '4More', title: 'От 4 часов в день', type: 'checkbox'},
          {name: 'evening', title: 'По вечерам', type: 'checkbox'},
          {name: 'weekends', title: 'По выходным', type: 'checkbox'},
          {name: 'oneTime', title: 'Разовое задание', type: 'checkbox'},
        ],
      },
      {
        name: 'moreFilters',
        title: 'Другие параметры',
        iconName: 'more-filters-svg',
        options: [
          {
            name: 'disabilitySupport',
            title: 'Доступные людям с инвалидностью',
            type: 'checkbox',
          },
          {
            name: 'includingHidden',
            title: 'Включая скрытые вакансии',
            type: 'checkbox',
          },
          {
            name: 'fromAccredited',
            title: 'От аккредитованных ИТ компаний',
            type: 'checkbox',
          },
          {
            name: 'withoutRecruitmentAgencies',
            title: 'Без вакансий от кадровых агенств',
            type: 'checkbox',
          },
        ],
      },
    ],
  },
];
