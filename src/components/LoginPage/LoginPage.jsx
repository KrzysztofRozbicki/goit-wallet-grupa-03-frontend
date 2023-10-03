//Zapewnienie odpowiedniego pozycjonowania elementów na stronie

//Przyjmuje komponent LoginForm

//Powrót strony do HOC withAuthRedirect

//W skrócie ma to być komponent w środku którego jest formularz LoginForm
//Natomiast po pomyślnym zarejestrowaniu ma przekierowywać na Dashboard
//Bliźniaczo podobny do RegistrationPage

//Przykład przekierowania:

// const WithAuthRedirect = ({ children }) => {
//   const isAuth = useSelector(state => state.session.isAuth);

//   if (!isAuth) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// W routingu:

//  path: 'goit-wallet-grupa-03-frontend/',
// element: <WithAuthRedirect children={<DashboardPage />} />,
// children: [

import LoginForm from '../LoginForm/LoginForm';
import css from './LoginPage.module.css';
import { bannerSVG } from '../../assets/icons/banner.svg';

const LoginPage = () => {
  return (
    <>
      {/* <img src={bannerSVG}/> */}
      <LoginForm />
    </>
  );
};

export default LoginPage;
