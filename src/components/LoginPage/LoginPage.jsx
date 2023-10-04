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
import bannerSVG from '../../assets/icons/banner.svg';
import blob1 from '../../assets/icons/blob-1.svg';
import blob2 from '../../assets/icons/blob-2.svg';

const LoginPage = () => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.header}>
          <img className={css.blob2} src={blob2} alt="blob" />
          <img className={css.blob1} src={blob1} alt="blob" />
          <img className={css.banner} src={bannerSVG} alt="banner" />
          <h2 className={css.title}>Finance App</h2>
        </div>
        <div className={css.container}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
