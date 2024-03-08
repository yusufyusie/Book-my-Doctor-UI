import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RESERVATIONS_URL = 'https://book-my-doctor-2jsx.onrender.com/api/v1/appointments';

export const postReservation = createAsyncThunk(
  'reservations/postReservation',
  async (newData, { rejectWithValue }) => {
    const { data, token } = newData;
    try {
      const response = await axios.post(RESERVATIONS_URL, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getReservation = createAsyncThunk(
  'reservations/getReservation',
  async (newData, { rejectWithValue }) => {
    const { reservationId, token } = newData;
    try {
      const resp = await axios.get(`${RESERVATIONS_URL}/${reservationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async (token, { rejectWithValue }) => {
    try {
      const resp = await axios.get(RESERVATIONS_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  reservations: [],
  isLoading: false,
  error: undefined,
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(getReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload.reservations;
      })
      .addCase(getReservations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default reservationsSlice.reducer;
