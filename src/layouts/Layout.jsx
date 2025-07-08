import { Header, Main, Footer } from '@/components';
import { PAGES } from '@/constants';
import { usePageStore } from '@/store';

export const Layout = () => {
  const currentPage = usePageStore((state) => state.currentPage);

  return (
    <>
      <Header />
      <div className='container'>
        {PAGES[currentPage]}
        <Footer />
      </div>
    </>
  );
};
