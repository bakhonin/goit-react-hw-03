import { useState, useEffect } from 'react';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactForm } from '../ContactForm/ContactForm';
import { Title } from '../Title/Title';
import css from './App.module.css';

export const App = () => {
  const [users, setUsers] = useState(() => {
    const storedContact = JSON.parse(window.localStorage.getItem('users'));
    if (storedContact !== null && storedContact.length > 0) {
      return storedContact;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const [nameFilter, setNameFilter] = useState('');

  const handleDelete = userId => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  const addUser = newUser => {
    setUsers(prevUsers => {
      return [...prevUsers, newUser];
    });
  };

  const visibleUsers = users.filter(user => {
    const userName = user.name || '';
    return userName.toLowerCase().includes(nameFilter.toLowerCase());
  });

  return (
    <div className={css.container}>
      <Title />
      <ContactForm onAdd={addUser} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList users={visibleUsers} handleDelete={handleDelete} />
    </div>
  );
};
