import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalBalance: 0,
  data: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
});

export const financeReducer = financeSlice.reducer;
