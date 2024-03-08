import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import getHeaders from '../../api/api_helper';

const appointURL =  `${process.env.REACT_APP_BASE_URL}/api/appointments`;

const initialState = {
  appointContent: '',
};

export const fetchAppoint = createAsyncThunk('appointment/fetchappoint', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(appointURL, getHeaders());
    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const postAppoint = createAsyncThunk('appointment/postAppoint', async (postData, { dispatch, rejectWithValue }) => {
  try {
    const response = await axios.post(appointURL, postData, getHeaders());
    dispatch(fetchAppoint());
    toast.success('Added successfully!');
    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteAppoint = createAsyncThunk('appointment/deleteAppoint', async (id, { dispatch, rejectWithValue }) => {
  try {
    await axios.delete(`${appointURL}${id}`, getHeaders());
    dispatch(fetchAppoint());
    return id;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppoint.fulfilled, (state, action) => {
        state.appointContent = action.payload;
      }).addCase(postAppoint.fulfilled, (state, action) => {
        state.appointContent = action.payload;
      });
  },
});

export default appointmentSlice.reducer;
