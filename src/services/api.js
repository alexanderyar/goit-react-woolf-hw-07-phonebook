import axios from 'axios';

axios.defaults.baseURL = 'https://63db2425b8e69785e47c6aff.mockapi.io/api/v1/';

export async function fetchContacts() {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addContact(newContact) {
  try {
    const { data } = await axios.post('/contacts', {
      name: newContact.name,
      phone: newContact.phone,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteContactById(id) {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
