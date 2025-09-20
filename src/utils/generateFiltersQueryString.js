import {
  employmentTypesForQueryParams,
  dateOfPostingTypesForQueryParams,
  workExperienceTypesForQueryParams,
  workScheduleTypesForQueryParams,
  technologyTagsTypesForQueryParams,
  educationTypesForQueryParams,
  incomeLevel1TypesForQueryParams,
  incomeLevel2TypesForQueryParams,
  partTimeJobsTypesForQueryParams,
  otherParametersTypesForQueryParams,
} from '@data/filterData'; 
import { constructQueryString } from './constructQueryString';
import { findCityByName } from './findCityByName';
import { searchData } from '@data/searchData';

export const generateFiltersQueryString = (filters) => {
  const employmentParams = constructQueryString(filters.employmentTypes.filters, employmentTypesForQueryParams);
  const queryStringEmploymentsParams = employmentParams ? `&${employmentParams}` : '';

  const dateOfPostingParams = dateOfPostingTypesForQueryParams[filters.dateOfPosting.selected];

  const workExperienceParams = workExperienceTypesForQueryParams[filters.workExperience.selected] ? `&${workExperienceTypesForQueryParams[filters.workExperience.selected]}` : '';

  const scheduleParams = constructQueryString(filters.workSchedule.filters, workScheduleTypesForQueryParams);
  const queryStringScheduleParams = scheduleParams ? `&${scheduleParams}` : '';

  const technologyTagsParams = constructQueryString(filters.technologyTags.filters, technologyTagsTypesForQueryParams, true);
  const queryStringTechnologyTagsParams = technologyTagsParams ? `+${technologyTagsParams}` : '';

  const educationParams = constructQueryString(filters.education.filters, educationTypesForQueryParams);
  const queryStringEducationParams = educationParams ? `&${educationParams}` : '';

  const incomeLevel1Params = incomeLevel1TypesForQueryParams[filters.incomeLevel1.selected] ? `&${incomeLevel1TypesForQueryParams[filters.incomeLevel1.selected]}` : '';

  const incomeLevel2Params = constructQueryString(filters.incomeLevel2.filters, incomeLevel2TypesForQueryParams);
  const queryStringIncomeLevel2Params = incomeLevel2Params ? `&${incomeLevel2Params}` : '';

  const partTimeJobsParams = constructQueryString(filters.partTimeJobs.filters, partTimeJobsTypesForQueryParams);
  const queryStringPartTimeJobsParams = partTimeJobsParams ? `&${partTimeJobsParams}` : '';

  const otherParametersParams = constructQueryString(filters.otherParameters.filters, otherParametersTypesForQueryParams);
  const queryStringOtherParametersParams = otherParametersParams ? `&${otherParametersParams}` : '';

  const cityForOne = `&area=${findCityByName(searchData, filters.inputParameter.filters[0])?.id}`;
  const cityForMany = `&area=${filters.inputParameter.filters.map((cityName) => findCityByName(searchData, cityName)?.id).join('&area=')}`;
  const queryStringInputParameterParams = filters.inputParameter.filters[0] === undefined ? '' : filters.inputParameter.filters.length === 1 ? cityForOne : cityForMany;

  return (
    queryStringTechnologyTagsParams +
    queryStringEmploymentsParams +
    dateOfPostingParams +
    workExperienceParams +
    queryStringScheduleParams +
    queryStringEducationParams +
    incomeLevel1Params +
    queryStringIncomeLevel2Params +
    queryStringPartTimeJobsParams +
    queryStringOtherParametersParams +
    queryStringInputParameterParams
  );
};
