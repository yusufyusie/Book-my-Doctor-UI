import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/doctorSlice';
import userReducer from './user/userSlice';
import appointmentReducer from './appointment/appointmentSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
  },
});

export default store;
