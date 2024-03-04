import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      password: null,
    },
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = !!action.payload;
    },
    setPassword: (state, action) => {
      state.user.password = action.payload;
    },
    clearToken: (state) => {
      state.user.email = null;
      state.user.password = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, setPassword, clearToken } = authSlice.actions;
export default authSlice.reducer;