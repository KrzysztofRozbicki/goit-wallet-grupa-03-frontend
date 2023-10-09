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

export const setAuthorization = getState => {
  const state = getState();
  const token = state.session.user.token;
  setAuthorizationHeader(token);
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

export const addTransaction = createAsyncThunk('add/transaction', async (values, thunkAPI) => {
  setAuthorization(thunkAPI.getState);
  try {
    const response = await axios.post('/api/transactions', values);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editTransaction = createAsyncThunk(
  'edit/transaction',
  async (values, id, thunkAPI) => {
    setAuthorization(thunkAPI.getState);
    try {
      const response = await axios.post(`/api/transactions/${id}`, values);
      console.log(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactions = createAsyncThunk('fetchAll/transactions', async (_, thunkAPI) => {
  setAuthorization(thunkAPI.getState);
  try {
    const response = await axios.get('/api/transactions');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
