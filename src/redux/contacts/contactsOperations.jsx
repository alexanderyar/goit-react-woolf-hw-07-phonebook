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

        // getting state to check if a new contact has already been listed as existing contact
        const state = getState()
        console.log(state)
        const currentContacts = state.contacts.contacts;
        
        // trying to find it in the array of contacts by name
        const foundDuplicate = currentContacts.find(contact => contact.name === newContact.name)
        if (foundDuplicate) {
            toast.error(`Oops, ${newContact.name} is already in your phonebook`)
            // rejecting promise if the contact exists
        return  rejectWithValue('Oops, this contact is already in your phonebook') }
            // adding new contact if it has cleared all the checks above
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