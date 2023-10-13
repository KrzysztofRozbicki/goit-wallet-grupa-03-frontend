import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

import {
  setTotalBalanceAction,
  setDataAction,
  editTransactionAction,
  deleteTransactionAction,
  fetchTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  calculateBalance,
  getFilteredTransactions,
  setSelectedMonthAction,
  setSelectedYearAction,
} from './operations';

const initialState = {
  totalBalance: 0,
  data: [],
  filteredData: [],
  selectedMonth: moment(new Date()).month() + 1,
  selectedYear: moment(new Date()).year(),
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setTotalBalance: setTotalBalanceAction,
    setData: setDataAction,
    editTransaction: editTransactionAction,
    setSelectedMonth: setSelectedMonthAction,
    setSelectedYear: setSelectedYearAction,
    resetFinance: () => {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {})
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.data = action.payload;
        state.totalBalance = calculateBalance(state.data);
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.data = [];
      })
      .addCase(addTransaction.pending, (state, action) => {})
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.totalBalance = calculateBalance(state.data);
      })
      .addCase(addTransaction.rejected, (state, action) => {})
      .addCase(editTransaction.pending, (state, action) => {})
      .addCase(editTransaction.fulfilled, (state, action) => {
        editTransactionAction(state, action);
        state.totalBalance = calculateBalance(state.data);
      })
      .addCase(editTransaction.rejected, (state, action) => {})
      .addCase(deleteTransaction.pending, (state, action) => {})
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        deleteTransactionAction(state, action);
        state.totalBalance = calculateBalance(state.data);
      })
      .addCase(deleteTransaction.rejected, (state, action) => {})
      /// filtered transactions
      .addCase(getFilteredTransactions.pending, (state, action) => {})
      .addCase(getFilteredTransactions.fulfilled, (state, action) => {
        state.filteredData = action.payload;
      })
      .addCase(getFilteredTransactions.rejected, (state, action) => {
        state.filteredData = [];
      });
  },
});

export const { setTotalBalance, setData, resetFinance, setSelectedMonth, setSelectedYear } =
  financeSlice.actions;

export const financeReducer = financeSlice.reducer;
