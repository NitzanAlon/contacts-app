import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ContactService from '../../services/ContactService';
import {
  ContactAvatar,
  ContactInfoButton,
  EmailAddress,
  RemoveContact,
} from '../shared';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onRemove }) => {
  const fullName = ContactService.getFullName(contact);

  return (
    <Grid className={styles.wrapper} container alignItems="center">
      <Grid container gap="6px" alignItems="center" xs={11} sm={8}>
        <ContactAvatar
          src={contact.picture.thumbnail}
          gender={contact.gender}
        />
        <Grid container flexDirection="column" alignSelf="center">
          <div className={styles.name}>{fullName}</div>
          <EmailAddress className={styles.email} email={contact.email} />
          <span style={{ fontSize: '1.1rem' }}>
            days to birthday: {contact.birthdayDaysLeft}
          </span>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sm={3}
        order={{ xs: 3, sm: 'initial' }}
        marginTop={{ xs: '6px' }}
        justifyContent="flex-end"
      >
        <ContactInfoButton text="More information" contact={contact} />
      </Grid>
      <Grid container xs={1} justifyContent="center">
        <RemoveContact contact={contact} onRemove={onRemove}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </RemoveContact>
      </Grid>
    </Grid>
  );
};

export default React.memo(ContactItem);
