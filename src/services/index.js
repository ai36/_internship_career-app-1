import { VacancyService } from '@/services/vacancy/vacancy.service';
import { api } from './api/api';
import { useBoundStore } from '@/stores';

export const vacancyService = new VacancyService(useBoundStore, api);
