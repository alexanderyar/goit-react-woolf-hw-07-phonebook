import { createAsyncThunk } from "@reduxjs/toolkit";

import { addContact, deleteContactById, fetchContacts } from "services/api";
// eslint-disable-next-line no-unused-vars
import toast, { Toaster } from 'react-hot-toast';



export const fetchContactsThunkOperation = createAsyncThunk("contacts/fetchAll",
    async (_, { rejectWithValue}) => {
  try {
    const response = await fetchContacts();
    return response;
  } catch (error) {
    return rejectWithValue(error)
  }
    });
 


export const addContactThunkOperation = createAsyncThunk("contacts/addContact",
async (newContact, { rejectWithValue, getState }) => {
    try {

        const state = getState()
        console.log(state)
        const currentContacts = state.contacts.contacts;
        
        const foundDuplicate = currentContacts.find(contact => contact.name === newContact.name)
        if (foundDuplicate) {
            toast.error(`Oops, ${newContact.name} is already in your phonebook`)
        return  rejectWithValue('Oops, this contact is already in your phonebook') }
            const response = await addContact(newContact)
            if (response) {toast.success('sucessfully added!')}
            return response;
        } catch (error) {
            if (error) {toast.error(error.message)}
            return rejectWithValue(error)
        }
    }
)



export const deleteContactThunkOperation = createAsyncThunk("contacts/deleteContact",
async (id, { rejectWithValue }) => {
        try {
            const response = await deleteContactById(id);
            if (response) {toast.success('sucessfully deleted!')}
            return response;
        } catch (error) {
            if (error) {toast.error(error.message)}
            return rejectWithValue(error)
        }
    }
)