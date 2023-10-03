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
  },
});

export const { setTotalBalance, setData } = financeSlice.actions;

export const financeReducer = financeSlice.reducer;
