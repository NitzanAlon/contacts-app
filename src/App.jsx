import React from 'react';
import { ContactContext } from './context/ContactContext';
import { Header } from './components/Header';
import { ContactList } from './components/ContactList';
import { useContacts } from './hooks';

const App = () => {
  const { contacts, addContact, removeContact } = useContacts();

  return (
    <div>
      <ContactContext.Provider
        value={{
          contacts,
          addContact,
          removeContact,
        }}
      >
        <Header />
        <ContactList />
      </ContactContext.Provider>
    </div>
  );
};

export default App;
