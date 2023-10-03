import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Header/Header';
import HomeTab from './HomeTab/HomeTab';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: 'goit-wallet-grupa-03-frontend/',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <HomeTab />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
