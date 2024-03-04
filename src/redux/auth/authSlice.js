import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = !!action.payload;
    },
    clearToken: (state) => {
      state.email = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
