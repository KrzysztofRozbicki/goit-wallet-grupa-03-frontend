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
  },
});

export const { setUserName, setUserToken, changeError, changeIsAuth } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
