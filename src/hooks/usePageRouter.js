import { PageContext } from '@/contexts';
import { useContext } from 'react';

export const usePageRouter = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error(
      'usePageRouter must be used within an PageRouter. ' +
        'Wrap your component in <PageRouter> to fix this.',
    );
  }

  return context;
};
