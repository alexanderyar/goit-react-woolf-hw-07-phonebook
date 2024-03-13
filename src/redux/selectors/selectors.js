export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => { if (state.filter) { return state.filter.toLowerCase()};}
    
    
