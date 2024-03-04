import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import doctorReducer from './doctorReducer';
import reservationsReducer from './reservations/reservationsSlice';
import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    doctorData: doctorReducer,
    reservations: reservationsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
