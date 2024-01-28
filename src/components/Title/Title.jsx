import { FaAddressBook } from 'react-icons/fa';
import css from './Title.module.css';

export const Title = () => {
  return (
    <div className={css.title}>
      <h1 className={css.titleText}>
        Phonebook <FaAddressBook />
      </h1>
    </div>
  );
};
