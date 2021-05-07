import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import userReducer from '../features/product/userSlice';
import {logger} from 'redux-logger'

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer
  },
  middleware: [logger],
});
