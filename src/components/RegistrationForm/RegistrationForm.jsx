// Wykonanie walidacji pola formularza, wykorzystywać: 1) bibliotekę formik i yup lub 2) indicative.
//Hasło i e - mail są polami wymaganymi, e - mail jest sprawdzany pod kątem prawidłowości,
//hasło składa się z 6 i więcej, do 12 znaków włącznie, hasła muszą być takie same,
//nazwa składa się z co najmniej 1 znaku, maksymalnie do 12 znaków

// Klasowy lub komponent hook, który przechowuje w swoim stanie stany wejść.

// Napisanie operacji dla rejestracji, powinna być wywoływana na przesłanie formularza

// Jeśli odpowiedź z serwera jest udana, w odpowiedź otrzymasz token i obiekt użytkownika.
//Zapisz token i obiekt użytkownika w redux store, a także zmień klucz w session.isAuth na true

// Jeśli w odpowiedzi z serwera przychodzi błąd, trzeba go zdefiniować w redux store session.error i
//przewidzieć wyświetlenie tego błędu

// Link "Zaloguj się" to komponent Link z react-router-dom i przejście do "/login"

//W skrócie ma to być komponent w którym znajduje się formularz którzy przekazuje zwalidowane dane do serwera,
//Jeśli odpowiedź z serwera jest poprawna trzeba zmienić odpowiednio redux
//Dodatkowo dodać link do strony logowania - bardzo podobny do LoginForm

import css from './RegistrationForm.module.css';
import walletSVG from '../../assets/icons/wallet.svg';
import emailSVG from '../../assets/icons/email.svg';
import passwordSVG from '../../assets/icons/lock.svg';
import nameSVG from '../../assets/icons/profile-name.svg';

import { Link } from 'react-router-dom';
const RegistrationForm = () => {
  return (
    <>
      <div className={css.wrapper}>
        <form className={css.form}>
          <div className={css.header}>
            <img src={walletSVG} className={css.logo} alt="wallet logo" />
            <h2 className={css.title}>Wallet</h2>
          </div>
          <label className={css.label}>
            <img src={emailSVG} className={css.icon} alt="email logo" />
            <input className={css.input} type="email" placeholder="E-mail" />
          </label>
          <label className={css.label}>
            <img src={passwordSVG} className={css.icon} alt="email logo" />
            <input className={css.input} type="password" placeholder="Password" />
          </label>
          <label className={css.label}>
            <img src={passwordSVG} className={css.icon} alt="email logo" />
            <input className={css.input} type="password" placeholder="Confirm Password" />
          </label>
          <label className={css.label}>
            <img src={nameSVG} className={css.icon} alt="email logo" />
            <input className={css.input} type="name" placeholder="First Name" />
          </label>
          <button className={css.registerButton}>Register</button>
          <Link to="/goit-wallet-grupa-03-frontend/login">
            <button className={css.loginButton}>Login</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
