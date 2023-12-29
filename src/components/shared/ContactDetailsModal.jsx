import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { format } from 'date-fns';
import ContactService from '../../services/ContactService';
import { ContactAvatar } from './ContactAvatar';
import { EmailAddress, Modal } from '.';

const ContactOption = ({ children }) => (
  <Grid container alignItems="center" columnGap="8px">
    {children}
  </Grid>
);

const ContactDetailsModal = ({ isOpen, setIsOpen, contact }) => {
  return (
    <Modal isOpen={isOpen} fullWidth onClose={() => setIsOpen(false)}>
      <Grid container alignItems="center" columnGap="6px" marginBottom="8px">
        <ContactAvatar
          src={contact.picture.large}
          gender={contact.gender}
          size="large"
        />
        <Grid>
          <h3>
            {ContactService.getFullName(contact)}, {contact.dob.age}
          </h3>
          <div>{format(new Date(contact.dob.date), 'dd/MM/yyyy')}</div>
        </Grid>
      </Grid>
      <Grid container flexDirection="column">
        <h4>Contact:</h4>
        <ContactOption>
          <HomeIcon />
          {ContactService.getAddress(contact)}
        </ContactOption>
        <ContactOption>
          <PhoneIcon />
          {contact.phone}
        </ContactOption>
        <ContactOption>
          <EmailIcon />
          <EmailAddress email={contact.email} />
        </ContactOption>
      </Grid>
    </Modal>
  );
};

export default ContactDetailsModal;
