import styles from './VacancyPage.module.css';
import { usePageRouter } from '@/hooks';
import { Panel } from '@/components';
import { SingleVacancy } from '@/components/SingleVacancy/SingleVacancy';
import { vacancyService } from '@/services';
import { useShallowBoundStore } from '@/stores';
import { useEffect, useRef, useState } from 'react';
import { SimilarVacancies } from '@/components/SimilarVacancies/SimilarVacancies';

export const VacancyPage = () => {
  const { getParams } = usePageRouter();
  const { vacancyId } = getParams();

  const shouldScrollToTop = useRef(false);

  const { isLoading, vacancy, similar, similarPage, similarPages } =
    useShallowBoundStore((state) => ({
      isLoading: state.isLoading,
      vacancy: state.vacancy,
      similar: state.similar,
      similarPage: state.similarPage,
      similarPages: state.similarPages,
    }));

  const [isHidden, setHidden] = useState(() =>
    vacancyService.checkIsHidden(vacancyId),
  );

  const areMorePages = similarPage + 1 < similarPages;

  const handleHide = () => {
    setHidden((prev) => !prev);
    vacancyService.hideVacancy(vacancyId);
  };

  const handleLoadMore = () => {
    shouldScrollToTop.current = false;
    if (areMorePages) {
      vacancyService.fetchSimilarVacancies(vacancyId);
    }
  };

  useEffect(() => {
    shouldScrollToTop.current = true;
    vacancyService.fetchVacancyPageData(vacancyId);
  }, [vacancyId]);

  useEffect(() => {
    if (!isLoading && shouldScrollToTop.current) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [isLoading]);

  return (
    <>
      <Panel className={styles.section} />
      <SingleVacancy
        className={styles.section}
        vacancy={vacancy}
        isLoading={isLoading}
        isHidden={isHidden}
        onHide={handleHide}
      />
      {similar.length && (
        <SimilarVacancies
          isLoading={isLoading}
          vacancies={similar}
          title={'Похожие вакансии'}
          className={styles.section}
          onLoadMore={handleLoadMore}
          showButton={!isLoading && areMorePages}
        />
      )}
    </>
  );
};
