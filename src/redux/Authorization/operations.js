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
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
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
      rejectWithValue(error.message);
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
      rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'refreshUser',
  async (selectedToken, { rejectWithValue }) => {
    token.set(selectedToken);
    try {
      const { data } = await axios.get('/users/current');

      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
