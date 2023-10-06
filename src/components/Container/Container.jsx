import DashboardPage from '../DashboardPage/DashboardPage';
import Header from '../Header/Header';

import { Outlet } from 'react-router-dom';

import css from './Container.module.css';

export const Container = () => {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <DashboardPage />
        <Outlet />
      </div>
    </>
  );
};

export default Container;
