import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigContacts = {
  key: 'contacts',
  version: 1,
  storage,
};

const persistConfigFilter = {
  key: 'filter',
  version: 1,
  storage,
};

const persistedReducerContacts = persistReducer(
  persistConfigContacts,
  contactsReducer
);
const persistedReducerFilter = persistReducer(
  persistConfigFilter,
  filterReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducerContacts,
    filters: persistedReducerFilter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
