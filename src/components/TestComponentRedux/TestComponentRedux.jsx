import css from './TestComponentRedux.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { selectTotalBalance, selectData } from '../../redux/finance/selectors';
import { setTotalBalance, setData, resetFinance } from '../../redux/finance/financeSlice';

import {
  selectIsLoading,
  selectIsModalLogoutOpen,
  selectIsModalAddTransactionOpen,
  selectIsModalEditTransactionOpen,
} from '../../redux/global/selectors';
import {
  changeIsLoading,
  changeIsModalLogoutOpen,
  changeIsModalAddTransactionOpen,
  changeIsModalEditTransactionOpen,
  resetGlobal,
} from '../../redux/global/globalSlice';

import {
  selectError,
  selectIsAuth,
  selectUserName,
  selectUserToken,
} from '../../redux/session/selectors';
import {
  setUserName,
  setUserToken,
  changeError,
  changeIsAuth,
  resetSession,
} from '../../redux/session/sessionSlice';

const TestComponentRedux = () => {
  const dispatch = useDispatch();

  const totalBalance = useSelector(selectTotalBalance);
  const data = useSelector(selectData);
  const handleTotalBalance = amount => dispatch(setTotalBalance(amount));
  const handleData = data => dispatch(setData(data));
  const handleResetFinance = () => dispatch(resetFinance());

  const isLoading = useSelector(selectIsLoading);
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);
  const isModalAddTransactionOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditTransactionOpen = useSelector(selectIsModalEditTransactionOpen);
  const handleIsLoading = () => dispatch(changeIsLoading);
  const handleIsModalLogoutOpen = () => dispatch(changeIsModalLogoutOpen);
  const handleIsModalAddTransactionOpen = () => dispatch(changeIsModalAddTransactionOpen);
  const handleIsModalEditTransactionOpen = () => dispatch(changeIsModalEditTransactionOpen);
  const handleResetGlobal = () => dispatch(resetGlobal());

  const error = useSelector(selectError);
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const userToken = useSelector(selectUserToken);
  const handleError = () => dispatch(changeError);
  const handleIsAuth = () => dispatch(changeIsAuth);
  const handleUserName = name => dispatch(setUserName(name));
  const handleUserToken = token => dispatch(setUserToken(token));
  const handleResetSession = () => dispatch(resetSession());

  return (
    <>
      <p>testComponent</p>
      <div className={css.test}>
        <p>TotalBalance: {totalBalance}</p>
        <input onChange={e => handleTotalBalance(e.target.value)} placeholder="put the balance" />
        <p> Data: {data} </p>
        <button onClick={() => handleData(['test ', 'test2 ', 'test3'])}>Click to set Data</button>
        <button onClick={() => handleResetFinance()}>Click here to reset above values</button>

        <p> user name: {userName} </p>
        <input onChange={e => handleUserName(e.target.value)} placeholder="put the name" />
      </div>
    </>
  );
};

export default TestComponentRedux;
