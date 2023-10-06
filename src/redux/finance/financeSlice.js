import { createSlice } from '@reduxjs/toolkit';

import {
  setTotalBalanceAction,
  setDataAction,
  addTransactionAction,
  editTransactionAction,
} from './operations';

const initialState = {
  totalBalance: '',
  data: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setTotalBalance: setTotalBalanceAction,
    setData: setDataAction,
    addTransaction: addTransactionAction,
    editTransaction: editTransactionAction,
    resetFinance: () => {
      return { ...initialState };
    },
  },
});

export const { setTotalBalance, setData, resetFinance, addTransaction, editTransaction } =
  financeSlice.actions;

export const financeReducer = financeSlice.reducer;
