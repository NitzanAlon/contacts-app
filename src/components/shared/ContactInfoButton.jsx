import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ContactDetailsModal } from '.';

const ContactInfoButton = ({ text, contact }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setShowModal(true)}>
        {text}
      </Button>
      <ContactDetailsModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        contact={contact}
      />
    </>
  );
};

export default ContactInfoButton;
