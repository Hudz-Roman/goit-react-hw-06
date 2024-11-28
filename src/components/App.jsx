//? Components
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
//? Libraries
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
//? CSS
import '../index.css';
import 'modern-normalize';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('Contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
    setFilteredContacts(contacts);
  }, [contacts]);

  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );
    setFilteredContacts(filtered);
  };

  const handleAddContact = (contact) => {
    setContacts((prev) => [...prev, { ...contact, id: nanoid() }]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox handleFilter={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
