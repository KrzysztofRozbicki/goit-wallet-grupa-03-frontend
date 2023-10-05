// Powinna zostać ustalona w prawym dolnym rogu ekranu

//Przycisk, który po naciśnięciu zmienia stan global.isModalAddTransactionOpen z false na true.
//Ten klucz jest potrzebny, aby pojawił się komponent ModalAddTransaction

//W skrócie ma zmienić stan global.isModalAddTransactionOpen false na true od którego zależy cyz wyświetli się modal

import { useDispatch } from 'react-redux';

import { openModalAddTransaction } from '../../redux/global/globalSlice';
import plus from '../../assets/icons/plus.svg';

import css from './ButtonAddTransactions.module.css';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button className={css.button} onClick={() => dispatch(openModalAddTransaction())}>
        <img src={plus} className={css.plusIcon} alt="add transaction" />
      </button>
    </>
  );
};

export default ButtonAddTransactions;
