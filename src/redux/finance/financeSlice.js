import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
});

export const financeReducer = financeSlice.reducer;
