import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

import {
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
    editTransaction: editTransactionAction,
    setSelectedMonth: setSelectedMonthAction,
    setSelectedYear: setSelectedYearAction,
    resetFinance: () => {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.data = action.payload;
        state.totalBalance = calculateBalance(state.data);
      })
      .addCase(fetchTransactions.rejected, state => {
        state.data = [];
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.totalBalance = calculateBalance(state.data);
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        editTransactionAction(state, action);
        state.totalBalance = calculateBalance(state.data);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        deleteTransactionAction(state, action);
        state.totalBalance = calculateBalance(state.data);
      })
      .addCase(getFilteredTransactions.fulfilled, (state, action) => {
        state.filteredData = action.payload;
      })
      .addCase(getFilteredTransactions.rejected, state => {
        state.filteredData = [];
      });
  },
});

export const { resetFinance, setSelectedMonth, setSelectedYear } = financeSlice.actions;

export const financeReducer = financeSlice.reducer;
