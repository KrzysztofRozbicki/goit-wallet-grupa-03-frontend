import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsModalAddTransactionOpen } from '../redux/global/selectors';

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
import TestComponentRedux from './TestComponentRedux/TestComponentRedux';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import CurrencyTable from './Currency/Currency';
import ModalLogout from './ModalLogout/ModalLogout';
import Navigation from './Navigation/Navigation';
import Table from './Table/Table';

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
  console.log('isModalOpen:', isModalAddTransactionOpen);
  return (
    <div>
      <RouterProvider router={router} />
      <HomeTab />
      <ButtonAddTransactions />
      {isModalAddTransactionOpen ? <ModalAddTransaction /> : null}
    </div>
  );
};

export default App;
