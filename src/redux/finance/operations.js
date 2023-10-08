import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthorizationHeader } from '../session/operations';
import { setError } from '../session/sessionSlice';

axios.defaults.baseURL = 'https://pocketbook-basket-clam.cyclic.app/';

export const setTotalBalanceAction = (state, action) => {
  state.totalBalance = action.payload;
};

export const setDataAction = state => {
  state.data = fetchTransactions();
};

export const addTransactionAction = (state, action) => {
  state.data.push(action.payload);
};

export const editTransactionAction = (state, action) => {
  const { id, updatedTransaction } = action.payload;
  const index = state.data.findIndex(transaction => transaction.id === id);
  if (index !== -1) {
    state.data[index] = {
      ...state.data[index],
      ...updatedTransaction,
    };
  }
};

export const fetchTransactions = createAsyncThunk('fetchTransactions', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  console.log(state);
  const token = state.session.user.token;
  try {
    setAuthorizationHeader(token);
    const response = await axios.get('/api/transactions');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
