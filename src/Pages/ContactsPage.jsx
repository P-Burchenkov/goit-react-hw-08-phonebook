import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import SearchBox from 'components/SearchBox/SearchBox';

export function ContactsPage() {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <Contacts />
    </>
  );
}
