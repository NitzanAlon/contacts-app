import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ConfirmationModal = ({ title, isOpen, onClose, onConfirm, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
