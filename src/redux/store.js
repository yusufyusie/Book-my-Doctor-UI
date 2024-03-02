import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import doctorReducer from './doctorReducer';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    doctorData: doctorReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
