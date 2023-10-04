import { createSlice } from '@reduxjs/toolkit';

import {
  openLoadingAction,
  closeLoadingAction,
  openModalLogoutAction,
  closeModalLogoutAction,
  openModalAddTransactionAction,
  closeModalAddTransactionAction,
  openModalEditTransactionAction,
  closeModalEditTransactionAction,
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
    openLoading: openLoadingAction,
    closeLoading: closeLoadingAction,
    openModalLogout: openModalLogoutAction,
    closeModalLogout: closeModalLogoutAction,
    openModalAddTransaction: openModalAddTransactionAction,
    closeModalAddTransaction: closeModalAddTransactionAction,
    openModalEditTransaction: openModalEditTransactionAction,
    closeModalEditTransaction: closeModalEditTransactionAction,
    resetGlobal: () => {
      return { ...initialState };
    },
  },
});

export const {
  openLoading,
  closeLoading,
  openModalLogout,
  closeModalLogout,
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalEditTransaction,
  closeModalEditTransaction,
  resetGlobal,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
