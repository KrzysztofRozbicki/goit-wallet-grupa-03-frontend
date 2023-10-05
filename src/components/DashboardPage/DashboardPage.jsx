// Podłączyć wszystkie komponenty podrzędne i zaimplementować logikę ich renderowania w zależności od rozdzielczości ekranu.
//Do tego celu nadaje się biblioteka react - media

// Napisać operację, która pobiera dane dotyczące transakcji

// Napisać operację, która pobiera stan balansu

// W DidMount komponentu wykonywać operacje z punktów 2 i 3 (pobranie danych transakcji i pobranie danych balansu)

//W skrócie będzie to komponent w którym będą komponenty: Balance i Currency oraz Navigation oraz prawdopodobnie DiagramTab

import { Outlet } from 'react-router-dom';

import css from './DashboardPage.module.css';
import CurrencyTable from '../Currency/Currency';
import Balance from '../Balance/Balance';

export const DashboardPage = () => {
  return (
    <>

      <CurrencyTable />
      <Balance />
    </>
  );
};

export default DashboardPage;
