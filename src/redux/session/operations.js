import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const setUserNameAction = (state, action) => {
  state.user.name = action.payload;
};

export const setUserTokenAction = (state, action) => {
  state.user.token = action.payload;
};

export const setErrorAction = (state, action) => {
  state.error = action.payload;
};

export const setIsAuthAction = state => {
  state.isAuth = true;
};

axios.defaults.baseURL = 'https://pocketbook-basket-clam.cyclic.app/';

export const setAuthorizationHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorizationHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('authorization/register', async credentials => {
  try {
    const response = await axios.post('/api/users/register', credentials);
    setAuthorizationHeader(response.data.user.token);
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

export const logIn = createAsyncThunk('authorization/login', async credentials => {
  try {
    const response = await axios.post('/api/users/login', credentials);
    setAuthorizationHeader(response.data.user.token);
    return response.data;
  } catch (error) {
    throw error.message;
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

export const refreshUser = createAsyncThunk('authorization/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.session.user.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthorizationHeader(persistedToken);
    const response = await axios.get('/api/users/profile');
    return response.data;
  } catch (error) {
    throw error.message;
  }
});
