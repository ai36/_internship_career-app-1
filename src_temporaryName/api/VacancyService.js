export class VacancyService {
  static async getById (id) {
    const response = await fetch(`https://api.hh.ru/vacancies/${id}`);
    if (!response.ok) throw new Error('Что-то пошло не так. Попробуйте позже');
    const result = await response.json();
    return result;
  }
  static async getRelatedById (id, page=0, limit=6) {
    const response = await fetch(`https://api.hh.ru/vacancies/${id}/related_vacancies?order_by=publication_time&per_page=${limit}&page=${page}`);

    if (!response.ok) throw new Error('Что-то пошло не так. Попробуйте позже');
    const result = await response.json();
    return result;
  }
}