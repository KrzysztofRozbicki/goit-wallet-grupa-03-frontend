// Zapewnienie odpowiedniego pozycjonowania elementów na stronie

// Przyjmuje komponent RegistrationForm

// Powrót strony do HOC withAuthRedirect

//W skrócie ma to być komponent w środku którego jest formularz RegistrationForm
//Natomiast po pomyślnym zarejestrowaniu ma przekierowywać na Dashboard
//Bliźniaczo podobny do LoginPage

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

import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <>
      <div className={css.test}></div>
    </>
  );
};

export default RegistrationPage;
