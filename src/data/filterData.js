export const otherFiltersData = [
  {
    icon: "briefCase",
    title: "Тип занятости",
    id: "0",
    checkbox: [
      "Полная занятость",
      "Частичная занятость",
      "Стажировка",
      "Проектная работа",
    ],
  },
  {
    icon: "calendar",
    title: "Дата публикации вакансии",
    id: "1",
    radio: ["За все время", "За месяц", "За неделю", "За последние 3 дня", "За сутки"],
  },
  {
    icon: "star",
    title: "Опыт работы",
    id: "2",
    radio: [
      "Не имеет значения",
      "Нет опыта",
      "От 1 года до 3 лет",
      "От 3 до 6 лет",
      "Более 6 лет",
    ],
  },
  {
    icon: "clock",
    title: "График работы",
    id: "3",
    checkbox: [
      "Полный день",
      "Вахтовый метод",
      "Сменный график",
      "Гибкий график",
      "Удаленная работа",
    ],
  },
  {
    icon: "stack",
    title: "Теги технологий",
    id: "4",
    checkbox: [
      "jQuery",
      "JavaScript",
      "React",
      "Git",
      "Vue",
      "FlexBox",
      "HTML5",
      "CSS",
      "VS Code",
      "GitLab",
      "GitHub",
      "TypeScript",
      "Eslint",
    ],
  },
  {
    icon: "graduation",
    title: "Образование",
    id: "5",
    checkbox: ["Не требуется или не указано", "Среднее профессиональное", "Высшее"],
  },
  {
    icon: "salary",
    title: "Уровень дохода",
    id: "6",
    radio: [
      "Не имеет значения",
      "от 25 000 ₽",
      "от 50 000 ₽",
      "от 100 000 ₽",
      "от 150 000 ₽",
    ],
    checkbox: ["Указан доход"],
  },
  {
    icon: "tomeJob",
    title: "Подработка",
    id: "7",
    checkbox: [
      "Неполный день",
      "От 4 часов в день",
      "По вечерам",
      "По выходным",
      "Разовое задание",
    ],
  },
  {
    icon: "moreFilters",
    title: "Другие параметры",
    id: "8",
    checkbox: [
      "Доступные людям с инвалидностью",
      "Включая скрытые вакансии",
      "От аккредитованных ИТ компаний",
      "Без вакансий от кадровых агенств",
    ],
  },
];

export const briefCase = [
  "Полная занятость",
  "Частичная занятость",
  "Стажировка",
  "Проектная работа",
];

export const employmentTypesForQueryParams = {
  "Полная занятость": "employment=full",
  "Частичная занятость": "employment=part",
  "Проектная работа": "employment=project",
  Стажировка: "employment=probation",
};

export const dateOfPostingTypesForQueryParams = {
  "За все время": "",
  "За месяц": "&period=30",
  "За неделю": "&period=7",
  "За последние 3 дня": "&period=3",
  "За сутки": "&period=1",
};

export const workExperienceTypesForQueryParams = {
  "Не имеет значения": "",
  "Нет опыта": "experience=noExperience",
  "От 1 года до 3 лет": "experience=between1And3",
  "От 3 до 6 лет": "experience=between3And6",
  "Более 6 лет": "experience=moreThan6",
};

export const workScheduleTypesForQueryParams = {
  "Полный день": "schedule=fullDay",
  "Вахтовый метод": "schedule=flyInFlyOut",
  "Сменный график": "schedule=shift",
  "Гибкий график": "schedule=flexible",
  "Удаленная работа": "schedule=remote",
};

export const technologyTagsTypesForQueryParams = {
  jQuery: "jquery",
  JavaScript: "javascript",
  React: "react",
  Git: "git",
  Vue: "vue",
  FlexBox: "flexbox",
  HTML5: "html5",
  CSS: "css",
  "VS Code": "vscode",
  GitLab: "gitlab",
  GitHub: "github",
  TypeScript: "typescript",
  Eslint: "eslint",
};

export const educationTypesForQueryParams = {
  "Не требуется или не указано": "education=not_required_or_not_specified",
  "Среднее профессиональное": "education=special_secondary",
  Высшее: "education=higher",
};

export const incomeLevel1TypesForQueryParams = {
  "Не имеет значения": "",
  "от 25 000 ₽": "salary=25000",
  "от 50 000 ₽": "salary=50000",
  "от 100 000 ₽": "salary=100000",
  "от 150 000 ₽": "salary=150000",
};

export const incomeLevel2TypesForQueryParams = {
  "Указан доход": "only_with_salary=true",
};

export const partTimeJobsTypesForQueryParams = {
  "Неполный день": "part_time=employment_part",
  "От 4 часов в день": "part_time=from_four_to_six_hours_in_a_day",
  "По вечерам": "part_time=start_after_sixteen",
  "По выходным": "part_time=only_saturday_and_sunday",
  "Разовое задание": "part_time=employment_project",
};

export const otherParametersTypesForQueryParams = {
  "Доступные людям с инвалидностью": "label=accept_handicapped",
  "От аккредитованных ИТ компаний": "label=accredited_it",
  "Без вакансий от кадровых агенств": "label=not_from_agency",
};
