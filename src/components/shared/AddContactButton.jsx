import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import { useContactContext } from '../../context/ContactContext';
import { Notification } from '.';
import { useAlert } from '../../hooks';
import ContactService from '../../services/ContactService';

const AddContactButton = () => {
  const { addContact } = useContactContext();
  const { alert, showAlert, removeAlert } = useAlert();
  const [fetching, setFetching] = useState(false);

  const onClick = useCallback(async () => {
    try {
      setFetching(true);
      const newContact = await addContact();
      showAlert({
        severity: 'success',
        title: ContactService.getFullName(newContact),
        text: 'Added successfully!',
      });
    } catch (error) {
      showAlert({
        severity: 'error',
        title: 'Something went wrong',
        text: 'Please try again',
      });
    } finally {
      setFetching(false);
    }
  }, [addContact]);

  return (
    <>
      <Button variant="contained" onClick={onClick} disabled={fetching}>
        Add Contact
      </Button>
      <Notification {...alert} onClose={() => removeAlert()} />
    </>
  );
};

export default AddContactButton;
