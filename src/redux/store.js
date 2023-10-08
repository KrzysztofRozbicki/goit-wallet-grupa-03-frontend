import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import { globalReducer } from './global/globalSlice';
import { sessionReducer } from './session/sessionSlice';
import { financeReducer } from './finance/financeSlice';

const rootReducer = combineReducers({
  session: sessionReducer,
  global: globalReducer,
  finance: financeReducer,
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['session'],
};
const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
