// Powinna zostać ustalona w prawym dolnym rogu ekranu

//Przycisk, który po naciśnięciu zmienia stan global.isModalAddTransactionOpen z false na true.
//Ten klucz jest potrzebny, aby pojawił się komponent ModalAddTransaction

//W skrócie ma zmienić stan global.isModalAddTransactionOpen false na true od którego zależy cyz wyświetli się modal

import css from './ButtonAddTransactions.module.css';

const ButtonAddTransactions = () => {
  return (
    <>
      <div className={css.test}></div>
    </>
  );
};

export default ButtonAddTransactions;
