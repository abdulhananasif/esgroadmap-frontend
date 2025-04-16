import {configureStore, combineReducers} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import appReducer from '../slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  app: persistReducer(persistConfig, appReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
