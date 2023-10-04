import { createSlice } from '@reduxjs/toolkit';

import {
  setUserNameAction,
  setUserTokenAction,
  setErrorAction,
  setIsAuthAction,
} from './operations';

const initialState = {
  error: '',
  isAuth: false,
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
});

export const { setUserName, setUserToken, setError, setIsAuth, resetSession } =
  sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
