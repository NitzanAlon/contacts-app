import React from 'react';
import cn from 'classnames';
import styles from './ContactAvatar.module.css';

const getAvatarClass = (gender, size) => {
  return cn(styles['contact_avatar'], {
    [styles['contact_avatar--male']]: gender === 'male',
    [styles['contact_avatar--female']]: gender === 'female',
    [styles['contact_avatar--small']]: size === 'small',
    [styles['contact_avatar--large']]: size === 'large',
  });
};

const ContactAvatar = ({ src, gender, size = 'small' }) => {
  const avatarClass = getAvatarClass(gender, size);

  return <img className={avatarClass} src={src} />;
};

export default ContactAvatar;
