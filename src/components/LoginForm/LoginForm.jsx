// Wykonanie walidacji pola formularza, wykorzystywać: 1) bibliotekę formik i yup lub 2) indicative.
//Hasło i e - mail są polami wymaganymi, e - mail jest sprawdzany pod kątem prawidłowości,
//hasło ma 6 lub więcej, do 12 znaków włącznie

// Klasowy lub komponent hook, który przechowuje w swoim stanie stany wejść.

// Napisz operację dla logowania, powinna być wywoływana na przesłanie formularza

// Jeśli odpowiedź z serwera jest udana, w odpowiedź otrzymasz token i obiekt użytkownika.
//Zapisz token i obiekt użytkownika w redux store, a także zmień klucz w session.isAuth na true

// Jeśli w odpowiedź z serwera przychodzi błąd, trzeba go zdefiniować w redux store session.error
//i przewidzieć wyświetlenie tego błędu

// Link "Rejestracja" to komponent Link z react-router-dom i przejście do "/register"

//W skrócie ma to być komponent w którym znajduje się formularz którzy przekazuje zwalidowane dane do serwera,
//Jeśli odpowiedź z serwera jest poprawna trzeba zmienić odpowiednio redux
//Dodatkowo dodać link do strony rejestracji - bardzo podobny do RegistrationForm

import css from './LoginForm.module.css';
import walletSVG from '../../assets/icons/wallet.svg';
import emailSVG from '../../assets/icons/email.svg';
import passwordSVG from '../../assets/icons/lock.svg';

import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/session/selectors';

import { logIn } from '../../redux/session/operations';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(''),
  password: Yup.string().required(''),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) navigate('goit-wallet-grupa-03-frontend/home');
  }, [isAuth, navigate]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(logIn(values));
    setSubmitting(false);
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <div className={css.wrapper}>
            <Form className={css.form}>
              <div className={css.header}>
                <img src={walletSVG} className={css.logo} alt="wallet logo" />
                <h2 className={css.title}>Wallet</h2>
              </div>
              <label className={css.label}>
                <img src={emailSVG} className={css.icon} alt="email logo" />
                <div className={css.fieldWrapper}>
                  <Field className={css.input} type="email" name="email" placeholder="E-mail" />
                  {errors.email && touched.email ? (
                    <div className={css.validateError}>{errors.email}</div>
                  ) : null}
                </div>
              </label>
              <label className={css.label}>
                <img src={passwordSVG} className={css.icon} alt="email logo" />
                <div className={css.fieldWrapper}>
                  <Field
                    className={css.input}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div className={css.validateError}>{errors.password}</div>
                  ) : null}
                </div>
              </label>
              <button type="submit" className={css.loginButton}>
                Login
              </button>
              <Link to="/goit-wallet-grupa-03-frontend/register">
                <button className={css.registerButton}>Register</button>
              </Link>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
