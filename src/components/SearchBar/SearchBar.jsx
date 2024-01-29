import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    onSearch(form.elements.topic.value);
    console.log(form.elements.topic.value);
    form.reset();
  };
  return (
    <header className={css.box}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <IoIosSearch className={css.serchIcon} />
        </button>
      </form>
    </header>
  );
};
