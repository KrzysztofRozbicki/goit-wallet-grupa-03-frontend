import Header from '../Header/Header';

import { Outlet } from 'react-router-dom';

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DashboardPage;
