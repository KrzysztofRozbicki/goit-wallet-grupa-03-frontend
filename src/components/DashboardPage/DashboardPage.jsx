import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchTransactions } from './../../redux/finance/operations';
import Navigation from '../Navigation/Navigation';
import CurrencyTable from '../Currency/Currency';
import Balance from '../Balance/Balance';

import css from './DashboardPage.module.css';

const Home = ({ isDesktop }) => {
  return (
    <div className={css.homeContainer}>
      <Balance />
      {isDesktop && <CurrencyTable />}
    </div>
  );
};

Home.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(fetchTransactions());

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDesktop = windowWidth > 767;

  return (
    <div className={css.dashboardContainer}>
      <Navigation />

      <Routes>
        <Route path="/home" element={<Home isDesktop={isDesktop} />} />
        {isDesktop && <Route path="/diagram" element={<Home isDesktop={isDesktop} />} />}
        {isDesktop && <Route path="/" element={<Home isDesktop={isDesktop} />} />}
      </Routes>
    </div>
  );
};

export default DashboardPage;
