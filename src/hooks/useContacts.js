import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import ContactService from '../services/ContactService';

const LOCAL_STORAGE_KEY = 'contacts';
const getStorage = () => localStorage.getItem(LOCAL_STORAGE_KEY);
const setStorage = (data) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (!contacts.length) {
      const lsContacts = getStorage();
      if (lsContacts) {
        setContacts(JSON.parse(lsContacts));
      }
    }
  }, []);

  const addContact = useCallback(async () => {
    console.log('addContact, contacts = ', contacts);
    try {
      const { data } = await axios.get('https://randomuser.me/api/');
      const contact = data.results[0];
      // Adding birthday days left to prevent doing it every sort change (won't be updated on refresh but so is rest of the data like age once stored in LS)
      contact.birthdayDaysLeft = ContactService.getBirthdayDaysLeft(contact);
      //
      const newContacts = [...contacts, contact];
      updateList(newContacts);
      return contact;
    } catch (error) {
      throw error;
    }
  }, [contacts]);

  const removeContact = useCallback(
    // assuming contact's email is unique
    async (contactEmail) => {
      const newContacts = contacts.filter(
        (contact) => contact.email !== contactEmail
      );
      updateList(newContacts);
    },
    [contacts]
  );

  const updateList = (list) => {
    setStorage(list);
    setContacts(list);
  };

  return {
    contacts,
    addContact,
    removeContact,
  };
};

export default useContacts;
