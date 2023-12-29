import { isFuture, differenceInDays } from 'date-fns';

class ContactService {
  static getFullName(contact) {
    const { name } = contact;
    return `${name.first} ${name.last}`;
  }

  static getAddress(contact) {
    const {
      location: { street, city, country },
    } = contact;
    return `${street.name} ${street.number}, ${city}, ${country}`;
  }

  static getBirthdayDaysLeft(contact) {
    const today = new Date();
    const currentYearBirthDay = new Date(contact.dob.date).setFullYear(
      today.getFullYear()
    );
    const upcomingBirthday = isFuture(currentYearBirthDay)
      ? currentYearBirthDay
      : new Date(currentYearBirthDay).setFullYear(today.getFullYear() + 1);

    return differenceInDays(upcomingBirthday, today);
  }

  static getDistinctCountries(contacts = []) {
    const countries = contacts.map((contact) => contact.location.country);
    const distinctCountries = [...new Set(countries)];
    return distinctCountries;
  }
}

export default ContactService;
