import { createSlice } from '@reduxjs/toolkit';

import { setTotalBalanceAction, setDataAction } from './operations';

const initialState = {
  totalBalance: 0,
  data: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setTotalBalance: setTotalBalanceAction,
    setData: setDataAction,
    resetFinance: () => {
      return { ...initialState };
    },
  },
});

export const { setTotalBalance, setData, resetFinance } = financeSlice.actions;

export const financeReducer = financeSlice.reducer;
