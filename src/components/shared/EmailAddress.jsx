import React from 'react';

const EmailAddress = ({ email, className }) => {
  return (
    <a className={className} href={`mailto:${email}`}>
      {email}
    </a>
  );
};

export default EmailAddress;
