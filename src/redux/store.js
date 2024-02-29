import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import doctorReducer from './doctorReducer';

const store = configureStore({
  reducer: {
    doctorData: doctorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
