import React from 'react';
import styles from './Header.module.css';
import ListSummary from './ListSummary';
import { AddContactButton } from '../shared';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Contacts</h1>
        <ListSummary />
      </div>
      <AddContactButton />
    </div>
  );
};

export default Header;
