import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import getHeaders from '../../api/api_helper';

const appointURL = 'http://127.0.0.1:3001/api/appointments';

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

// eslint-disable-next-line max-len
// export const postAppoint = createAsyncThunk('appointment/postAppoint', async (postData, { rejectWithValue }) => {});

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppoint.fulfilled, (state, action) => {
        state.appointContent = action.payload;
      });
  },
});

export default appointmentSlice.reducer;
