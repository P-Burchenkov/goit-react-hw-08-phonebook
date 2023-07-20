import { createSlice } from '@reduxjs/toolkit';
import {
  authUser,
  fetchCurrentUser,
  logIn,
  logOut,
} from 'redux/Authorization/operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },

  token: null,
  isLogedIn: false,
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogedIn = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogedIn = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLogedIn = false;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      // state.token = action.payload.token;
      state.isLogedIn = true;
    });
  },
});
