import { createSlice } from '@reduxjs/toolkit';

import {
  changeIsLoadingAction,
  changeIsModalLogoutOpenAction,
  changeIsModalAddTransactionOpenAction,
  changeIsModalEditTransactionOpenAction,
} from './operations';

const initialState = {
  isLoading: false,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeIsLoading: changeIsLoadingAction,
    changeIsModalLogoutOpen: changeIsModalLogoutOpenAction,
    changeIsModalAddTransactionOpen: changeIsModalAddTransactionOpenAction,
    changeIsModalEditTransactionOpen: changeIsModalEditTransactionOpenAction,
    resetGlobal: () => {
      return { ...initialState };
    },
  },
});

export const {
  changeIsLoading,
  changeIsModalLogoutOpen,
  changeIsModalAddTransactionOpen,
  changeIsModalEditTransactionOpen,
  resetGlobal,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
