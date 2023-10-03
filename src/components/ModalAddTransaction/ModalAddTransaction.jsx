//Domyślnie checkbox jest w stanie false, którego wartość jest przypisana do wydatków

//W zależności od wybranego stanu w polu wyboru renderować lub nie select z wyborem kategorii

//Opanować bibliotekę react-datetime i połączyć ją z komponentem, domyślnie powinna być wybrana bieżąca data

//Wykonanie walidacji pola formularza, wykorzystywać: 1) bibliotekę formik i yup lub 2) indicative.
//Wymagane powinny być tylko: kwota transakcji, data i rodzaj transakcji, komentarz to pole opcjonalne

//Napisać operację tworzenia transakcji i zawiesić ją na submit formularza, wewnątrz operacji,
//przy pomyślnym wykonaniu operacji zamykać okno modalne, akcja na zamknięcie global.isModalAddTransactionOpen.
//Operacja powinna także dodawać nową transakcję do redux store, otrzymaną w odpowiedzi od serwera

//Tutaj trzeba ustlić co konkretnie i w jakiej formie jest wysyłane do servera i jaką odpowiedź dostajemy

import css from './ModalAddTransaction.module.css';

const ModalAddTransaction = () => {
  return (
    <>
      <div className={css.test}></div>
    </>
  );
};

export default ModalAddTransaction;
