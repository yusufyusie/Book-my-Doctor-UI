// eslint-disable-next-line no-unused-vars
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD
// import axios from 'axios';
=======
import axios from 'axios';
import { toast } from 'react-toastify';
import getHeaders from '../../api/api_helper';

const doctorURL = 'http://127.0.0.1:3001/api/doctors';
>>>>>>> dev

const initialState = {
  doctorsContent: [],
};

export const fetchDoctors = createAsyncThunk('doctors/fetchdoctors', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(doctorURL, getHeaders());
    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const postDoctor = createAsyncThunk('doctors/postDoctor', async (postData, { rejectWithValue }) => {
  try {
    const response = await axios.post(doctorURL, postData, getHeaders());
    toast.success('Added successfully!');
    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.doctorsContent = action.payload;
      }).addCase(postDoctor.fulfilled, (state, action) => {
        state.doctorsContent = Array.isArray(state.doctorsContent)
          ? [...state.doctorsContent, action.payload]
          : [action.payload];
      });
  },
});

export default doctorSlice.reducer;
