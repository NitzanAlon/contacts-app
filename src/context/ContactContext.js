import { createContext, useContext } from 'react';

export const ContactContext = createContext();

export const useContactContext = () => {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error('useContactContext must be used with an ContactContext');
  }

  return context;
};
