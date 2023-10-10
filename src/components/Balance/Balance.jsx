//Komponent, po prostu subskrybuje store finance.totalBalance i renderuje jego zawartość

import { useSelector } from 'react-redux';
import { selectData } from '../../redux/finance/selectors'
import css from './Balance.module.css';

const Balance = () => {
  const totalBalance = useSelector((state) => state.finance.totalBalance);

  return (
    <>
      <div className={css.container}>
        <h2>YOUR BALANCE</h2>
        <div>€ {totalBalance.toFixed(2)}</div>
      </div>
    </>
  );
};

export default Balance;

