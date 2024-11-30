import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
