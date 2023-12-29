import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { useContactContext } from '../../context/ContactContext';
import { ContactItem } from '../ContactItem';
import { Direction, Notification, Sort } from '../shared';
import { getSortedContacts, sortOptions } from './sortContacts';
import ContactService from '../../services/ContactService';
import { useAlert, useSortedList } from '../../hooks';

const ContactList = () => {
  const { contacts, removeContact } = useContactContext();
  const { alert, showAlert, removeAlert } = useAlert();
  const {
    sortedItems: sortedContacts,
    sortKey,
    sortDirection,
    changeSortKey,
    changeSortDirection,
  } = useSortedList(contacts, sortOptions[0], getSortedContacts);

  const onRemoveContact = (contact) => {
    removeContact(contact.email);
    showAlert({
      severity: 'info',
      title: ContactService.getFullName(contact),
      text: 'Has been removed!',
    });
  };

  return (
    <>
      <Grid padding="0 2.4rem">
        <Grid
          container
          width={{ xs: '100%', sm: '30rem' }}
          justifyContent="space-between"
          padding="1rem 0"
          rowGap="0.8rem"
        >
          <Sort
            options={sortOptions}
            value={sortKey}
            onChange={changeSortKey}
          />
          <Direction value={sortDirection} onChange={changeSortDirection} />
        </Grid>
        {!contacts.length ? (
          <div style={{ marginTop: '2rem' }}>No contacts to show</div>
        ) : (
          <Grid
            xs={12}
            maxHeight="710px"
            flexWrap="nowrap"
            overflow="auto"
            flexDirection="column"
            container
            rowGap="0.8rem"
          >
            {sortedContacts.map((contact) => (
              <ContactItem
                key={contact.email}
                contact={contact}
                onRemove={onRemoveContact}
              />
            ))}
          </Grid>
        )}
      </Grid>
      <Notification {...alert} onClose={removeAlert} />
    </>
  );
};

export default ContactList;
