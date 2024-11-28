//? Components
import Contact from '../Contact/Contact';
//? CSS
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
          {...contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
