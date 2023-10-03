import { createSlice } from '@reduxjs/toolkit';

import { setUserNameAction, changeErrorAction, changeIsAuthAction } from './operations';

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
  reducers: {
    setUserName: setUserNameAction,
    changeError: changeErrorAction,
    changeIsAuth: changeIsAuthAction,
  },
});

export const { setUserName, changeError, changeIsAuth } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
