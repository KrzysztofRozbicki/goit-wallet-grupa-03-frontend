import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: false,
  isAuth: false,
  user: {
    name: '',
  },
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
});

export const sessionReducer = sessionSlice.reducer;
