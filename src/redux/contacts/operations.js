import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'fetchContactsStatus',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get('/contacts');

      if (!responce.data.length) {
        return rejectWithValue('There is no contacts in your phonebook');
      }
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContactStatus',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'delContactStatus',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`, id);
      toast.success(
        `Number with name "${data.name}" was successfully deleted from your phonebook!`
      );
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
