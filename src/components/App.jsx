import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalAddTransactionOpen } from '../redux/global/selectors';

import {
  selectIsModalAddTransactionOpen,
  selectIsModalLogoutOpen,
  selectIsModalEditTransactionOpen,
} from '../redux/global/selectors';


import '../stylesheet/fonts.css';

import Loader from './Loader/Loader';
import Header from './Header/Header';
import DashboardPage from './DashboardPage/DashboardPage';
import Balance from './Balance/Balance';
import Chart from './Chart/Chart';
import DiagramTab from './DiagramTab/DiagramTab';
import HomeTab from './HomeTab/HomeTab';
import ButtonAddTransactions from './ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransaction from './ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from './ModalEditTransaction/ModalEditTransaction';
import TestComponentRedux from './TestComponentRedux/TestComponentRedux';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import CurrencyTable from './Currency/Currency';
import ModalLogout from './ModalLogout/ModalLogout';
import Navigation from './Navigation/Navigation';
import Table from './Table/Table';
import { openModalLogout, openModalEditTransaction } from '../redux/global/globalSlice';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: 'goit-wallet-grupa-03-frontend/login',
    element: <LoginPage />,
  },
  {
    path: 'goit-wallet-grupa-03-frontend/register',
    element: <RegistrationPage />,
  },
  {
    path: 'goit-wallet-grupa-03-frontend/',
    children: [
      {
        path: '',
        element: <HomeTab />,
      },
      {
        path: 'chart',
        element: <Chart />,
      },
      {
        path: 'diagram',
        element: <DiagramTab />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'balance',
        element: <Balance />,
      },
      {
        path: 'currency',
        element: <CurrencyTable />,
      },
      {
        path: 'header',
        element: <Header />,
      },
      {
        path: 'loader',
        element: <Loader />,
      },
      {
        path: 'loader',
        element: <Loader />,
      },
      {
        path: 'modalAddTransaction',
        element: <ModalAddTransaction />,
      },
      {
        path: 'modalLogout',
        element: <ModalLogout />,
      },
      {
        path: 'navigation',
        element: <Navigation />,
      },
      {
        path: 'Table',
        element: <Table />,
      },
    ],
  },
]);

const App = () => {
  const isModalAddTransactionOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditTransactionOpen = useSelector(selectIsModalEditTransactionOpen);
  console.log('isModalOpen:', isModalAddTransactionOpen);
  const dispatch = useDispatch();

  useEffect(() => {});

  const handleOpenLogoutModal = () => {
    dispatch(openModalLogout());
  };
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgray',
      }}
    >
      <RouterProvider router={router} />
      <HomeTab />
      <button onClick={() => dispatch(openModalEditTransaction())}>EditTransaction</button>
      <button onClick={handleOpenLogoutModal}>LogoutModal</button>
      <ButtonAddTransactions />
      {/* <button onClick={handleOpenLogoutModal}>LogoutModal</button> */}
      {/* <ModalLogout /> */}
      {isModalAddTransactionOpen ? <ModalAddTransaction /> : null}
      {isModalEditTransactionOpen ? <ModalEditTransaction id="223" /> : null}
    </div>
  );
};

export default App;
