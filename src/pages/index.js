import Billing from '../components/Billing';
import HowItWorks from '../components/HowItWorks';
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';
import Signup from '../components/Signup';
import Story from '../components/Story';
import MainLayout from '../layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <Story />
      <Billing />
      <HowItWorks />
      <Partners />
      <Reviews />
      <Signup />
    </MainLayout>
  );
};

export default HomePage;
