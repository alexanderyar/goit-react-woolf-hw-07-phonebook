import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, FormStyled, Input } from './Form.styled';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunkOperation } from 'redux/contacts/contactsOperations';
import { Header } from '../Contacts/Contacts.styled';
import { selectContacts } from 'redux/selectors/selectors';


const initialValues = {
  name: '',
  phone: '',
};

export const FormikForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  handleSubmit = (values, { resetForm }) => {

    const foundDuplicate = contacts.find(
      contact => contact.name === values.name
    );

    if (foundDuplicate) {
      toast.error(`Oops, ${values.name} is already in your phonebook`);
      return
    }

    dispatch(addContactThunkOperation(values));
    resetForm();
  };

  return (
    <>
      <Header>Let's add a new contact</Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormStyled autoComplete="off">
          <label htmlFor="name">
            Please enter a name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
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
  );
};

FormikForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string),
};
