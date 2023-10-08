import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  selectIsModalAddTransactionOpen,
  selectIsModalLogoutOpen,
  selectIsModalEditTransactionOpen,
} from '../redux/global/selectors';
import { refreshUser } from '../redux/session/operations';
import { selectIsAuth, selectIsRefreshing } from '../redux/session/selectors';

import '../stylesheet/fonts.css';

import Loader from './Loader/Loader';
import Header from './Header/Header';
import DashboardPage from './DashboardPage/DashboardPage';
import Balance from './Balance/Balance';
import Chart from './Chart/Chart';
import DiagramTab from './DiagramTab/DiagramTab';
import HomeTab from './HomeTab/HomeTab';
import ModalAddTransaction from './ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from './ModalEditTransaction/ModalEditTransaction';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import CurrencyTable from './Currency/Currency';
import ModalLogout from './ModalLogout/ModalLogout';
import Navigation from './Navigation/Navigation';
import Table from './Table/Table';
import Container from './Container/Container';

const WithAuthRedirect = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

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
    element: (
      <WithAuthRedirect>
        <Container />
      </WithAuthRedirect>
    ),
    children: [
      {
        path: '',
        element: <HomeTab />,
      },
      {
        path: 'home',
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
        path: 'logout',
        element: <ModalLogout />,
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
  {
    path: '*',
    element: <Navigate to="goit-wallet-grupa-03-frontend/login" />,
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const isModalAddTransactionOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditTransactionOpen = useSelector(selectIsModalEditTransactionOpen);
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <RouterProvider router={router} />
      {isModalLogoutOpen ? <ModalLogout /> : null}
      {isModalAddTransactionOpen ? <ModalAddTransaction /> : null}
      {isModalEditTransactionOpen ? <ModalEditTransaction id={isModalEditTransactionOpen} /> : null}
    </div>
  );
};

export default App;
