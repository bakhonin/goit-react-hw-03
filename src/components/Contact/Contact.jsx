import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

export const Contact = ({ user, onDelete }) => {
  return (
    <div className={css.contact}>
      <ul className={css.contactList}>
        <li className={css.contactName}>
          <BsFillPersonFill /> Name: {user.name}
        </li>
        <li className={css.contactNumber}>
          <BsFillTelephoneFill /> Number: {user.number}
        </li>
      </ul>
      <button className={css.deleteBtn} onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </div>
  );
};
