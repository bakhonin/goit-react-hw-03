import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.search}>
      <label className={css.searchForm}>
        Find contact by name
        <input
          className={css.searchInput}
          type="text"
          value={value}
          onChange={evt => onChange(evt.target.value)}
        />
      </label>
    </div>
  );
};
