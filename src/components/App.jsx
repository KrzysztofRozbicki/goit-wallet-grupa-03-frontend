import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DashboardPage from './DashboardPage/DashboardPage';
import Chart from './Chart/Chart';
import DiagramTab from './DiagramTab/DiagramTab';
import HomeTab from './HomeTab/HomeTab';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import Currency from './Currency/Currency';

// const router = createBrowserRouter([
//   {
//     path: 'goit-wallet-grupa-03-frontend/login',
//     element: <LoginPage />,
//   },
//   {
//     path: 'goit-wallet-grupa-03-frontend/register',
//     element: <RegistrationPage />,
//   },

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
//     ],
//   },
// ]);

const App = () => {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <HomeTab />
      <DashboardPage />
    </div>
  );
};

export default App;
