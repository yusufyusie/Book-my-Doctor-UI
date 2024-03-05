import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import getHeaders from '../../api/api_helper';

const doctorURL = 'http://127.0.0.1:3001/api/doctors';

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
    const headers = getHeaders();
    const response = await axios.post(doctorURL, postData, { headers });
    toast.success('Added successfully!');
    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const fetchDoctorById = createAsyncThunk('doctors/fetchDoctorById', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${doctorURL}${id}`, getHeaders());
    return { id, res: response.data };
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteDoctor = createAsyncThunk('doctor/deletedoctor', async (id, { dispatch, rejectWithValue }) => {
  try {
    const headers = getHeaders();
    await axios.delete(`${doctorURL}${id}`, headers);
    dispatch(fetchDoctors());
    return id;
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
      .addCase(fetchDoctors.fulfilled, (state, action) => action.payload)
      .addCase(postDoctor.fulfilled, (state, action) => [...state, action.payload]
        .addCase(fetchDoctorById.fulfilled, (state, action) => action.payload)
        .addCase(deleteDoctor.fulfilled,
          (state, action) => state.filter((doctor) => doctor.id === action.payload)));
  },
});

export default doctorSlice.reducer;
