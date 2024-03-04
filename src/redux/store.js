import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctorReducer';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    doctorData: doctorReducer,
    user: userReducer,
  },
});

export default store;
