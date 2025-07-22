import { Container, Pagination, VacancyBlock } from '@/components';
import { useShallowBoundStore } from '@/stores';
import styles from './VacancyList.module.css';
import { vacancyService } from '@/services';
import { useEffect, useState } from 'react';

export function VacancyList() {
  const {
    isLoading,
    error,
    pages,
    page,
    setPage,
    hiddenVacancies,
    cities,
    employment,
    publishDate,
    experience,
    workSchedule,
    technologyTags,
    graduation,
    incomeLevel,
    underworking,
    moreFilters,
  } = useShallowBoundStore((state) => ({
    isLoading: state.isLoading,
    error: state.error,
    page: state.page,
    pages: state.pages,
    params: state.params,
    setPage: state.setPage,
    hiddenVacancies: state.hiddenVacancies,
    cities: state.cities,
    employment: state.employment,
    publishDate: state.publishDate,
    experience: state.experience,
    workSchedule: state.workSchedule,
    technologyTags: state.technologyTags,
    graduation: state.graduation,
    incomeLevel: state.incomeLevel,
    underworking: state.underworking,
    moreFilters: state.moreFilters,
  }));

  const [vacancies, setVacancies] = useState([]);

  const handleSetPage = (page) => {
    setPage(page - 1);
    vacancyService.fetch();
  };

  useEffect(() => {
    vacancyService.fetch();
  }, [
    cities,
    employment,
    publishDate,
    experience,
    workSchedule,
    technologyTags,
    graduation,
    incomeLevel,
    underworking,
    moreFilters,
  ]);

  useEffect(() => {
    if (!isLoading) {
      const grouped = vacancyService.getGroupedByDay();
      setVacancies(grouped);
    }
  }, [hiddenVacancies, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isLoading]);

  if (error) return <p>{error}</p>;
  if (!isLoading && vacancies.length === 0) {
    return (
      <Container>
        <span className={styles.empty}>
          Не удалось найти вакансии с выбранными параметрами.
          <br />
          Попробуйте другие.
        </span>
      </Container>
    );
  }

  return (
    <section className={styles.vacancyList}>
      {isLoading ? (
        <Container>
          <VacancyBlock isLoading={isLoading} />
        </Container>
      ) : (
        vacancies.map((block) => (
          <Container key={block.title}>
            <VacancyBlock
              isLoading={isLoading}
              vacancies={block.list}
              title={block.title}
            />
          </Container>
        ))
      )}

      <Pagination
        currentPage={page + 1}
        setCurrentPage={handleSetPage}
        totalPages={pages}
        show={!isLoading && pages > 1}
      />
    </section>
  );
}
