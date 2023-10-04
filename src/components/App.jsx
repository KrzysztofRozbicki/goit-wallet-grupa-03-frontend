import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DashboardPage from './DashboardPage/DashboardPage';
import Chart from './Chart/Chart';
import DiagramTab from './DiagramTab/DiagramTab';
import HomeTab from './HomeTab/HomeTab';
import ButtonAddTransactions from './ButtonAddTransactions/ButtonAddTransactions';
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

  //   {
  //     path: 'goit-wallet-grupa-03-frontend/',
  //     element: <DashboardPage />,
  //     children: [
  //       {
  //         path: '',
  //         element: <HomeTab />,
  //       },
  //       {
  //         path: 'chart',
  //         element: <Chart />,
  //       },
  //       {
  //         path: 'diagram',
  //         element: <DiagramTab />,
  //       },
  // ],
  // },
]);

const App = () => {
<<<<<<< HEAD
  return <div>{/* <RouterProvider router={router} /> */}</div>;
=======
  return (
    <div>
      <RouterProvider router={router} />
      <HomeTab />
    </div>
  );
>>>>>>> 07326d9c6be54cca7da5582834c1a73a8377d447
};

export default App;
