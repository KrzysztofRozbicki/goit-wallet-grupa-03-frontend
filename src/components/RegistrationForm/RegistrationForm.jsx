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
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import PasswordStrength from '../PasswordStrength/PasswordStrength';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .test('has-domain', 'Invalid email domain', function (value) {
      if (value) {
        const emailParts = value.split('@');
        if (emailParts.length === 2) {
          const domainParts = emailParts[1].split('.');
          return domainParts.length > 1 && domainParts[domainParts.length - 1].length > 1;
        }
      }
      return false;
    })
    .required(''),
  password: Yup.string()
    .min(6, 'Password is too short!')
    .max(12, 'Password is too long!')
    .required(''),
  confirmPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')

    .required('')
    .oneOf([Yup.ref('password')], 'Passwords do not match.'),
  firstName: Yup.string().min(1, 'Too Short!').max(12, 'Too Long!').required('Name is required'),
});

const RegistrationForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched, values }) => (
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
              <label className={css.label}>
                <img src={passwordSVG} className={css.icon} alt="email logo" />
                <div className={css.fieldWrapper}>
                  <Field
                    className={css.input}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className={css.validateError}>{errors.confirmPassword}</div>
                  ) : null}
                </div>
              </label>
              <PasswordStrength className={css.passwordBar} value={values.password} />
              <label className={css.label}>
                <img src={nameSVG} className={css.icon} alt="email logo" />
                <div className={css.fieldWrapper}>
                  <Field
                    className={css.input}
                    type="name"
                    name="firstName"
                    placeholder="First Name"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className={css.validateError}>{errors.firstName}</div>
                  ) : null}
                </div>
              </label>
              <button type="submit" className={css.registerButton}>
                Register
              </button>
              <Link to="/goit-wallet-grupa-03-frontend/login">
                <button className={css.loginButton}>Login</button>
              </Link>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
