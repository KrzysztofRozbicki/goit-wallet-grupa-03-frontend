// Podłączyć wszystkie komponenty podrzędne i zaimplementować logikę ich renderowania w zależności od rozdzielczości ekranu.
//Do tego celu nadaje się biblioteka react - media

// Napisać operację, która pobiera dane dotyczące transakcji

// Napisać operację, która pobiera stan balansu

// W DidMount komponentu wykonywać operacje z punktów 2 i 3 (pobranie danych transakcji i pobranie danych balansu)

//W skrócie będzie to komponent w którym będą komponenty: Balance i Currency oraz Navigation oraz prawdopodobnie DiagramTab


import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import CurrencyTable from '../Currency/Currency';
import Balance from '../Balance/Balance';

export const DashboardPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Funkcja do obsługi zmiany rozdzielczości ekranu
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Dodaj nasłuchiwanie zmiany rozdzielczości ekranu
    window.addEventListener('resize', handleResize);

    // Warto również usunąć nasłuchiwanie po opuszczeniu komponentu
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDesktop = windowWidth > 768; // Ustal, kiedy wyświetlić CurrencyTable

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home isDesktop={isDesktop} />} />
      </Routes>
    </>
  );
};

const Home = ({ isDesktop }) => {
  return (
    <div>
      <Balance />
      {isDesktop && <CurrencyTable />} {/* Wyświetl tylko na desktopie */}
    </div>
  );
};

export default DashboardPage;



