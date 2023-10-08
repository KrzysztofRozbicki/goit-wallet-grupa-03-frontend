import { createSlice } from '@reduxjs/toolkit';

import {
  setTotalBalanceAction,
  setDataAction,
  addTransactionAction,
  editTransactionAction,
  fetchTransactions,
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
  extraReducers: {
    [fetchTransactions.fulfilled](state, action) {
      state.data = action.payload;
    },
    [fetchTransactions.rejected](state) {
      state.data = [];
    },
  },
});

export const { setTotalBalance, setData, resetFinance, addTransaction, editTransaction } =
  financeSlice.actions;

export const financeReducer = financeSlice.reducer;
