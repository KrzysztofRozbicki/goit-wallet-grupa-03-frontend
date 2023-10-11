import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthorizationHeader } from '../session/operations';
import { setError } from '../session/sessionSlice';
import { openLoading, closeLoading } from '../global/globalSlice';

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

export const deleteTransactionAction = (state, action) => {
  const id = action.payload;
  const index = state.data.findIndex(transaction => transaction.id === id);
  if (index !== -1) {
    state.data.splice(index, 1);
  }
};

export const addTransaction = createAsyncThunk(
  'add/transaction',
  async (values, { getState, dispatch, rejectWithValue }) => {
    setAuthorization(getState);
    dispatch(openLoading());
    try {
      const response = await axios.post('/api/transactions', values);
      return response.data.newTransaction;
    } catch (error) {
      dispatch(setError('Error while adding transaction'));
      return rejectWithValue(error.message);
    } finally {
      dispatch(closeLoading());
    }
  }
);

export const editTransaction = createAsyncThunk(
  'edit/transaction',
  async (values, id, { getState, dispatch, rejectWithValue }) => {
    console.log('values: ', values);
    setAuthorization(getState);
    dispatch(openLoading());
    try {
      const response = await axios.post(`/api/transactions/${id}`, values);
      return { id: id, updatedTransaction: response.data.result };
    } catch (error) {
      dispatch(setError('Error while editing transaction'));
      return rejectWithValue(error.message);
    } finally {
      dispatch(closeLoading());
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'delete/transaction',
  async (id, { getState, dispatch, rejectWithValue }) => {
    setAuthorization(getState);
    dispatch(openLoading());
    try {
      await axios.delete(`/api/transactions/${id}`);
      return { id };
    } catch (error) {
      dispatch(setError('Error while deleting transaction'));
      return rejectWithValue(error.message);
    } finally {
      dispatch(closeLoading());
    }
  }
);

export const getFilteredTransactions = createAsyncThunk(
  'fetchFiltered/transactions',
  async ({ month, year }, { getState, dispatch, rejectWithValue }) => {
    setAuthorization(getState);

    try {
      dispatch(openLoading());
      const response = await axios.get(`/api/transactions/${month}/${year}`);
      return response.data.transactions;
    } catch (error) {
      dispatch(setError('Cannot get filtered transactions from the server'));
      return rejectWithValue(error.message);
    } finally {
      dispatch(closeLoading());
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  'fetchAll/transactions',
  async (_, { getState, dispatch, rejectWithValue }) => {
    setAuthorization(getState);

    try {
      dispatch(openLoading());
      const response = await axios.get('/api/transactions');
      return response.data.transactions;
    } catch (error) {
      dispatch(setError('Cannot get transactions from server'));
      return rejectWithValue(error.message);
    } finally {
      dispatch(closeLoading());
    }
  }
);

export const calculateBalance = transactions => {
  let totalAmount = 0;
  transactions.forEach(transaction => {
    if (transaction.isIncome) {
      totalAmount += transaction.amount; // Add income
    } else {
      totalAmount -= transaction.amount; // Deduct expense
    }
  });
  return totalAmount;
};
