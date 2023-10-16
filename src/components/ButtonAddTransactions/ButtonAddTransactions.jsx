import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from '../../redux/global/globalSlice';
import plus from '../../assets/icons/Plus.svg';

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
