import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ users, handleDelete }) => {
  return (
    <div className={css.contacts}>
      {users.map(user => (
        <Contact key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};
