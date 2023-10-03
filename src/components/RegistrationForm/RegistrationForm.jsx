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

const RegistrationForm = () => {
  return (
    <>
      <div className={css.test}></div>
    </>
  );
};

export default RegistrationForm;
