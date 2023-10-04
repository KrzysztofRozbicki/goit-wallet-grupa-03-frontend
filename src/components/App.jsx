import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsModalAddTransactionOpen } from '../redux/global/selectors';

import DashboardPage from './DashboardPage/DashboardPage';
import Chart from './Chart/Chart';
import DiagramTab from './DiagramTab/DiagramTab';
import HomeTab from './HomeTab/HomeTab';
import ButtonAddTransactions from './ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransaction from './ModalAddTransaction/ModalAddTransaction';
import TestComponentRedux from './TestComponentRedux/TestComponentRedux';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import '../stylesheet/fonts.css';

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
    element: <DashboardPage />,
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
