import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';

const Notification = ({ show, onClose, severity, title, text }) => {
  return (
    show && (
      <Snackbar open autoHideDuration={4000} onClose={onClose}>
        <Alert severity={severity} sx={{ width: '100%' }} onClose={onClose}>
          {title && <AlertTitle>{title}</AlertTitle>}
          {text && <span>{text}</span>}
        </Alert>
      </Snackbar>
    )
  );
};

export default React.memo(Notification);
