import { useState } from 'react';

const DEFAULT_STATE = {
  show: false,
  severity: '',
  title: '',
  text: '',
};

const useAlert = () => {
  const [alert, setAlert] = useState(DEFAULT_STATE);

  const showAlert = ({ severity = 'info', title = 'title', text = 'text' }) => {
    setAlert({
      show: true,
      severity,
      title,
      text,
    });
  };

  const removeAlert = () => {
    setAlert(DEFAULT_STATE);
  };

  return {
    alert,
    showAlert,
    removeAlert,
  };
};

export default useAlert;
