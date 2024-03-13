import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContactsThunkOperation,
  addContactThunkOperation,
  deleteContactThunkOperation,
} from 'redux/contacts/contactsOperations';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addingNewContact(state, action) {
      state.contacts.push(action.payload);
    },

    deletingChosenContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },

  extraReducers: {
    [fetchContactsThunkOperation.pending](state) {
      state.isLoading = true;
    },
    [fetchContactsThunkOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      state.contacts = action.payload;
    },
    [fetchContactsThunkOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContactThunkOperation.pending](state) {
      state.isLoading = true;
    },
    [addContactThunkOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContactThunkOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactThunkOperation.pending](state) {
      state.isLoading = true;
    },
    [deleteContactThunkOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContactThunkOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addingNewContact, deletingChosenContact } =
  contactsSlice.actions;
