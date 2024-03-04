import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const DOCTORS_URL = 'http://localhost:3001/api/v1/doctors';

export const getDoctors = createAsyncThunk(
  'doctors/getDoctors',
  async (token, { rejectWithValue }) => {
    try {
      const resp = await axios.get(DOCTORS_URL, {
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

export const getDoctor = createAsyncThunk(
  'doctors/getDoctor',
  async (data, { rejectWithValue }) => {
    const { id, token } = data;
    try {
      const resp = await axios.get(`${DOCTORS_URL}/${id}`, {
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

export const postDoctor = createAsyncThunk(
  'doctors/postDoctors',
  async (newData, { rejectWithValue }) => {
    const { data, token } = newData;
    try {
      const response = await axios.post(DOCTORS_URL, data, {
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

export const deleteDoctor = createAsyncThunk(
  'doctors/deleteDoctors',
  async (deleteData, { rejectWithValue }) => {
    const { id, token } = deleteData;
    try {
      const response = await axios.delete(
        `${DOCTORS_URL}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  doctor: {},
  doctors: [],
  isLoading: false,
  error: undefined,
  // post states
  isPosting: false,
  postFail: undefined,
  // delete states
  isDeleting: false,
  deleteFail: undefined,
};

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    resetPostFail: (state) => {
      state.postFail = undefined;
    },
    resetDeleteFail: (state) => {
      state.deleteFail = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctors = action.payload;
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(getDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctor = action.payload;
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(postDoctor.pending, (state) => {
        state.isPosting = true;
      })
      .addCase(postDoctor.fulfilled, (state) => {
        state.isPosting = false;
      })
      .addCase(postDoctor.rejected, (state, action) => {
        state.isPosting = false;
        state.postFail = action.payload.message;
      })
      .addCase(deleteDoctor.pending, (state) => {
        state.isDeleting = true;
      })
      .addCase(deleteDoctor.fulfilled, (state) => {
        state.isDeleting = false;
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.isDeleting = false;
        state.deleteFail = action.payload.message;
      });
  },
});

export const { resetPostFail, resetDeleteFail } = doctorsSlice.actions;
export default doctorsSlice.reducer;