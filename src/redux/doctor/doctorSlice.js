import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  doctorsContent: [],
  isLoading: false,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
});

export default doctorSlice.reducer;
