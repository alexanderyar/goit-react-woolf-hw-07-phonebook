import PropTypes from 'prop-types';

import { FormikForm } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { HeaderMain, PhonebookWrapper } from './Phonebook.styled';

export const Phonebook = () => {
  return (
    <PhonebookWrapper>
      <HeaderMain>The best phonebook in the world</HeaderMain>
      <FormikForm />
      <Contacts />
    </PhonebookWrapper>
  );
};

Phonebook.propTypes = {
  newContactName: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string,
};
