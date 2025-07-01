import { Header, Main, Footer } from '@components';

export const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Main />
        <Footer />
      </div>
    </>
  );
};
