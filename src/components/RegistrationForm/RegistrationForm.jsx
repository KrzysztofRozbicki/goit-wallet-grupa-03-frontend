import css from './RegistrationForm.module.css';
import walletSVG from '../../assets/icons/wallet.svg';
import emailSVG from '../../assets/icons/email.svg';
import passwordSVG from '../../assets/icons/lock.svg';
import nameSVG from '../../assets/icons/profile-name.svg';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import PasswordStrength from '../PasswordStrength/PasswordStrength';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setError, setIsAuth, setUserName, setUserToken } from '../../redux/session/sessionSlice';

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
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { confirmPassword, firstName, ...requestData } = values;
    const dataToSend = {
      ...requestData,
      name: firstName,
    };

    try {
      const response = await axios.post(
        'https://pocketbook-basket-clam.cyclic.app/api/users/register',
        JSON.stringify(dataToSend),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch(setUserName(response.data.user.name));
      dispatch(setUserToken(response.data.user.token));
      dispatch(setIsAuth(true));
    } catch (error) {
      dispatch(setError(error.response.data.message));
      console.log('Error:', error.response.data.message);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };
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
        onSubmit={handleSubmit}
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
