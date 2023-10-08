import { createSlice } from '@reduxjs/toolkit';

import {
  setUserNameAction,
  setUserTokenAction,
  setErrorAction,
  setIsAuthAction,
  register,
  logIn,
  logOut,
  refreshUser,
} from './operations';

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
    setUserName: setUserNameAction,
    setUserToken: setUserTokenAction,
    setError: setErrorAction,
    setIsAuth: setIsAuthAction,
    resetSession: () => {
      return { ...initialState };
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.token = action.payload.user.token;
      state.isAuth = true;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
    },
    [logIn.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.token = action.payload.user.token;
      state.isAuth = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, token: null };
      state.isAuth = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuth = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isAuth = false;
      state.isRefreshing = false;
    },
  },
});

export const { setUserName, setUserToken, setError, setIsAuth, resetSession } =
  sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
