// Podłączyć wszystkie komponenty podrzędne i zaimplementować logikę ich renderowania w zależności od rozdzielczości ekranu.
//Do tego celu nadaje się biblioteka react - media

// Napisać operację, która pobiera dane dotyczące transakcji

// Napisać operację, która pobiera stan balansu

// W DidMount komponentu wykonywać operacje z punktów 2 i 3 (pobranie danych transakcji i pobranie danych balansu)

//W skrócie będzie to komponent w którym będą komponenty: Balance i Currency oraz Navigation oraz prawdopodobnie DiagramTab

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { fetchTransactions } from './../../redux/finance/operations';

import css from './DashboardPage.module.css';

import Navigation from '../Navigation/Navigation';
import CurrencyTable from '../Currency/Currency';
import Balance from '../Balance/Balance';

const Home = ({ isDesktop }) => {
  return (
    <div className={css.homeContainer}>
      <Balance />
      {isDesktop && <CurrencyTable />}
    </div>
  );
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
