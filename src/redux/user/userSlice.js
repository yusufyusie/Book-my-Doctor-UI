import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const signinUrl = 'http://127.0.0.1:3001/login';
const signupUrl = 'http://127.0.0.1:3001/signup';

const initialState = {
  userContent: [],
  status: 'idle',
  error: null,
};

export const signupUser = createAsyncThunk('user/signup', async (data) => {
  const addUser = {
    user: {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    },
  };

  try {
    const response = await axios.post(signupUrl, addUser);
    toast.success('Signup successful.');
    return { data, response };
  } catch (error) {
    throw error.response.data;
  }
});
export const signinUser = createAsyncThunk('user/signin', async (data) => {
  const loginUser = {
    user: {
      email: data.email,
      password: data.password,
    },
  };

  try {
    const response = await axios.post(signinUrl, loginUser);
    if (response.data.token) {
      localStorage.setItem('userdata', response.data.token, response.data.user);
    }
    return { data, response };
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
  reducers: {
    logout: (state) => {
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.userContent = action.payload;
    }).addCase(signinUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.userContent = action.payload.response.data.user;
      localStorage.setItem('token', JSON.stringify(action.payload.response.data.user));
    });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
