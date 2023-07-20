import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const authUser = createAsyncThunk(
  'addUserStatus',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Oops... Something went wrong!');
    }
  }
);

export const logIn = createAsyncThunk(
  'logInStatus',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(
        'Oops... Something went wrong! Enter correct"email" and "password", please'
      );
    }
  }
);

export const logOut = createAsyncThunk(
  'logOutStatus',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/users/logout');
      console.log(responce);
      token.unSet();
    } catch (error) {
      return rejectWithValue(
        'Oops, something went wrong((( Try again, please!'
      );
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.user.token;
    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
