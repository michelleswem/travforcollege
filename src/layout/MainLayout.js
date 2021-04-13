import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/sass/main.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
