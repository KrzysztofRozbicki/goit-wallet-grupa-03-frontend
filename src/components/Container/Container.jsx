import DashboardPage from '../DashboardPage/DashboardPage';
import Header from '../Header/Header';

import { Outlet } from 'react-router-dom';

import css from './Container.module.css';

export const Container = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <div className={css.wrapper}>
          <div className={css.containWrapper}>
            <div className={css.dashBoardWrapper}>
              <DashboardPage />
            </div>
            <div className={css.outletWrapper}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
