import { formatDate } from "./format-date";
import { formatNumber } from "./format-number";

const currency = {
  RUR: '₽',
  EUR: '€',
  USD: '$'
};

export const parseVacancyDetail = (el) => {
  let logoEmployer = '';

  if(el.employer.logo_urls) {
    logoEmployer = el.employer.logo_urls["240"]?el.employer.logo_urls["240"]:el.employer.logo_urls["original"];
  }

  return {
    id: el.id,
    name: el.name,
    hidden: false,
    salaryFormat: parseVacancySalary(el),
    experience: el.experience.name ? el.experience.name.toLowerCase(): '',
    schedule: el.schedule.name ? el.schedule.name: '',
    employment: el.employment.name ? el.employment.name: '',
    description: el.description,
    key_skills: el.key_skills,
    published_at: formatDate(el.published_at),
    city: el.area.name?el.area.name: '',
    employer: el.employer ? {
      name: el.employer.name? el.employer.name: '',
      logo: logoEmployer
    } : null,
    address: el.address && el.address.raw ? el.address.raw : ''
  };
}

export const clearItemsFromBlackList = (arr=[], blackList=[]) => {
  return arr.map(el=>{
    const fouded = blackList.find(elBlack => elBlack === el.id);
    if(fouded) {
      return {...el, hidden: true};
    } else {
      return el;
    }
  });;
}

export const parseVacancySalary = (el) => {
  let salary = '';
  if(el.salary) {
    if(el.salary.from && el.salary.to) {

      if(el.salary.from !== el.salary.to) {
        salary = [formatNumber(el.salary.from), `${formatNumber(el.salary.to)}`].join(' - ');
      } else {
        salary = formatNumber(el.salary.from);
      }
      
    } else if(el.salary.from) {
      salary = `от ${formatNumber(el.salary.from)}`;
    } else if(el.salary.to) {
      salary = `до ${formatNumber(el.salary.to)}`;
    }
  }

  if(salary.length) {
    salary += currency[el.salary.currency] ? ` ${currency[el.salary.currency]}` : el.salary.currency;
  } else {
    salary = 'Доход не указан';
  }

  return salary;
}

export const parseResultVacancy = (arr=[]) => {
  //arr.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

  return arr.map((el)=>{
  
    return {
      ...el,
      salaryFormat: parseVacancySalary(el)
    };
  });
};

export const schemeResultVacancyItem = (el) => {
  return {
    id: el.id,
    hidden: false,
    name: el.name,
    city: el.address? el.address.city : el.area.name,
    salary: el.salary? el.salary : null,
    published_at: el.published_at,
    experience: el.experience.name ? el.experience.name : '',
    company: el.employer? el.employer.name: '',
    url: el.alternate_url,
    employerUrl: el.employer? el.employer.alternate_url: ''
  };
};

export const schemeResultVacancy = (arr=[]) => {
  return arr.map((el)=>{
    return schemeResultVacancyItem(el);
  });
};

export const groupResultVacancyByDate = (arr=[]) => {
  const groups = arr.reduce((groups, el) => {
    const date = el.published_at.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(el);
    return groups;
  }, {});

  
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      items: groups[date]
    };
  });

  return groupArrays;
}