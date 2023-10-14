import { createBrowserRouter, RouterProvider, Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';

import {
  selectIsModalAddTransactionOpen,
  selectIsModalLogoutOpen,
  selectIsModalEditTransactionOpen,
} from '../redux/global/selectors';
import { refreshUser } from '../redux/session/operations';
import { selectIsAuth, selectError } from '../redux/session/selectors';
import { selectIsLoading } from '../redux/global/selectors';

import '../stylesheet/fonts.css';

import ModalAddTransaction from './ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from './ModalEditTransaction/ModalEditTransaction';
import ModalLogout from './ModalLogout/ModalLogout';

import Loader from './Loader/Loader';
const Header = lazy(() => import('./Header/Header.jsx'));
const DashboardPage = lazy(() => import('./DashboardPage/DashboardPage.jsx'));
const Balance = lazy(() => import('./Balance/Balance.jsx'));
const Chart = lazy(() => import('./Chart/Chart.jsx'));
const DiagramTab = lazy(() => import('./DiagramTab/DiagramTab.jsx'));
const HomeTab = lazy(() => import('./HomeTab/HomeTab.jsx'));
const LoginPage = lazy(() => import('./LoginPage/LoginPage.jsx'));
const RegistrationPage = lazy(() => import('./RegistrationPage/RegistrationPage.jsx'));
const CurrencyTable = lazy(() => import('./Currency/Currency.jsx'));
const Navigation = lazy(() => import('./Navigation/Navigation.jsx'));
const Table = lazy(() => import('./Table/Table.jsx'));
import Container from './Container/Container';

import toast, { Toaster } from 'react-hot-toast';
import { setError } from '../redux/session/sessionSlice';

const WithAuthRedirect = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegistrationPage />,
  },

  {
    path: '/',
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
        path: 'diagram',
        element: <DiagramTab />,
      },
      {
        path: 'currency',
        element: <CurrencyTable />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const isModalAddTransactionOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditTransactionOpen = useSelector(selectIsModalEditTransactionOpen);
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
    if (error) {
      toast.error(error);
      dispatch(setError(''));
    }
  }, [error, dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {isLoading ? <Loader /> : null}
        <RouterProvider router={router} />
        {isModalLogoutOpen ? <ModalLogout /> : null}
        {isModalAddTransactionOpen ? <ModalAddTransaction /> : null}
        {isModalEditTransactionOpen ? (
          <ModalEditTransaction id={isModalEditTransactionOpen} />
        ) : null}
        <Toaster position="top-center" />
      </div>
    </Suspense>
  );
};

export default App;
