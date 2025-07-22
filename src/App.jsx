import { useEffect } from 'react';
import { vacancyService } from '@/services';
import { AppLayout } from '@/layouts';
import { Vacancies, VacancyPage } from '@/pages';
import { PageRouter } from '@/contexts';
import { Route } from '@/components';

const App = () => {
  useEffect(() => {
    vacancyService.fetch();
  }, []);

  return (
    <PageRouter>
      <AppLayout>
        <Route to={'vacancies'} component={<Vacancies />} />
        <Route to={'vacancy/:vacancyId'} component={<VacancyPage />} />
      </AppLayout>
    </PageRouter>
  );
};

export default App;
