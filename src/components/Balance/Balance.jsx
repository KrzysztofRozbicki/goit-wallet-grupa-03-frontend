import { useSelector } from 'react-redux';
import css from './Balance.module.css';
import { cashFormatter } from '../../utils/cashFormatter';

const Balance = () => {
  const totalBalance = useSelector(state => state.finance.totalBalance);

  return (
    <>
      <div className={css.container}>
        <h2>YOUR BALANCE</h2>
        <div>{undefined ?? '€ ' + cashFormatter(totalBalance)}</div>
      </div>
    </>
  );
};

export default Balance;
