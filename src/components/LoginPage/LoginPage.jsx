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

import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <>
      <div className={css.test}></div>
    </>
  );
};

export default LoginPage;
