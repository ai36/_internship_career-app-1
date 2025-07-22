import { createContext, useState } from 'react';

export const PageContext = createContext();

export const PageRouter = ({ children }) => {
  const [page, setPage] = useState('vacancies');
  const [params, setParams] = useState({});
  const registerParam = (name, param) => {
    setParams((prev) => ({ ...prev, [name]: { [param]: null } }));
  };

  const updateParam = (name, param) => {
    try {
      const [key] = Object.keys(params[name]);
      setParams((prev) => ({ ...prev, [name]: { [key]: `${param}` } }));
    } catch (error) {
      throw new Error(
        `No registered params for ${page}. Add params like this: <Route to="${page}/:param  component= {<${page.toUpperCase()}Page />}/>`,
      );
    }
  };

  const getParams = () => {
    return params[page];
  };

  const navigate = (to) => {
    const [name, param] = to.split('/');
    setPage(name);
    if (param) {
      updateParam(name, param);
    }
  };

  return (
    <PageContext.Provider
      value={{ page, navigate, params, registerParam, getParams }}
    >
      {children}
    </PageContext.Provider>
  );
};
