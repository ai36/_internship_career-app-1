import { Footer, Header, Main } from '@/components';

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
