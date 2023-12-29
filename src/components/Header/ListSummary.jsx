import React from 'react';
import ContactService from '../../services/ContactService';
import { useContactContext } from '../../context/ContactContext';

const ListSummary = () => {
  const { contacts } = useContactContext();
  return (
    <div>
      <span>Contacts:&nbsp;{contacts.length}, </span>
      <span>
        Countries:&nbsp;
        {ContactService.getDistinctCountries(contacts).length}
      </span>
    </div>
  );
};

export default React.memo(ListSummary);
