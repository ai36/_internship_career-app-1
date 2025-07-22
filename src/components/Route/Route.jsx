import { usePageRouter } from '@/hooks';
import { useEffect, useState } from 'react';

export const Route = ({ to, component }) => {
  const { page, registerParam } = usePageRouter();
  const [name, setName] = useState();

  useEffect(() => {
    const parseParams = (to) => {
      const [name, params] = to.split('/:');
      setName(name);
      if (params) {
        registerParam(name, params);
      }
    };

    parseParams(to);
  }, [to]);

  return <>{name === page ? component : null}</>;
};
