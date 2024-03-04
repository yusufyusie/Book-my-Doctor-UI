import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { logger } from 'redux-logger';
import doctorReducer from './doctorReducer';
import reservationsReducer from './reservations/reservationsSlice';
import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    doctorData: doctorReducer,
    reservations: reservationsReducer,
    auth: authReducer,
=======
import doctorReducer from './doctor/doctorSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    doctor: doctorReducer,
>>>>>>> origin/redux-feature
  },
});

export default store;
