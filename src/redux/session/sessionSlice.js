import { createSlice } from '@reduxjs/toolkit';

import { setErrorAction, register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  error: '',
  isAuth: false,
  isRefreshing: false,
  user: {
    name: '',
    token: '',
  },
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setError: setErrorAction,
    resetSession: () => {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.token = action.payload.user.token;
        state.isAuth = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.token = action.payload.user.token;
        state.isAuth = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, token: null };
        state.isAuth = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isAuth = false;
        state.isRefreshing = false;
      });
  },
});

export const { setError, resetSession } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
