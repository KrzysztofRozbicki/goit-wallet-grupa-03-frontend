import { createSlice } from '@reduxjs/toolkit';

import {
  setUserNameAction,
  setUserTokenAction,
  changeErrorAction,
  changeIsAuthAction,
} from './operations';

const initialState = {
  error: false,
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
    changeError: changeErrorAction,
    changeIsAuth: changeIsAuthAction,
    resetSession: () => {
      return { ...initialState };
    },
  },
});

export const { setUserName, setUserToken, changeError, changeIsAuth, resetSession } =
  sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
