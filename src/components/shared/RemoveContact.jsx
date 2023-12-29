import React, { useState } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { ConfirmationModal, ContactAvatar } from '.';
import ContactService from '../../services/ContactService';

const RemoveContact = ({ contact, onRemove, children }) => {
  const [showModal, setShowModal] = useState(false);

  const onConfirm = () => {
    setShowModal(false);
    onRemove(contact);
  };

  return (
    <div>
      <div onClick={() => setShowModal(true)}>{children}</div>
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={onConfirm}
      >
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap="6px"
        >
          <ContactAvatar
            src={contact.picture.large}
            gender={contact.gender}
            size="large"
          />
          <div style={{ textAlign: 'center' }}>
            Are you sure you want to remove <br />
            <div>
              <b>{ContactService.getFullName(contact)}</b>?
            </div>
          </div>
        </Grid>
        <Grid></Grid>
      </ConfirmationModal>
    </div>
  );
};

export default RemoveContact;
