import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signinUrl = 'http://127.0.0.1:3001/login';
const signupUrl = 'http://127.0.0.1:3001/signup';

const initialState = {
  users: null,
  status: 'idle',
  error: null,
};

export const signupUser = createAsyncThunk('user/signup', async (data) => {
  try {
    const response = await axios.post(signupUrl, data);
    alert('User Created Successfully');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
export const signinUser = createAsyncThunk('user/signin', async (data) => {
  try {
    const response = await axios.post(signinUrl, data);

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid email or password. Please try again.');
    } else {
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    }).addCase(signinUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload.status.data.id;
      localStorage.setItem('user_id', JSON.stringify(action.payload.status.data.id));
    });
  },
});

export default userSlice.reducer;
