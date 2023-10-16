import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { openLoading, closeLoading } from '../global/globalSlice';

export const setErrorAction = (state, action) => {
  state.error = action.payload;
};

axios.defaults.baseURL = 'https://pocketbook-basket-clam.cyclic.app/';

export const setAuthorizationHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorizationHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'authorization/register',
  async (credentials, { dispatch }) => {
    dispatch(openLoading());
    try {
      const response = await axios.post('/api/users/register', credentials);
      setAuthorizationHeader(response.data.user.token);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    } finally {
      dispatch(closeLoading());
    }
  }
);

export const logIn = createAsyncThunk('authorization/login', async (credentials, { dispatch }) => {
  dispatch(openLoading());
  try {
    const response = await axios.post('/api/users/login', credentials);
    setAuthorizationHeader(response.data.user.token);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  } finally {
    dispatch(closeLoading());
  }
});

export const logOut = createAsyncThunk('authorization/logout', async () => {
  try {
    await axios.post('/api/users/logout');
    clearAuthorizationHeader();
  } catch (error) {
    throw error.message;
  }
});

export const refreshUser = createAsyncThunk(
  'authorization/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.session.user.token;
    if (!persistedToken) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthorizationHeader(persistedToken);
      const response = await axios.get('/api/users/profile');
      return response.data;
    } catch (error) {
      throw error.message;
    }
  }
);
