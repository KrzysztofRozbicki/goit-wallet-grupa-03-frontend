import { createSlice } from '@reduxjs/toolkit';

import {
  setTotalBalanceAction,
  setDataAction,
  addTransactionAction,
  editTransactionAction,
  fetchTransactions,
  addTransaction,
  editTransaction,
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
    editTransaction: editTransactionAction,
    resetFinance: () => {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {})
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.data = [];
      })
      .addCase(addTransaction.pending, (state, action) => {})
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {})
      .addCase(editTransaction.pending, (state, action) => {})
      .addCase(editTransaction.fulfilled, (state, action) => {
        editTransactionAction(state, action);
      })
      .addCase(editTransaction.rejected, (state, action) => {});
  },
});

export const { setTotalBalance, setData, resetFinance } = financeSlice.actions;

export const financeReducer = financeSlice.reducer;
