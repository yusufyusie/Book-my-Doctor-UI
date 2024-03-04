import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/doctorSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    doctor: doctorReducer,
  },
});

export default store;
