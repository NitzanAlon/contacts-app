import { customValueSort } from '../../utils';

export const sortOptions = ['First name', 'Days until birthday'];

export const getSortedContacts = (contacts, sortKey, sortDirection) => {
  switch (sortKey) {
    case 'Days until birthday':
      return contacts.toSorted(
        customValueSort((contact) => contact.birthdayDaysLeft, sortDirection)
      );
    default:
      return contacts.toSorted(
        customValueSort(
          (contact) => contact.name.first.toLowerCase(),
          sortDirection
        )
      );
  }
};
