import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled, FormStyled, Input } from './Form.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { addingNewContact } from 'redux/contactsSlice/contactsSlice';
import { addContactThunkOperation } from 'redux/contacts/contactsOperations';
import { Header } from '../Contacts/Contacts.styled';






// values for Formik 
const initialValues = {
    name: '',
    phone: ''
}
   
export const FormikForm = ({ handleSubmit }) => {

    // const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch();
    
     
// const updatePhoneBookList = (newContactName) => {
//         console.log(newContactName)
        
//         // checking if this contact new or exists in the phonebook
//         const foundDuplicate = contacts.find(contact => contact.name === newContactName.name)
//         if (foundDuplicate) {
//             alert(`Open your eyes, ${newContactName.name} is already in your phonebook!`)
//         return}
//         // adding new contact name
//         const contactNew = { ...newContactName, id: nanoid() }
//         console.log(contactNew)

//         dispatch(addingNewContact(contactNew))
// }
    
    
handleSubmit = (values, {resetForm}) => {
        
    console.log(values)

        // refactored. Now addContactThunkOperation from API gets values and sends it deeper to addContact from API service, not updatePhoneBookList
        dispatch(addContactThunkOperation(values))
        //  updatePhoneBookList(values)   
        resetForm();
        
}
    
     
  

    return (
        <>
           <Header>Let's add a new contact</Header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
             <FormStyled autoComplete='off'>
            <label htmlFor="name">
               Please enter a name
            <Input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
                </label>

                <label htmlFor="number">
                   phone number
                    <Input
  type="tel"
  name="phone"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
               </label>
            
                <ButtonStyled type="submit">Submit</ButtonStyled>
      
 

        
        </FormStyled>
            </Formik>
        </>
    )
}


FormikForm.propTypes = {
    initialValues: PropTypes.objectOf(PropTypes.string),
}