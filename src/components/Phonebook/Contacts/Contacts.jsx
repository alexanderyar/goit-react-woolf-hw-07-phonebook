import React from 'react'

import PropTypes from 'prop-types'
import { Filter } from './Filter/Filter'
import { Header, ListItem, ListWrapper } from './Contacts.styled'
import { useDispatch, useSelector } from 'react-redux'
// import { deletingChosenContact } from 'redux/contactsSlice/contactsSlice'
import { deleteContactThunkOperation, fetchContactsThunkOperation } from 'redux/contacts/contactsOperations'
import { useEffect } from 'react'
import { Trash} from 'grommet-icons';




export const Contacts =  () => {

    const dispatch = useDispatch();
    // fetching contacts from backend;
    useEffect(() => {
      dispatch(fetchContactsThunkOperation())
    }, [dispatch])
    
     const contacts = useSelector(state => state.contacts.contacts);

   
    const filterLowered = useSelector(state => state.filter).toLowerCase()
    
      const filteredContacts =  contacts.filter(contact => 
            contact.name.toLowerCase().includes(filterLowered)
     )

    // refactored. now onDelete click has been transferred FROM Phonebook component. dispatch is used instead of useState to delete (using filter) chosen contact
 const onDeleteClick = (id) => {
        console.log(id)
     dispatch(deleteContactThunkOperation(id));
 }
  
    
    return (
        <>
            <Header>Existing Contacts</Header>
            <Filter />
            <ListWrapper>
                {filteredContacts.map(({ name, id, phone }) => (
                    <ListItem key={id}><p>{name}: {phone}</p><button type="button" onClick={() => onDeleteClick(id)}>  <Trash size="15px"/></button></ListItem>
                    
                ))}
              
            </ListWrapper>
        </>)
}
        

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            
        })),
    filterFunc: PropTypes.func,
    inputValue: PropTypes.string,
    onDeleteClick: PropTypes.func,
}
