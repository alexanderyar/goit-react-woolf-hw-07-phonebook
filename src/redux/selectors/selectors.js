import { useSelector } from 'react-redux';

export const selectContacts = useSelector(state => state.contacts.contacts);

export const selectFilter = useSelector(state => state.filter).toLowerCase();
