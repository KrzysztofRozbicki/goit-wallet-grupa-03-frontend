import DashboardPage from '../DashboardPage/DashboardPage';
import Header from '../Header/Header';

import { Outlet } from 'react-router-dom';

export const Container = () => {
  return (
    <>
      <Header />
      <DashboardPage />
      <Outlet />
    </>
  );
};

export default Container;
