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
  openLoading,
  closeLoading,
  openModalLogout,
  closeModalLogout,
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalEditTransaction,
  closeModalEditTransaction,
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
  setError,
  setIsAuth,
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
  const handleOpenLoading = () => dispatch(openLoading);
  const handleCloseLoading = () => dispatch(closeLoading);
  const handleOpenModalLogout = () => dispatch(openModalLogout);
  const handleCloseModalLogout = () => dispatch(closeModalLogout);
  const handleOpenModalAddTransaction = () => dispatch(openModalAddTransaction);
  const handleCloseModalAddTransaction = () => dispatch(closeModalAddTransaction);
  const handleOpenModalEditTransaction = () => dispatch(openModalEditTransaction);
  const handleCloseModalEditTransaction = () => dispatch(closeModalEditTransaction);
  const handleResetGlobal = () => dispatch(resetGlobal());

  const error = useSelector(selectError);
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const userToken = useSelector(selectUserToken);
  const handleError = error => dispatch(setError(error));
  const handleIsAuth = () => dispatch(setIsAuth);
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
