import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const doctorURL = 'http://127.0.0.1:3001/api/doctors';

const initialState = {
  doctorsContent: [],
  status: 'idle',
};

export const fetchDoctors = createAsyncThunk('doctor/fetchdoctors', async (thunkAPI) => {
  const token = localStorage.getItem('userdata');
  try {
    const response = await axios.get(doctorURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    thunkAPI.rejectWithValue(err);
    return err;
  }
});

export const postDoctor = createAsyncThunk('doctor/postDoctor', async (data) => {
  const token = localStorage.getItem('userdata');
  const newDoctor = {
    doctor: {
      name: data.name,
      specialization: data.specialization,
      cost: data.cost,
      image_url: data.image_url,
    },
  };

  try {
    const response = await axios.post(doctorURL, newDoctor, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success('Added successfully!');
    return { data, response };
  } catch (err) {
    throw err.response.data;
  }
});

export const fetchDoctor = createAsyncThunk('doctor/fetchDoctor', async (doctorId) => {
  const token = localStorage.getItem('userdata');
  const response = await axios.get(`${doctorURL}/${doctorId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // const data = response.json();
  return { res: response.data, doctorId };
});

export const deleteDoctor = createAsyncThunk('doctor/deleteDoctor', async (doctorId, thunkAPI) => {
  const token = localStorage.getItem('userdata');
  try {
    const res = await axios.delete(`${doctorURL}${doctorId}`, doctorId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    thunkAPI.dispatch(fetchDoctors());
    return { doctorId, response: res.data };
  } catch (err) {
    thunkAPI.rejectWithValue(err);
    return err;
  }
});

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.status = 'success';
      state.doctorsContent = action.payload;
    }).addCase(postDoctor.fulfilled, (state, action) => {
      state.status = 'success';
      state.doctorsContent.push(action.payload);
    }).addCase(fetchDoctor.fulfilled, (state, action) => {
      state.status = 'success';
      state.doctorsContent = action.payload;
    }).addCase(deleteDoctor.fulfilled, (state, action) => {
      state.status = 'success';
      state.doctorsContent = state.doctorsContent.filter((item) => item.id === action.payload);
    });
  },
});

export default doctorSlice.reducer;
