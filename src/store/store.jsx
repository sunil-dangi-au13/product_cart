import{configureStore}from '@reduxjs/toolkit';
import {persistReducer,persistStore } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import {combineReducers}  from 'redux';
import  cartReducer from './cartSlice'

const reducers = combineReducers({
  cart: cartReducer
});


const persistConfig= {
  key: 'root',
  //sessionStorag
  storage
};
const persistedReducer = persistReducer( persistConfig,reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})
export const persistor = persistStore(store)
export { store}